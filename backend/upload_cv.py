# Import necessary libraries and modules
from flask import Flask, request, jsonify

# Create Flask app
app = Flask(__name__)

# Define route for CV upload
@app.route('/api/upload-cv', methods=['POST'])
def upload_cv():
    # Validate the uploaded CV document
    if 'cv' not in request.files:
        return jsonify({'error': 'CV document not provided'}), 400

    cv = request.files['cv']
    if cv.filename == '':
        return jsonify({'error': 'CV document not provided'}), 400

    # Save the CV document to a secure location
    cv.save('/path/to/secure/location/' + cv.filename)

    # Return appropriate response based on the validation result
    return jsonify({'message': 'CV document uploaded successfully'}), 200

# Run the Flask app
if __name__ == '__main__':
    app.run()