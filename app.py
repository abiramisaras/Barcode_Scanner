from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['POST'])
def process_data():
    data = request.json
    processed_data = {'result': data['value'] * 2}  # Example processing, multiply by 2
    return jsonify(processed_data)

if __name__ == '__main__':
    app.run(debug=True)
