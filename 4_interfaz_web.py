import sqlite3
import pandas as pd
import time
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

if __name__ == '__main__':
    app.run()

# Crea una conexión a la base de datos sqlite
con = sqlite3.connect("base_datos.db")
cur = con.cursor()

# Leemos todas la tablas de la base de datos
tables = []
for table in cur.execute("SELECT name FROM sqlite_master WHERE type='table';"):
    tables.append(table)

# EJEMPLO: muestra los departamentos de cada tabla (excels, ver filenames del archivo 1)
for table in tables:
    for departamento in cur.execute('SELECT DEPARTAMENTO FROM "' + str(table[0]) + '";'):
        print(departamento)

# Hacer procesos y lecturas para DATOS OFICIALES

# Cerramos la conexión
con.close()