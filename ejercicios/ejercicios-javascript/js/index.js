
/*Ejercicios de lógica condicional – Parte 1*/

/*
Ejercicio 1 

1- Dada una variable x, determinar si es par o impar.*/

var x = "Impar";

if (x == "par") {
	console.log("X es par");
}else{
	(x == "impar") 
	console.log("X es impar");
}

/*2- Dada una variable y que puede contener un número de 1 a 7, determinar a que día de la semana corresponde.
 Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).*/

 var y = 4;
 var dia = "jueves"

switch (y){
	case 1: dia = "lunes";
	break;
	case 2: dia = "martes";
	break;
	case 3: dia = "miercoles";
	break;
	case 4: dia = "jueves";
	break;
	case 5: dia = "viernes";
	break;
	case 6: dia = "sabado";
	break;
	case 7: dia = "domingo";
	break;
	case 8: dia = "no valido";
	break;
	case 0: dia = "no valido";
	break;
}
console.log("El dia es "+dia+" y se corresponde con el numero "+y);


/*3- Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.*/

var mes = "febrero";



switch (mes){
	case "enero" : dias = 30;
	break;
	case "febrero" : dias = 28;
	break;
	case "marzo" : dias = 31;
	break;
	case "abril" : dias = 31;
	break;
	case "mayo" : dias = 30;
	break;
	case "junio" : dias = 30;
	break;
	case "julio" : dias = 31;
	break;
	case "agosto" : dias = 31;
	break;
	case "septiembre" : dias = 31;
	break;
	case "octubre" : dias = 31;
	break;
	case "noviembre" : dias = 30;
	break;
	case "diciembre" : dias = 31;
	break;
}
console.log("El mes es "+mes+" y tiene "+dias+" dias");

/*4- Dados tres números determinar si es positivo o negativo.*/

var numero = -5;

if (numero >= 0) {
	console.log("El numero es "+numero+" y es positivo");
}else{
	(numero < 0);
	console.log("El numero es "+numero+" y es negativo");
}

/*5- Dada una variable que puede ser una letra, determinar si es una vocal.*/

var letra = "z";

if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
		console.log("La letra "+letra+" es una vocal");
}else{
	(letra != "a" || letra != "e" || letra != "i" || letra != "o" || letra != "u");
		console.log("La letra "+letra+" es una consonante");
	}



/*
6-Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y determinar si eso es mayor que y,
de lo contrario sumar x y z (x+z) y multiplicarlo por y.*/

 var x = 1;
 var m = 2;
 var z = 3;
 var w = 0;
 

if (x > y) {
	w = x-y;
 console.log("La resta dio: "+w); 
if (w > y) {
 console.log("W es mayor que Y");
}}else{
	 w = (x+z)*y;
 console.log("X es menor que Y");}


/*7- Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales,
 se deben realizar los cálculos en función de los siguientes criterios:
a. Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
b. Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
c. Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%.
d. Si lleva menos de 3 años se le aplica un aumento del 3% */


var tiempo = 5;
var sueldo = 40000;
var monto = 0;


switch (tiempo){
	case tiempo >= 10 : monto = sueldo*0.1;
	break;
	case tiempo<10 && tiempo>5 : monto = sueldo*0.07;
	break;
	case tiempo<5 && tiempo>3 : monto = sueldo*0.05;
	break;
	case tiempo<3 : monto = sueldo*0.03;
	break;
	
}
monto =sueldo+sueldo*0.07;

console.log("El sueldo que le corresponde al trabajador es de "+monto+" y se corresponde con "+tiempo+" años trabajados");

