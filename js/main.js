const photoContainer = document.getElementById("photo-container");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {            
            photoContainer.innerHTML += 
            `
                <div id=${element.id} class="polaroid col-8 col-md-5 col-xl-3 bg-light p-3 position-relative card-shadow">
                    <img class="pin position-absolute start-50 translate-middle-x" src="./img/pin.svg">
                    <figure class="w-100">
                        <img class="w-100" src=${element.url} alt=${element.title}>
                    </figure>

                    <div>
                        <h4 class="font-titles m-0">${element.title}</h4>
                        <span class="font-dates">${element.date}</span>
                    </div>
                </div>
            `
        });
        const polaroids = document.querySelectorAll(".polaroid");

        polaroids.forEach(element => {
            element.addEventListener("click", function() {
                console.log("Ciao")
            })
        })
    })
    .catch(error => {
        console.error(error)
    })

  