import sqlite3
import pandas as pd
import time
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

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

# Endpoints para listados
@app.route('/campos')
def get_campos():
    return {'data': [{"name":"1", "val":12},{"name":"2", "val":11},{"name":"3", "val":14},]}

@app.route('/contratos')
def get_contratos():
    return {'data': [time.time()]}

@app.route('/operadoras')
def get_operadoras():
    return {'data': [time.time()]}

@app.route('/departamentos')
def get_departamentos():
    return {'data': [time.time()]}

# Endpoints para datos, ingresa como parametro el 
# nombre del item a buscar
@app.route('/campo/<campo>')
def get_per_campo(campo):
    return {'data': time.time()}
    
@app.route('/contrato/<contrato>')
def get_per_contrato(contrato):
    return {'data': time.time()}

@app.route('/operadora/<operadora>')
def get_per_operadora(operadora):
    return {'data': time.time()}

@app.route('/departamento/<departamento>')
def get_per_departamento(departamento):
    return {'data': time.time()}

if __name__ == '__main__':
    app.run()