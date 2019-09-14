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

def query_cooccurrences(search_id=17):
    """ PURPOSE: grab list of tuples from which to generate co-occurrence matrix """

    print("recommend_engine.py ||| CONNECTING to database")
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
        ORDER BY \"partyId\", \"dexId\" ASC;
        """.format(id_to_search=search_input_id)

    print("recommend_engine.py ||| EXECUTING SQL", sql_query)
    cur.execute(sql_query)
    rows = cur.fetchall()
    for row in rows:
        print(row)

    print("recommend_engine.py ||| CLOSING database connection")
    # finish by closing connections
    cur.close()
    conn.close()

query_cooccurrences(17)

print("recommend_engine.py ||| DONE")
