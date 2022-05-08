const aplicacion = document.querySelector('.container')

const url = 'https://fakestoreapi.com/products'

fetch(url)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))