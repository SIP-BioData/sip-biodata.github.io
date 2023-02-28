import csv
import pandas as pd

df_integbio = pd.read_csv("../integbio_dbcatalog.csv")
df_integbio_column = pd.read_csv("../csv/integbio_dbcatalog_column.csv")

with open("../csv/integbio_dbcatalog_column.csv", "r") as csv_integbio_column:
    dict_integbio_column = csv.DictReader(csv_integbio_column)
    for integbio_column in dict_integbio_column:
      df_integbio.rename(columns=integbio_column, inplace=True)
      df_integbio.to_json("../data/integbio_database.json", orient="records")

df_integbio_column.to_json("../data/integbio_database_column.json", orient="records")
