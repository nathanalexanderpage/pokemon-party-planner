print("recommend_engine.py RUNNING")
print("recommend_engine.py IMPORTING necessary modules")

import numpy as np
import os
import pandas as pd
import psycopg2

from dotenv import load_dotenv
from sklearn.metrics.pairwise import pairwise_distances

print("recommend_engine.py INITIALIZING .env variables")
load_dotenv()
DB_NAME = os.getenv('DB_NAME')
DB_USER = os.getenv('DB_USER')

print("recommend_engine.py CONNECTING to database")
# establish connection to database
conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER)
# create cursor object, used to execute SQL statements
cur = conn.cursor()

print("recommend_engine.py CLOSING database connection")
# finish by closing connections
cur.close()
conn.close()

print("recommend_engine.py DONE")
