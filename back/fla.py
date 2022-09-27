from operator import methodcaller
from flask import Flask, request, after_this_request
import numpy as np
import trimesh

app = Flask(__name__)


@app.route('/volume', methods=['POST'])
def test():
    @after_this_request
    def add_header(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response

    file = request.files['file']
    mesh = trimesh.load_mesh(file.stream)
    volume = mesh.volume
    return "Coucou"



if __name__ == "__main__":
    app.run()