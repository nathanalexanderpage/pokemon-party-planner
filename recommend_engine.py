# RUN_FILE_USING_LOCAL_VARS? if True, in-file manually defined vars; if False, imported vars when this file is run as child process (i.e. from server process in node.js)
RUN_FILE_USING_LOCAL_VARS = False

def print_if_local(statement_to_print):
    if RUN_FILE_USING_LOCAL_VARS:
        print(statement_to_print)

print_if_local("recommend_engine.py ||| RUNNING")
print_if_local("recommend_engine.py ||| IMPORTING necessary modules")

import numpy as np
import os
import pandas as pd
import psycopg2 # PostgreSQL connection
import sys # allows this file to use flush output function

from dotenv import load_dotenv
# from sklearn.metrics.pairwise import pairwise_distances
"""sklearn import possibly needed for further statistical (matrix) analysis"""

print_if_local("recommend_engine.py ||| INITIALIZING .env variables")
load_dotenv()
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')

# import variables from parent process
if RUN_FILE_USING_LOCAL_VARS:
    DEX_ID_SEARCH = 43
    MAX_NUM_RECS = 6
else:
    DEX_ID_SEARCH = int(sys.argv[1])
    MAX_NUM_RECS = int(sys.argv[2])

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

def query_cooccurrences(search_id):
    """ PURPOSE: grab list of tuples from which to generate co-occurrence matrix """

    print_if_local("recommend_engine.py ||| CONNECTING to database")
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

        print_if_local("recommend_engine.py ||| EXECUTING SQL")
        print_if_local("\nQuery:")
        print_if_local(sql_query)
        cur.execute(sql_query)
        rows = cur.fetchall()
        print_if_local("\nQuery Results:")
        for row in rows:
            print_if_local(row)
        output_dict = two_index_tuples_to_dict(rows)

        print_if_local("recommend_engine.py ||| CLOSING database connection")
        # finish by closing connections
        cur.close()
        conn.close()
        return output_dict
    except(Exception, psycopg2.DatabaseError) as error:
        print_if_local(error)
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

party_pokes_dict = query_cooccurrences(DEX_ID_SEARCH)
print_if_local(party_pokes_dict)
occurrence_rows_dict = create_occurrence_matrix_rows(party_pokes_dict)
print_if_local(occurrence_rows_dict)

occurrence_rows_dict['title'] = party_pokes_dict['all_dexes']

df = pd.DataFrame(occurrence_rows_dict).set_index('title')
# print_if_local(df.T) # print_if_local the transpose of occurrence matrix (columns = dex IDs; rows = party IDs)

cooccurrence_matrix = df.dot(df.T)
np.fill_diagonal(cooccurrence_matrix.values, 0)
print_if_local("\nCo-occurrence Matrix:")
print_if_local(cooccurrence_matrix)

relevant_row = cooccurrence_matrix[DEX_ID_SEARCH]
print_if_local("\nRelevant Row:")
print_if_local(relevant_row)

suggestions_by_rank = {}
for indiv_dex in party_pokes_dict['all_dexes']:
    if relevant_row[indiv_dex] != 0:
        if relevant_row[indiv_dex] in suggestions_by_rank.keys():
            suggestions_by_rank[relevant_row[indiv_dex]].append(indiv_dex)
        else:
            suggestions_by_rank[relevant_row[indiv_dex]] = [indiv_dex]
ranks_list_desc = list(suggestions_by_rank.keys())
ranks_list_desc.sort(reverse=True)
print_if_local("\nranks_list_desc:")
print_if_local(ranks_list_desc)
ranked_suggestions = []
for rank in ranks_list_desc:
    for ranked_dex in suggestions_by_rank[rank]:
        ranked_suggestions.append(ranked_dex)
output_ranked_suggestions = ranked_suggestions[:MAX_NUM_RECS]

print_if_local("\nsuggestions_by_rank:")
print_if_local(suggestions_by_rank)
print_if_local("\nranked_suggestions:")
print_if_local(ranked_suggestions)
print_if_local("\noutput_ranked_suggestions:")
print(output_ranked_suggestions)
print_if_local("")

if not RUN_FILE_USING_LOCAL_VARS:
    print_if_local("recommend_engine.py ||| FLUSHING output to node.js")
    sys.stdout.flush()

print_if_local("recommend_engine.py ||| DONE")
