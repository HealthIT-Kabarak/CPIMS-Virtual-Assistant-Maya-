from flask import Flask, request, jsonify
from maya.bot import getBotResponse
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['POST'])
def maya_api():
    # Get the input text from the request
    input_text = request.json.get('text')
    
    # Process the input text with your chatbot
    response_text = getBotResponse(input_text)
    
    # Create a JSON response
    response = {'response': response_text}
    query = {'input': input_text}
    # Return the JSON response to client
    return jsonify(query, response)

if __name__ == '__main__':
    app.run()
