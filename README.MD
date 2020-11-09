# DATAWAREHOUSE HACKATHON SPE COLOMBIA
Tener python 3 instalado. [Ver más](https://www.python.org/downloads/).

Instalar con pip: 
`pip install numpy==1.19.3 sqlite3 pandas xlrd flask flask-cors`

Instalar el visor de SQLite para más facilidad [descarga directa aqui (Windows)](https://download.sqlitebrowser.org/DB.Browser.for.SQLite-3.12.0-win64.msi)

## Ejecutar Lectura de datos
Para correr la lectura y llenar la base de datos SQLite
`python 1_lectura_datos.py`

## Respuestas Oficiales
Para correr la lectura y llenar la base de datos SQLite
`python 2_respuestas_oficiales.py`

## Respuestas del Blind Test
Para correr la lectura y llenar la base de datos SQLite
`python 3_respuestas_blind.py`

## Ejecutar Interfaz Web
Instalar NodeJS y NPM con NVM (Recomendado): [Tutorial](https://tecadmin.net/install-nodejs-with-nvm/)

Ejecuta la aplicación Web
`cd webapp-react`
`npm install`
`npm start`

En el navegador abrir [https://localhost:3000](https://localhost:3000)


## Datos desencriptados de la carpeta blindtest
Para decifrar las columnas de campo, 
Se saca una gráfica de producción vs. tiempo de las que están encriptadas y esa misma gráfica se compara con las que no están encriptadas correspondientes claro al mismo año de ambos archivos. Para no hacerlo una por una se realiza un programa con matlab haciendo uso de la Distancia de Mahalanobis, dentro del archivo .mat se encuentra la explicación del código utilizado que al correrlo nos da un vector con la coincidencia.
Para desencriptar los datos del año 2017,2018 y 2019 se hace una comparación como anteriormente se mencionó obteniendo:
Estas son las posiciones en el Excel de los datos encriptados para el año 2017, estos números corresponden a las filas de los datos no encriptados peo que corresponden en orden a esos datos encriptados y se elige solo lo que nos piden hallar: 16    17    18    19    20    21    22    23    24    25    26    27    28    29    30    31    32    33    34    35    36    38    53    61   123   124   125   231   152   469   168   213   214   215   306   398   399   400

Para 2018: 12    13    14    15    16    17    18    19    20    99    22    23    24    25    26    27    28   29    30    31    32    33    34    36    37    67   131   132   295   199   158   238   175   223    224   458   401   402

Para 2019:   11    12    13    14    15    16    17    18    19    20    21    22    23    24    25    26    27   28    29    30    31    32    33    34    35    36    37    61   117   118   119   139   151   165    169   216   217   248   249   250   390   391   392   421   422

1 Ejemplo:

![alt text](https://github.com/Kseg97/spe_oilngas_previo/blob/main/images/2.jpeg?raw=true "Gráfica Producción vs. meses de blindtest 2017")

![alt text](https://github.com/Kseg97/spe_oilngas_previo/blob/main/images/1.jpeg?raw=true "Gráfica Producción vs. meses de 2017 datos reales")

2 Ejemplo: Revisar archivo blindtest desencriptado 2017 .exe


