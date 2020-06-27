from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    comments_list = [
        "Prosty string 1",
        "Prosty string 2",
        "jeszcze cos innego"
    ]
    return render_template('index.html', comments_list=comments_list)

@app.route('/oferta')
def oferta():
    return render_template('oferta.html')
