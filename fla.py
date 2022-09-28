from flask import Flask, request, after_this_request
from werkzeug.utils import secure_filename
import os
import trimesh

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'Back'


@app.route('/volume', methods=['POST'])
def volume():
    @after_this_request #Envoi reponse header pour ne pas avoir de problèmre CORS
    def add_header(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        return response

    file = request.files.get('file') #Recuperation de notre modele dans notre requete front 
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename)) #Enrengistrement de notre fichier à charger
    mesh = trimesh.load_mesh("Back/" + str(filename)) #Chargement du mesh fichier par trimesh 
    volume = mesh.volume #Calcul du volume 
    return str(volume) 



if __name__ == "__main__":
    app.run() 