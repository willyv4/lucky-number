from urllib import request
from flask import Flask, render_template, request, jsonify
import requests
import random

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route("/api/get-lucky-num", methods=["GET", "POST"])
def api_user():

    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]

    errors = []
    if name is None:
        errors.append({"name": ["NO NAME! Name is required."]})
    if email is None:
        errors.append({"email": ["NO EMAIL! Email is required."]})
    if year < 1900 or year > 2000:
        errors.append({"year":
                       ["INVALID YEAR! Year must be between 1900 and 2000, inclusive."]})
    if color not in ["blue", "green", "red", "orange"]:
        errors.append({"color":
                       ["INVALID COLOR! Color must be either blue, green, red, or orange."]})
    if errors:
        return jsonify({"errors": errors}), 400

    else:
        resp1, resp2 = call_number_api(year)
        return jsonify({"lucky_number_fact": resp1.decode('utf-8'),
                        "year_fact": resp2.decode('utf-8')})


def call_number_api(year):

    lucky_num = random.randint(1, 100)
    resp = requests.get(f"http://numbersapi.com/{lucky_num}/trivia")
    resp2 = requests.get(f"http://numbersapi.com/{year}/year?")

    return resp.content, resp2.content
