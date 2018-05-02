//Ejercicio 1: Modelar con pseudocódigo o js, la lógica de un sistema de semáforos en una esquina que consta de 2 semáforos para vehículos y dos semáforos peatonales.

//Ejercicio 2: Incorporar al ejercicio anterior un semáforo para ciegos, esto implica la posibilidad de tener modificar el estado de los semáforos en un momento dado.


var i = 1; //aca seria el tiempo para cruzar idoneamente
var estadoSemaforoPeatones = "amarillo";
var estadoSemaforoAutos = "verde";
var semaforoCiegos = true;

//para peatones
for(i = 0; i <=50; i++){
var tiempoSemaforo = 0;
if(estadoSemaforoAutos == "rojo" && estadoSemaforoPeatones == "verde"){
    console.log("el peaton puede cruzar tranquilo la calle");
    tiempoSemaforo++;
}if(estadoSemaforoPeatones == "amarillo" && estadoSemaforoAutos =="amarillo"){
    console.log("el peaton no debe cruzar la calle");
    tiempoSemaforo++;
}if(estadoSemaforoAutos == "verde" && estadoSemaforoPeatones == "rojo"){
    console.log("el peaton no deberia cruzar la calle, a menos que no pasen autos");
    tiempoSemaforo++;
  //para ciegos  
}if(semaforoCiegos  == true){
  estadoSemaforoAutos.replace("verde","rojo");
  console.log("Pueden cruzar los peatones");
  break;
}

}

//para vehiculos

for(i = 0; i <=50; i++){
  
  if(estadoSemaforoAutos == "rojo" && estadoSemaforoPeatones == "verde"){
      console.log("el auto no puede avanzar");
  }if(estadoSemaforoPeatones == "amarillo" && estadoSemaforoAutos =="amarillo"){
      console.log("el auto no deberia avanzar");
  }if(estadoSemaforoAutos == "verde" && estadoSemaforoPeatones == "rojo"){
      console.log("el auto puede avanzar");
      //para ciegos
  }if(semaforoCiegos == true){
    estadoSemaforoAutos =="rojo";
    console.log("No pueden avanzar los autos, ya que apretaron semaforo ciegos");
    break;
  }
  
  }

/*Ejercicio 3 y 4*/

var preguntas = [ "¿En qué deporte se usa tiza?",
                  "¿Cuántas manos tiene un caballo?",
                  "¿Cómo se llaman las crías de la mula?",
                  "¿Qué isla del Caribe tiene nombre de flor?",
                  "¿Cuál es el fruto del roble?"];
var respuestas = ["Rayuela", "Ninguna", "La mula es infertil", "Margarita", "La bellota"];
var rondaInicial = 3;
var avanzar = true;
var rtas;
var proximaRonda = true;


if (avanzar == true && rondaInicial <= 3) {
	for (i = 0; i < preguntas.length; i++) {
	
	if (rtasCorrectas < 3) {
		avanzar == false;
    console.log("No avanzas de ronda y por ende, Perdiste!");
  
	}
	else {
    rondaInicial++;
  	}
	if (rondaInicial > 3) {
		console.log("Ganaste!");
	}
}
}




//aca empieza ejercicio 4

//para mensaje de ganaste con distintos puntajes

var puntos = 150;
var rtasCorrectas = 15;


if (rondaInicial > 3) {
    console.log("Ganaste! Puntos totales: " + puntos);
    if (puntos <= 100) {
        console.log("Bien!");
    }
    else if (puntos > 100 && puntos <= 125) {
        console.log("Muy bien!");
    }
    else if (puntos > 125 && puntos <= 150) {
        console.log("Excelente!");
    }
}
//valor de las rtas segun que ronda es
if (proximaRonda == true && rondaInicial <= 3 && rtasCorrectas >=5) {
	for (i = 0; i < preguntas.length; i++) {
				switch (rondaInicial) {
				case 1:
                puntos += 5 //aca vale 5 cada rta en ronda 1
                break;
                console.log("respondiste 5 bien, tenes 25 puntos");
                case 2:
                puntos += 10 //aca vale 10 cada rta en ronda 2
                break;
                console.log("respondiste 5 bien, tenes 75 puntos");
                case 3:
                puntos += 15 //aca vale 15 cada rta en ronda 3
                break;
                console.log("respondiste 5 bien, tenes 150 puntos")
				
			}

		}
  }

  
