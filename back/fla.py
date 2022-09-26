from flask import Flask, request
import trimesh

app = Flask(__name__)

@app.route('/volumeModele', methods=['POST'])
def index():
    file = request.files['file']
    mesh = trimesh.load_mesh(file)
    volume = mesh.volume
    return str(volume)

if __name__ == "__main__":
    app.run()