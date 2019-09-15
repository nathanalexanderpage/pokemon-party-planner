print("recommend_engine.py ||| RUNNING")
print("recommend_engine.py ||| IMPORTING necessary modules")

import numpy as np
import os
import pandas as pd
import psycopg2

from dotenv import load_dotenv
from sklearn.metrics.pairwise import pairwise_distances

print("recommend_engine.py ||| INITIALIZING .env variables")
load_dotenv()
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')

def two_index_tuples_to_dict(list_of_tuples_input):
    output = {
        'parties': {},
        'all_dexes': []
    }
    for tup in list_of_tuples_input:
        if (tup[0] not in output['parties'].keys()):
            output['parties'][tup[0]] = [tup[1]]
        else:
            output['parties'][tup[0]].append(tup[1])
        if (tup[1] not in output['all_dexes']):
            output['all_dexes'].append(tup[1])
    output['all_dexes'].sort()
    return output

def query_cooccurrences(search_id=17):
    """ PURPOSE: grab list of tuples from which to generate co-occurrence matrix """

    print("recommend_engine.py ||| CONNECTING to database")
    conn = None
    try:
        # establish connection to database
        conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER)
        # create cursor object, used to execute SQL statements
        cur = conn.cursor()

        search_input_id = str(search_id)

        sql_query = """
            SELECT op.\"partyId\", o.\"dexId\"
            FROM owns_parties op
            INNER JOIN owns o ON o.id = op.\"ownId\"
            WHERE \"partyId\" IN
                (SELECT DISTINCT \"partyId\" FROM owns_parties WHERE \"ownId\" IN
                    (SELECT id FROM owns WHERE \"dexId\" = {id_to_search})
                )
            ORDER BY \"partyId\", \"dexId\" ASC;""".format(id_to_search=search_input_id)

        print("recommend_engine.py ||| EXECUTING SQL")
        print("\nQuery:", sql_query)
        cur.execute(sql_query)
        rows = cur.fetchall()
        print("\nQuery Results:")
        for row in rows:
            print(row)
        output_dict = two_index_tuples_to_dict(rows)

        print("recommend_engine.py ||| CLOSING database connection")
        # finish by closing connections
        cur.close()
        conn.close()
        return output_dict
    except(Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()

def create_occurrence_matrix_rows(presence_in_parties_dict):
    output = {}
    dex_tuple_guide_dict = {}
    column_counter = -1
    for dex in presence_in_parties_dict['all_dexes']:
        column_counter += 1
        dex_tuple_guide_dict[dex] = column_counter
    for key in presence_in_parties_dict['parties'].keys():
        row_list = []
        for x in range(0, len(presence_in_parties_dict['all_dexes'])):
            row_list.append(0)
        for dex_id in presence_in_parties_dict['parties'][key]:
            if (dex_id in presence_in_parties_dict['all_dexes']):
                row_list[dex_tuple_guide_dict[dex_id]] = 1
        output[key] = tuple(row_list)
    return output

DEX_ID_SEARCH = 17
party_pokes_dict = query_cooccurrences(DEX_ID_SEARCH)
print(party_pokes_dict)
occurrence_rows_dict = create_occurrence_matrix_rows(party_pokes_dict)
print(occurrence_rows_dict)

occurrence_rows_dict['title'] = party_pokes_dict['all_dexes']

df = pd.DataFrame(occurrence_rows_dict).set_index('title')
# print(df.T)

cooccurrence_matrix = df.dot(df.T)
np.fill_diagonal(cooccurrence_matrix.values, 0)
print("\nCo-occurrence Matrix:\n", cooccurrence_matrix)

relevant_row = cooccurrence_matrix[DEX_ID_SEARCH]
print("\nRelevant Row:\n", relevant_row)

suggestions_by_rank = {}
for indiv_dex in party_pokes_dict['all_dexes']:
    if relevant_row[indiv_dex] != 0:
        if relevant_row[indiv_dex] in suggestions_by_rank.keys():
            suggestions_by_rank[relevant_row[indiv_dex]].append(indiv_dex)
        else:
            suggestions_by_rank[relevant_row[indiv_dex]] = [indiv_dex]
ranks_list_desc = list(suggestions_by_rank.keys())
ranks_list_desc.sort(reverse=True)
print("\nranks_list_desc:\n", ranks_list_desc)
ranked_suggestions = []
for rank in ranks_list_desc:
    for ranked_dex in suggestions_by_rank[rank]:
        ranked_suggestions.append(ranked_dex)

print("\nsuggestions_by_rank:\n", suggestions_by_rank)
print("\nranked_suggestions:\n", ranked_suggestions)

print("recommend_engine.py ||| DONE")
