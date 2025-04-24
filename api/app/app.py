import logging
import os

from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    app.url_map.strict_slashes = False

    register_blueprints(app)

    return app


def register_blueprints(app):
    from app.mod_api.endpoints import api_blueprint

    app.register_blueprint(api_blueprint, url_prefix='/api')
    
