/*arreglo info personal, donde voy a tener 3 posiciones*/
/*primera, nombre, segunda nacionalidad, y la 3era una descripcion personal*/

/*document.getElementById("nombre"); //aca me quedo con el nodo, me traigo toda la estructura completa del nodo. Si tiene estilo inline, el color, el valor texto, TODO.
/*document.getElementsByClassName(): se trae toda la clase*/

/*ARREGLO DE LAS URL DE LAS FOTOS, ARREGLO DE LAS ENTRADAS DE TEXTO MAS COMENTARIO*/
/*
var h1 = document.getElementById("nombre");
var nombre = h1.textContent; //aca me quedo con el valor que tiene el elemento, es decir, con el texto del h1, una X. 
var h2 = document.getElementById("edad");
var edad = h2.textContent; //aca me quedo con la edad introducida, por ej 28 en este caso ya que es la edad.


/*Ahora debo determinar si la edad es mayor a 18 anios, entonces hago funcion para validar edad*/
/*
function validarEdad(x){// X es un valor generico.
var edad = parseInt(x); //funcion PARSE, convierte el string en numero, es decir, la cadena en numeros, y esto devuelve o el numero, si pudo. Si puse una palabra me devuelve NaN, ya que no es un numero.
if(!isNaN(edad)){// si es NaN devuelve true, es decir que si son caracteres devuelve TRUE, si son numeros devuelve false. Negandolo con el ! me devuelve lo mas intuitivo que es true, no false.

}

if(edad >= 18){
	return true;
}else{
	return false;
}


datospersonales = ["Pedro", "Arellano", "Me gustan los panqueques"];
getElementsByTagName('')



div = document.createElement("div");
var perfil = document.getElementById("perfil");
perfil.append(div1);



document.onload();
*/
 
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
var oveja = ["Lala", "oveja.png"];
var conejo = ["Conejito", "cerdito.png"];
var pepa = ["Pepito", "cerdo.png"];
var cerdo = ["Cerdito", "cerdito.png"];
var elefante = ["Elefante", "elefante.png"];
var gato = ["Gatito", "gato.png"];
var tigre = ["Tigrecito", "elefante.png"];
var puma = ["pumita", "cerdito.png"];

var amigosDiv = document.getElementById("amigos");
var arrayNombres = ["Pepa", "Holandesa", "Me gusta el chocolate"];
var amigos = [oveja, conejo, pepa, cerdo, elefante, gato, tigre, puma];
var entradas = [];

console.log("Nombre del conejo: "+amigos[1][0]);// esto me permite acceder al arreglo, por FILA PRIMERO y luego por orden de columna, es como el excel. 

var i,j;

for(i=0;i<amigos.length;i++){
	console.log(amigos[i]);
for(j=0;j<amigos[i].length;j++){//todos los elementos dentro del arreglo tienen el mismo largo, si coloco 0, en vez de i.
	console.log(amigos[i][j]+",");//ESTE SEGUNDO FOR ME PERMITE RECORRER TODOS LOS ELEMENTOS DE LA FILA.
}
}


var imagen = document.createElement("img");





function cargarDatosPersonales(arrayNombres){

	var nombre = document.createElement ("h1");
	nombre.textContent = arrayNombres[0];

	var nacionalidad = document.createElement ("h2");
	nacionalidad.textContent = arrayNombres[1];

	var resumen = document.createElement ("p");
	resumen.textContent = arrayNombres[2];

	var dpDiv = document.getElementById("datosPerfil"); // aca recupere el div que ya habia creado en el html, porque si ya lo cree no es necesario volver a crearlo
	dpDiv.appendChild(nombre);
	dpDiv.appendChild(nacionalidad);
	dpDiv.appendChild(resumen);

}
cargarDatosPersonales(arrayNombres); 
//hay que llamar a la funcion para que se visualice.




function cargarListaImagenes(lista,padre){

var i;
for(i=0;i<lista.length;i++){
	var img = document.createElement("img");
	img.src = lista[i][1];
	img.style.border = "1px solid black";
	img.style.margin = "1px";
	img.style.background = "#C3C3C3";
	console.log(img);
	padre.appendChild(img);

}

}
cargarListaImagenes(amigos,amigosDiv);





