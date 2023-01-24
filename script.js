let url = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/'

fetch (url) 
    .then((response) => response.json())
    .then((data) => {
        for (i = 0 ; i < data.length; i++) {
            document.querySelector('.container').innerHTML += `<div class="cards-reverse"><img src="${data[i].cardsReverse.sakuraReverse}"></img></div>`
        };
        
    })

   