const cardsPackage = function () {
    fetch("https://striveschool-api.herokuapp.com/books")
    .then(function (response) {
        if (response.ok) {
            return response.json();
      } else {
          console.log(`c'e stato un errore nella chiamata`);
        }
    })
    .then(function (response) {
        console.log(response);
        let cardSlot = document.getElementById('insertCard')
        response.forEach((e) => {
            cardSlot.innerHTML +=`<div class="card bg-warning m-3 mh-100 remove" style="width: 18rem;">
            <img src="${e.img}" class="card-img-top mt-2 " style="height: 400px;" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title">${e.title}</h5>
              <p class="card-text">${e.price}</p>
              <div><button class="btn btn-primary" onclick="btnSkip(event)">Skip</button></div>
            </div>
          </div>`;
        });
    })
    .catch(function (error) {
        console.log(`c'e stato un errore : ${error}`);
    });
};
cardsPackage();

function btnSkip(e){
        e.target.parentElement.parentElement.parentElement.remove()
    }
    
