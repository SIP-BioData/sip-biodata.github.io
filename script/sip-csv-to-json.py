import csv
import pandas as pd

df_sip = pd.read_csv("../sip_database.csv", encoding="utf-8")
df_sip_column = pd.read_csv("../csv/sip_database_column.csv")

with open("../csv/sip_database_column.csv", "r") as csv_sip_column:
    dict_sip_column = csv.DictReader(csv_sip_column)
    df_sip = df_sip.iloc[:, 0:len(df_sip_column.columns)]
    for sip_column in dict_sip_column:
      df_sip.rename(columns=sip_column, inplace=True)
      df_sip.to_json("../data/sip_database.json", orient="records")

df_sip_column.to_json("../data/sip_database_column.json", orient="records")
