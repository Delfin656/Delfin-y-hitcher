"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Chef, Recipe
from api.utils import generate_sitemap, APIException
import hashlib

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/chef_register', methods=['GET','POST'])
def handle_chef():
    
    body = request.json

    if 'email' not in body:
        return 'El usuario no tiene email', 400
    if 'password' not in body:
        return 'El usuario no tiene password', 400
    if 'username' not in body:
        return 'El usuario no tiene username', 400
    if 'profile_name' not in body:
        return 'El usuario no tiene profile_name', 400
    
    profile = User.query.filter_by(email=body['email']).one_or_none()
    if profile == None:
        new_chef = Chef(body['email'], hashlib.md5( body['password'].encode() ).hexdigest(), body['username'], body['profile_name'])
        try:
            db.session.add(new_chef)
            db.session.commit()
            return "Se ha creado el chef con exito!✅"
        except Exception as err:
            return 'Ha ocurrido un error!💥', 500
    else:
        return "Ya existe un chef con ese email!", 400
    return "Method not implemented yet!",500

@api.route('/recipes', methods=['POST'])
def post_recipe():
    body = request.json
    if "content" not in body:
        return "Ese receta no tiene contenido! ⛔", 400
    else:
        author = Chef.query.filter_by(username=body["username"]).one_or_none()
        if author == None:
            return "Ese usuario no existe.", 404
        else:
            new_recipe = Recipe(body["content"], author)
            db.session.add(new_recipe) #Memoria RAM
            try:
                db.session.commit() #Guarda en datos solidos!
                return jsonify(new_recipe.serialize()), 201
            except Exception as err:
                return jsonify({ "error": "Ocurrio un error en el servidor 🐬"}), 500
        #return jsonify(new_tweet.serialize()), 201
    return "Error algo ah ocurrido! 🐋", 404

@api.route('/recipes', methods=['GET'])
def get_recipes():
    recetas = Recipe.query.all()
    return jsonify(
            list(reversed([ receta.serialize() for receta in recetas ]))
        ), 200