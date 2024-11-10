from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/recommend', methods=['POST'])
def recommend():
    # Placeholder for actual recommendation logic
    data = request.get_json()
    user_id = data.get('userId')
    return jsonify({'recommendations': [f'Movie {i}' for i in range(1, 6)]})

if __name__ == '__main__':
    app.run(debug=True)
