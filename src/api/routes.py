"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Chef, Recipe
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import hashlib

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route("/registro", methods=["POST"])    
def registro():


    body = request.json

    if 'nombre' not in body:
        return 'El usuario no tiene nombre', 400
    if 'apellido' not in body:
        return 'El usuario no tiene apellido', 400
    if 'email' not in body:
        return 'El usuario no tiene email', 400
    if 'phone' not in body:
        return 'El usuario no tiene phone', 400
    if 'password' not in body:
        return 'El usuario no tiene password', 400
    
    profile = User.query.filter_by(email=body['email']).one_or_none()
    if profile == None:
        new_user = User(
            email=body["email"],
            password=body["password"],
            nombre=body["nombre"],
            apellido=body["apellido"],
            phone=body["phone"]
        )
        try:
            db.session.add(new_user)
            db.session.commit()
            return "Se ha creado el usuario con exito!✅"
        except Exception as err:
            return 'Ha ocurrido un error!💥', 500
    else:
        return "Ya existe un usuario con ese email!", 400
    return "Method not implemented yet!", 500
        
    # if request.method == "GET" : 
    #     users = User.query.all()
    #     users_dictionaries = []

    #     for user in users : 
    #         users_dictionaries.append(user.serialize())
        
    #     return jsonify(users_dictionaries), 200

    # new_user_data = request.json
    # try: 
    #     if "nombre" not in new_user_data or new_user_data["nombre"] == "" :
    #         raise Exception("No existe nombre")
    #     if "apellido" not in new_user_data or new_user_data["apellido"] == "":
    #         raise Exception("No existe apellido")
    #     if "email" not in new_user_data or new_user_data["email"] == "" :
    #         raise Exception("No existe correo electronico")
    #     if "phone" not in new_user_data or new_user_data["phone"] == "" :
    #         raise Exception("No existe número de teléfono")
    #     if "password" not in new_user_data or new_user_data["password"] == "" :
    #         raise Exception("No existe contraseña")

    #     new_user = User.create(**new_user_data)
    #     return jsonify(new_user.serialize()), 200
    
    # except Exception as error:
    #     return jsonify(error.args[0]),error.args[1] if len(error.args) > 1 else 500


@api.route("/login", methods=["GET","POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email == None or password == None:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)    

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