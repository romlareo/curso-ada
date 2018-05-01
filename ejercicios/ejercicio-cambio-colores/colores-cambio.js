$(".box").on("click", function(e){
	e.preventDefault();

	if ($(this).hasClass("box-top")) {
		$(this).toggleClass("grey");
	}
	else if ($(this).hasClass("box-center")) {
		$(".box-center").not(this).toggleClass("deep-orange");
	}
	else if ($(this).is("#bottom-center")) {
		$(".box-bottom").not(this).slideToggle(1000, 0,5);
	}
});


//Otra forma de hacerlo es con switch
/*

$(this) = obtengo el hijo

$(this).parent() obtengo los PaymentAddress

$(this).parents() obtengo los ancestros

$(this).sibilings() obtengo hermanos

$(this).next() = obtengo el proximo elemento 

$(this).prev() = elemento anterior

$(this).children = obtengo los hijos

$(this).parents().first() = obtengo el primero de los padres

$(this).children().first() = obtengo el primero de los hijos

------Filtros--------
//Aplica cambios a todos los elementos que no cumplan con el parametro
.not() = aplica cambios a todos los elementos no cumplan con el parametro
$( "li" ).not(document.getElementById("notli") ).css( "background-color","red");
.filter("div")
$(this).css("color","pink")

$(this).addClass("nombreClase");
$(this).removeClass("nombreclass");
$(this).toogleClass("clase1 clase2");
*/
