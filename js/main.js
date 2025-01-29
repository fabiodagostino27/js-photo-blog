const photoContainer = document.getElementById("photo-container");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        
    })
    .catch(error => {
        console.error(error)
    })
