from flask import Flask, jsonify, request
import pandas as pd
import csv

app = Flask(__name__)

# Ruta para manejar la petición GET
@app.route('/calculate-sum', methods=['GET'])
def calculate_sum():
    # Obtener los nombres de las cartas seleccionadas del parámetro 'cards'
    selected_cards = request.args.get('cards').split(',')

    # Leer el archivo CSV y filtrar las filas correspondientes a las cartas seleccionadas
    df = pd.read_csv('data.csv', sep=';')
    df_selected = df[df['nombre'].isin(selected_cards)]

    # Calcular la suma de los valores de la columna 'flordebachparatratamiento'
    sum_value = df_selected['flordebachparatratamiento'].sum()

    # Crear un diccionario con el resultado de la suma
    result = {'sum': sum_value}

    # Devolver la respuesta en formato JSON
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
