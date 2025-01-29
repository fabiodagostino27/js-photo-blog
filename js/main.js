const photoContainer = document.getElementById("photo-container");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {            
            photoContainer.innerHTML += 
            `
                <div class="col-8 col-md-5 col-xl-3 bg-light p-3 position-relative">
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
    })
    .catch(error => {
        console.error(error)
    })
