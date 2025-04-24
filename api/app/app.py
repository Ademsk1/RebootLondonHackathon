import logging
import os

from flask import Flask



def create_app():
    app = Flask(__name__)

    app.url_map.strict_slashes = False

    register_blueprints(app)

    return app


def register_blueprints(app):
    from app.mod_api.endpoints import api_blueprint

    app.register_blueprint(api_blueprint, url_prefix='/api')
    
