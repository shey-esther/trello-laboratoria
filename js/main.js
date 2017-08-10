var diva = document.getElementById('text');
var x = document.createElement('BUTTON');
x.id='demas';
x.innerHTML='ester';
var body = document.body;
document.getElementById("demo").addEventListener('click', addAgregar);

function addAgregar(){
    diva.appendChild(x);
    body.appendChild(diva);
}

document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World!";
});

// var contenido=document.getElementById('contenido');
// var lista = document.createElement('div');
// //	lista.setAttribute('onclick', 'iniciar(this)');
// 	lista.innerHTML= 'Añadir una lista...';

// function añadir() {
// 	var titulo = document.getElementById('guardar').value;
// 	var div = document.createElement('div');
// 	var input=document.createElement('input');
// 		input.innerHTML=titulo;
// 	div.appendChild(input);
// 	lista.replaceChild(div, lista.firstChild);
	
// }




























