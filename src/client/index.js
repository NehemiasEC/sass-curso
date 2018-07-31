
import "./scss/style.css";
import ticket from './img/ticket.jpg'
console.log('hola mundo');


let img = document.createElement('img');

img.setAttribute('src',ticket)
img.setAttribute('width',50)
img.setAttribute('height',50)

document.body.append(img)
