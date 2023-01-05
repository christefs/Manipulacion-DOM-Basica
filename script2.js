const h1 = document.querySelector('h1');

const form = document.querySelector('#form'); //Se incluye cuando las entradas y botones están dentro de un formulario

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const pResult2 = document.querySelector("#result2");

//Se incluye al no existir la función onclick dentro de la etiqueta button dentro del archivo html
//btn.addEventListener('click', btnOnClick); //Entradas sin formulario

/*
function btnOnClick(){
    //Imprimir en consola concatenación
    console.log(input1.value + input2.value); 
    //Imprimir en consola una suma
    console.log(Number(input1.value) + Number(input2.value));

    const sumaInputs = input1.value + input2.value;
    //Imprimir en html una concatenación
    pResult.innerText = "Resultado concatenado: " + sumaInputs;

    //Imprimir en html una suma
    pResult2.innerText = "Resultado aritmético: " + (Number(input1.value) + Number(input2.value));
}
*/

/*
form.addEventListener('submit', sumarInputValues); //Entradas con formulario

function sumarInputValues(event){

    event.preventDefault();
    //Imprimir en consola concatenación
    console.log(input1.value + input2.value); 
    //Imprimir en consola una suma
    console.log(Number(input1.value) + Number(input2.value));

    const sumaInputs = input1.value + input2.value;
    //Imprimir en html una concatenación
    pResult.innerText = "Resultado concatenado: " + sumaInputs;

    //Imprimir en html una suma
    pResult2.innerText = "Resultado aritmético: " + (Number(input1.value) + Number(input2.value));
}
*/

btn.addEventListener('click', sumarInputValues); //Entradas con formulario pero con etiqueta button tipo "button"


function sumarInputValues(event){
    //Imprimir en consola concatenación
    console.log(input1.value + input2.value); 
    //Imprimir en consola una suma
    console.log(Number(input1.value) + Number(input2.value));

    const sumaInputs = input1.value + input2.value;
    //Imprimir en html una concatenación
    pResult.innerText = "Resultado concatenado: " + sumaInputs;

    //Imprimir en html una suma
    pResult2.innerText = "Resultado aritmético: " + (Number(input1.value) + Number(input2.value));
}
