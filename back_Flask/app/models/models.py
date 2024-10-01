from app import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(120), nullable=False)

    def __init__(self, email, password, name):
        self.email = email
        self.set_password(password)
        self.name = name

    def set_password(self, password):
        """Criptografa a senha e armazena o hash."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Verifica se a senha fornecida está correta comparando com o hash."""
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User %r>' % self.name
    

class Client(db.Model):
    __tablename__ = 'clients'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    address = db.Column(db.String(200), nullable=False)
    responsible = db.Column(db.String(120), nullable=False)
    device_quantity = db.Column(db.Integer, nullable=True)
    device_quantity_active = db.Column(db.Integer, nullable=True)

    def __init__(self, name, address, responsible, device_quantity, device_quantity_active):
        self.name = name
        self.address = address
        self.responsible = responsible
        self.device_quantity = device_quantity
        self.device_quantity_active = device_quantity_active

    def __repr__(self):
        return '<Client %r>' % self.name
    