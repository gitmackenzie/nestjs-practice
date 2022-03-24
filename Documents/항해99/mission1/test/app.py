from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.hekwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
db = client.dbsparta

