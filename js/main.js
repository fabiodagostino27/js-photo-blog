const photoContainer = document.getElementById("photo-container");
const modal = document.getElementById("modal");
const modalImg = document.querySelector("#modal img");
const modalClose = document.querySelector("#modal button");

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {            
            photoContainer.innerHTML += 
            `
                <div id=${element.id} class="polaroid col-8 col-md-5 col-xl-3 bg-light p-3 position-relative card-shadow" data-title=${element.title}>
                    <img class="pin position-absolute start-50 translate-middle-x" src="./img/pin.svg">
                    <figure class="w-100">
                        <img class="w-100" src=${element.url} alt=${element.title}>
                    </figure>

                    <div>
                        <span class="font-dates">${element.date}</span>
                        <h4 class="font-titles text-uppercase fw-bold m-0">${element.title}</h4>
                    </div>
                </div>
            `
        });
        const polaroids = document.querySelectorAll(".polaroid");

        polaroids.forEach(element => {
            element.addEventListener("click", function() {
                modal.classList.replace("d-none", "d-flex");
                modalImg.setAttribute("src", `https://marcolanci.it/boolean/assets/pictures/${element.id}.png`)
                modalImg.setAttribute("alt", `${element.getAttribute("data-title")}`)
            })
        })
    })
    .catch(error => {
        console.error(error)
    })

modalClose.addEventListener("click", function() {
    modal.classList.replace("d-flex", "d-none")
})