from flask import Flask, request, after_this_request
from werkzeug.utils import secure_filename
import os
import trimesh

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = ''


@app.route('/volume', methods=['POST'])
def volume():
    @after_this_request
    def add_header(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response

    file = request.files.get('file')
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    mesh = trimesh.load_mesh(str(filename))
    volume = mesh.volume
    os.remove(filename)
    return str(volume)



if __name__ == "__main__":
    app.run() 