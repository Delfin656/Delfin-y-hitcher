from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Chef(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    username = db.Column(db.String(15), unique=True, nullable=False)
    profile_name = db.Column(db.String(50), unique=False, nullable=False)

    def __init__(self, email, password, username, profile_name):
        self.email = email
        self.password = password
        self.username = username
        self.profile_name = profile_name

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "username": self.username,
            "profile": self.profile_name,
        }

class Recipe(db.Model): #Query

    id = db.Column(db.Integer, primary_key=True)

    content = db.Column(db.String(280), nullable=False)
    date = db.Column(db.DateTime, nullable=False)

    #foreing key siempre del lado N
    author_id = db.Column( db.Integer, db.ForeignKey('chef.id'))
    author = db.relationship("Chef", backref="recipes")

    def __init__(self, content, author):
        self.content = content
        self.date = datetime.datetime.today()
        self.author = author

    def __repr__(self):
        return '<Recipe => %r>' % self.id
    
    def serialize(self):
        return {
            "content": self.content,
            #"date": arrow.get(self.date).humanize(),
            "author": self.author.serialize() if self.author != None else 'No author'
        }