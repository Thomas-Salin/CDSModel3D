
function volume(){

    fetch('http://localhost:3000/3Dmodels/Bracket.stl')
        .then((response) => response.blob())
        .then((data) => {

            FormData = new FormData();
            FormData.append('file', data, "Bracket.stl")

            fetch('http://127.0.0.1:5000/volume',{
                method: "POST",
                body: FormData
            })

            .then(response => response.json())
            .then((data) => {
                document.getElementById("volume").innerHTML += `<strong>${data} mm3</strong>`
            })
    })

}
