function publicar (){
	var li = document.createElement('li');
	var texto = document.getElementById('tarea').value; //ACA ME TRAIGO EL INPUT CON ID TAREA Y CON EL VALUE QUE TENGA CADA INPUT 
	li.textContent = texto;
	var ul = document.getElementById("lista");
	ul.appendChild(li);
	document.getElementById('tarea').value = ""; //ACA VOLVI A LLAMAR POR MEDIO DE document.getElementById('tarea'), en vez del nombre de la var TEXTO, coloco el document.getElementById('tarea'), porque en este caso en particular puede pasar que no borre los datos, y pierda la var texto =document.getElementById('tarea') en el camino.
	
//Aca creo el boton para eliminar cada una de las entradas
	var btnEliminar = document.createElement("button"); 
	btnEliminar.setAttribute("id", "btnEliminar");
	btnEliminar.innerHTML = "<i class='far fa-times-circle'></i>";
	btnEliminar.addEventListener("click", eliminarEntrada);

//Aca creo el boton para editar cada una de las entradas

	var btnEditar = document.createElement("button");
	btnEditar.setAttribute("id","btnEditar");
	btnEditar.innerHTML = "<i class='fas fa-pencil-alt'></i>"
	btnEditar.addEventListener("click", editarEntrada);


//funcion para eliminar las entradas

function eliminarEntrada() {
	li.remove(); //remueve la entrada con el click del botoncito
	}
		li.appendChild(btnEliminar); // agrega el botón de eliminar a la tarea


//funcion para editar las entradas 

function editarEntrada (){ //cuando pongo editar como que toma todo el contenido(incluso botones)como editables, debo hacer click fuera del input para editarlo sin que borre y conserve los botones, no se si esta bien, porque borra los botones cuando edito....
	li.contentEditable = true;
	}
		li.appendChild(btnEditar);

}
var btn = document.getElementById('boton');
btn.addEventListener("click",publicar)
