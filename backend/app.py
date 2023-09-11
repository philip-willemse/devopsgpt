# Import necessary libraries and modules
from flask import Flask

# Set up Flask application
app = Flask(__name__)

# Define routes and their corresponding functions
@app.route('/')
def index():
    return 'Hello, World!'

# Run the Flask application
if __name__ == '__main__':
    app.run()