/*
	var comentario1 = document.createElement ("p");
	comentario1.textContent = arrayMuro[1];
	var i;
	for(i=0;i<arrayMuro.length;i++){
	var img = document.createElement("img");
	img.src = arrayMuro[i][0];
	console.log(img);
	muroDiv.appendChild(img);

}
}
cargarMuro(arrayMuro, muroDiv);
*/

var muro = document.getElementById("muro"); //mi contenedor muro, lo traigo de mi html, y debe estar fuera de la funcion.

function cargarMuro(m){// es generico, puede ir cualquier letra aca, no necesariamente es un array.
var ul = document.createElement("ul"); //va fuera del for la UL, la variable.

	for(i=0; i < 3 ;i++){ //van a haber 3 listas entonces xq hay 3 veces el for.

		var li =document.createElement("li");
		li.style.border = "1px solid black";
		var img =document.createElement("img");
		img.src = "img/abuela.png";
		img.classList.add("thumb"); //esta es la clase de la imagen.

		li.appendChild(img);// primero voy de adentro hacia afuera, appendeo, primero la imagen, luego la li, luego la ul.
		var texto = document.createElement("p");
		texto.textContent ="Estoy feliz de vacaciones";
		li.appendChild(texto);//hay que tener el padre creado para poder apendear, del texto al li.
		ul.appendChild(li); // despues del li al padre,(ul), es como que los vas cerrando, para salir. PARA APPENDEAR SE HACE DE ADENTRO HACIA AFUERA.
	}
	m.appendChild(ul);

}

cargarMuro(muro);

//Si deseo reemplazar, debo primero borrar eso, y luego anadirlo. funcion remove, luego add



var formDiv = document.getElementById("formularios");


function cargarFormulario(form){

var form = document.getElementById("formularios");
var formulario = document.createElement("div");
formulario.classList.add("formStyle");
var x = document.createElement("input");
var escribir = document.createElement("textarea");

x.setAttribute("type", "placeholder");  //se puede hacer igualmente sin definir los atributos, mencionandolos solo como estn abajo.
x.type = "text";
x.placeholder = "Que estas pensando?";


var li = document.createElement("li");

var BotonDiv = document.createElement("div");
BotonDiv.classList.add("botonStyle");
var boton = document.createElement("input");
boton.type = "submit";
boton.value = "compartir";



document.getElementsByClassName("botonStyle")

form.appendChild(x);
li.appendChild(boton);
BotonDiv.appendChild(boton);
formDiv.appendChild(BotonDiv);
formDiv.appendChild(formulario);
}


cargarFormulario(formularios);


//BOTON

/*Otra forma de hacer el formulario, pero cargando en html <label> que paso hoy</label>, 

<label> que paso hoy</label>
<input type =button name="enviar" id="enviar">
<input type ="text" name="text" id="entrada">
entonces hago la funcion:



function publicar(){

var texto = document.getElementById("entrada");
var texto = entrada.value; //me traje el nodo ya, ahora me quedo con el texto.

entradas.push(texto); //si no tiene texto cargado la entrada, el array que hicimos, no va a pasar nada.
console.log(texto);
cargarMuro(muro);/*recorre las entradas y muestra por pantalla todo el contenido dentro del arreglo entradas, hay que ver que cuando coloco
un nuevo contenido desde la pantalla de chrome, es decir, cada vez que llamo a CargarMuro, se vuelve a hacer un recorrido de ese array Entradas,
al margen de que ese contenido sea nuevo. Si mi primer comentario es "hola", luego ingreso "hola2", me va a repetir "hola" dos veces, entonces
DEBO COLOCAR INNER HTML en muro
}

var btnEnviar = document.getElementById ("enviar");
btnEnviar.addEventListener(click,publicar);





en la parte de function(cargarMuro), debo cambiar el for: 

se veria asi:
function(cargarMuro){
	if(entradas.length>0){
for(var i = 0; i<entradas.length; i++){
	y sigue el contenido que ya habia colocado en la funcion. 









var HeaderDiv = document.getElementById("encabezado");

function cargarHeader(h){

var head = document.createElement("div");
head.classList.add("headerTop");
var titulo = document.createElement ("h1");
	titulo.textContent = "Mi Perfil";

HeaderDiv.appendChild(head);
head.appendChild(titulo);
}

cargarHeader(HeaderDiv);*/