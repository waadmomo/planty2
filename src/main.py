from flask import Flask, render_template

app = Flask(__name__, template_folder='src/screens/templates')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/details/peppers')
def details_peppers():
    return render_template('peppers.html')

if __name__ == "__main__":
    app.run(debug=True)