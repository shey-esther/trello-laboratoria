// //creando un imput
// var section = document.getElementById('section');
// var input = document.createElement('input');
// input.setAttribute('id','botonIni');
// input.setAttribute('class','anadir');
// input.setAttribute('placeholder','Añadir lista');
// section.appendChild(input);


// //obtenemos el 'id' contenido en el 'html'
// var botoUno = document.getElementById('botonIni');
// botoUno.addEventListener('click', agregar);


// function agregar(){
// 	//creando un div con su contenido de un imput y un boton
// 	var caja = document.getElementById('text');
// 	var section = document.getElementById('section');
// 	var div = document.createElement('div');
// 	div.setAttribute('id','div1');
// 	var boton = document.createElement('button');
// 	boton.setAttribute('id','anadir');
// 	var x = document.createElement('span');
	
// 	div.appendChild(section);
// 	div.appendChild(boton);
// 	boton.innerHTML='Guardar';
// 	div.appendChild(x);
// 	x.innerHTML='X';
// 	caja.appendChild(div);

// 	boton.addEventListener('click',guardar);
	
// }
	
// function guardar(){
// 	var div1 = document.getElementById("div1")
// 	var caja = document.getElementById('text');
//  	var div2 = document.createElement('div');
//  	div2.setAttribute('class','tablero');
	
//  	var parafo = document.createElement('p');
//  	var add = document.getElementById('texto').value;
//  	var text=document.createTextNode(add);
//  	var link = document.createElement('input');
// 	link.setAttribute('placeholder','Añadir una tarjeta...');
//  	parafo.appendChild(text);
//  	div2.appendChild(parafo);
//  	div2.appendChild(link);
//  	caja.appendChild(div2);
//  	caja.removeChild(div1);
//  	agregar();
//  	link.addEventListener('click', crearTarea);

// }
// function crearTarea(){
// 	var div = document.getElementById('div');
// 	var caja = document.getElementById('text');
//  	var div3 = document.createElement('div');
//  	div3.setAttribute('class','tablaf');

//  	var parafo = document.createElement('p');
//  	var input1 = document.createElement('input');
//  	var boton = document.createElement('button');
//  	boton.innerHTML = 'Añadir';
//  	var x = document.createElement('span');
//  	x.innerHTML = 'X';

//  	div3.appendChild(parafo);
//  	div3.appendChild(input1);
//  	div3.appendChild(boton);
//  	div3.appendChild(x);
//  	caja.appendChild(div3);
//  	//caja.removeChild(div);
// }


//.........................................
//creando un imput
var section = document.getElementById('section');
var input = document.createElement('input');
input.setAttribute('id','botonIni');
input.setAttribute('class','anadir');
input.setAttribute('placeholder','Añadir lista');
section.appendChild(input);


//obtenemos el 'id' contenido en el 'html'
var botoUno = document.getElementById('botonIni');
botoUno.addEventListener('click', agregar);


function agregar(){
	//al ingresar a esta funcion el imput inicial desaparece
	var botoUno = document.getElementById('botonIni');
	botoUno.style.display= 'none';
	//creando un div con su contenido de un imput y un boton
	var caja = document.getElementById('text');
	var div = document.createElement('div');
	div.setAttribute('id','div1');

	var cjaImput = document.createElement('input');
	cjaImput.setAttribute('id','texto')
	cjaImput.setAttribute('placeholder','Añadir una Lista');
	var boton = document.createElement('button');
	boton.setAttribute('id','anadir');
	var x = document.createElement('span');
	div.appendChild(cjaImput);
	div.appendChild(boton);
	boton.innerHTML='Guardar';
	div.appendChild(x);
	x.innerHTML='X';
	caja.appendChild(div);
	boton.addEventListener('click',guardar);
	
}
//al ingresar un texto en el imput automaticamente lo guarda
function guardar(){
	var div1 = document.getElementById("div1")
	var caja = document.getElementById('text');
 	var div2 = document.createElement('div');
 	div2.setAttribute('class','tablero');
 	div2.setAttribute("id","tablero");
	
 	var parafo = document.createElement('p');
 	var add = document.getElementById('texto').value;
 	var text=document.createTextNode(add);
 	var link = document.createElement('input');
	link.setAttribute('placeholder','Añadir una tarjeta...');
 	parafo.appendChild(text);
 	div2.appendChild(parafo);
 	div2.appendChild(link);
 	caja.appendChild(div2);
 	caja.removeChild(div1);
 	agregar();
 	link.addEventListener('click', crearTarea);

}
// al hacer click en el link se crea el boton y una 'x'
function crearTarea(){
	var div1=document.getElementById('tablero');
	// var div = document.getElementById('div');
	// var caja = document.getElementById('text');
 	// var div3 = document.createElement('div');
 	// div3.setAttribute('class','tablaf');
 	// var parafo = document.createElement('p');
 	// var input1 = document.createElement('input');
 	var boton = document.createElement('button');
 	boton.innerHTML = 'Añadir';
 	var x = document.createElement('span');
 	x.innerHTML = 'X';

 	//caja.appendChild(parafo);
 	// div3.appendChild(input1);
 	div1.appendChild(boton);
 	div1.appendChild(x);
 	//caja.appendChild(div3);
 	//caja.removeChild(div);
}


























