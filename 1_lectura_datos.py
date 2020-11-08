import sqlite3
import pandas as pd

#@HACER: Falta limpiar el final de los datos, para retirar el total y espacios

# Ruta de los archivos, nombres e índices de dónde comienza la información útil del excel
path = "202010/"
filenames = ["Producción Fiscalizada Crudo 2020 Agosto",
             "Producción Fiscalizada Crudo 2018",
             "Producción Fiscalizada Crudo 2019-DIC",
             "Data_BlindTest/Producción Fiscalizada Crudo_2018_12458",
             "Data_BlindTest/Producción Fiscalizada Crudo 2017",
             "Data_BlindTest/Producción Fiscalizada Crudo ANH Colombia 2019 - final"]
indexes = [6, 2, 2, 0, 0, 0]

# Crea una conexión a la base de datos sqlite
con = sqlite3.connect("base_datos.db")

# Para cada una de las bases de datos
for file in filenames:
    file_extension = ".xlsx"
    full_path = path + file+file_extension
    # Leemos el archivo excel para obtener las hojas
    wb = pd.ExcelFile(full_path)
    sheet = wb.sheet_names[0]  # Tomamos solo la primera hoja
    # Leemos la hoja
    df = pd.read_excel(full_path, sheet_name=sheet, header=None)
    # Removemos las cabeceras del excel antes de guardar en SQLite
    df = df.iloc[indexes[filenames.index(file)]:] # Tomamos las filas desde cada índice en adelante
    df.iloc[0] = df.iloc[0].str.upper()
    print(df)
    # Hacemos la cabecera con la primera fila
    new_header = df.iloc[0] #grab the first row for the header
    df = df[1:] #take the data less the header row
    df.columns = new_header #set the header row as the df header
    # Escribe la hoja como una tabla en la base de datos conectada
    # reemplaza si existe
    df.to_sql(file, con, index=False, if_exists="replace")

con.commit()
con.close()
