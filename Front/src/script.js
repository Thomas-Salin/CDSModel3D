
function volumeModel(){

    fetch('http://localhost:3000/3Dmodels/Bracket.stl',)
        .then((response) => response.blob())
        .then((data) => {

            FormData = new FormData();
            FormData.append('modele3D', data, "Bracket")
            console.log(FormData);

            fetch("http://127.0.0.1:5000/volumeModel",{
                method: "POST",
                body: FormData
            })
            .then(response =>{
                 if(response.ok){
                console.log("ok");
             }
            else{
                console.log(error);
            }


        })
})

}


