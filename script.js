const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Programación con Javascript <br> en Platzi"
h1.innerHTML = "Programación con Javascript <br> en Platzi"
//console.log(h1.getAttribute("pantalla"));
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo"); //Para este caso sustituye la clase a rojo en el archivo HTML

h1.classList.add("rojo"); //Adiciona una clase mas a la que ya existe en el archivo HTML
h1.classList.remove("verde"); //Remueve la clase señalada en el archivo HTML.
h1.classList.toggle("verde"); //Cada que se ejecuta alterna entre adicionar y remover la clase señalada.
h1.classList.contains("verde"); //Devuelve true o false si la clase está o no presente.

input.value = "456" //Escribe la información dentro de la entrada
console.log(document.createElement("img")); //Imprime el elemento HTML

//Agrega e imprime la ruta de una imagen
const img = document.createElement("img");
img.setAttribute('src', 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg');
console.log(img);

//pid.innerHTML = ""; //Borrar el contenido de un párrafo (Párrafo con ID pid)
pid.append(img); //Para insertar la imagen (En párrafo con ID pid)