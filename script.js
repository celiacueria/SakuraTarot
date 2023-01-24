fetch(' https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Solicitud fallida', err))