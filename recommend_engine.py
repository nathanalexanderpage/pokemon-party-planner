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

        print("recommend_engine.py ||| EXECUTING SQL", sql_query)
        cur.execute(sql_query)
        rows = cur.fetchall()
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

party_pokes_dict = query_cooccurrences(17)
print(party_pokes_dict)

print("recommend_engine.py ||| DONE")
