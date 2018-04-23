//Publicar entradas y que se limpie con cada entrada 

function publicar (){
	var li = document.createElement('li');
	var texto = document.getElementById('tarea').value;
	li.textContent = texto;
	var ul = document.getElementById("lista");
	ul.appendChild(li);
	document.getElementById('tarea').value = ""; //ACA VOLVI A LLAMAR POR MEDIO DE document.getElementById('tarea'), en vez del nombre de la var TEXTO, coloco el document.getElementById('tarea'), porque en este caso en particular puede pasar que no borre los datos, y pierda la var texto =document.getElementById('tarea') en el camino.
    }

var btn = document.getElementById('boton');
btn.addEventListener("click",publicar)



//Limpiar input para seguir publicando

function limpiar (){ //Esta funcion es para limpiar todo el formulario, despues de enviarlo.

	var inputs = document.getElementById('input');
	var inputsArray = Array.from(inputs);
	inputs.Array.forEach(function(elem){
	elem.value =" ";
		
	})
 
}

var btnLimpiar= document.getElementById('botonLimpiar');
btnLimpiar.addEventListener("click",limpiar)

/*Boton para eliminar cada una de las tareas*/

var btn = document.getElementById("btn1");

btn.data("id"); // esto es para quedarme con la clase del ID
btn.getAttribute("id") // con GET ATRIBUTE ME QUEDO CON EL ATRIBUTO EN SI.
x = btn.getAttribute("data-id"); //aca me quece con el atributo DATA ID, y lo guarde en X.
li =document.getElementById(x);
lista.remove(li);


/*
jquery para crear tareas//
var lista = [];

$('btnNuevo').on('click',function(event){
	var t = $('#nueva').val();
	lista.push(t);
	var li = '<li id"+lista.lenght+">'+t+ '<button class="borrar" data-id="+lista.lenght">X</button><li>';
	$('#to-do').append(li);
})//a partir de aca es para borrar los comentarios.
	$('.borrar').on('click',function(e){
		$(this).parent().remove();//donde estas parado, busca al padre y removelo.
	});
	
<p id ="texto" class="texto" data-texto="texto">

//agrrego un lapiz para editar
data accion="edit", data accion="borrar"
<button data-id ="lista.lenght" data-accion="edit">ICONO BOTON LAPIZ</button><li>
$(document).on('click','ul button',function(e){// de esta manera es como que refresco el contenido del documento.
	var accion = $(this).data('accion');
	if(action == borrar){//ahora debo corroborar si el boton es de borrar o es de editar, entonces pregunto con el if.
		$(this).parent().remove();
	}}else{
		var id = $(this).data("id");
	}
	}

}

*/
