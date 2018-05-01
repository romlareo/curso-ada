/*Ejercicio 1*/

//Ejercicio 1 - Cargar de forma automática incremental, un array de números a partir de un largo dado por el usuario.



/*Ejercicio 3*/

 /*Ejercicio 3 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20], mostrar por pantalla el valor máximo.*/

 var numeros = [10,24,36,7,98,11,14,20];
 var max = 0;  // el 0 es arbitrario, entonces toma como valor maximo el primero del array, siempre. Es indistinto si son + o -.

 for(var i = 0; i<numeros.length;i++){ //me asegura que recorrere todos los elementos del array.
  if(numeros[i]>max){
    max = numeros[i];
  }
 }
  console.log ("El mayor es "+max);


/*Ejercicio 4*/

/*Ejercicio 4 - Dado el arreglo de números del punto 3, mostrar por pantalla el valor máximo y su posición.*/

var numeros = [10,24,36,7,98,11,14,20];
var pos = 0;
var max = numeros[0];


for(var i = 0; i<numeros.length;i++){ //me asegura que recorrere todos los elementos del array.
  if(numeros[i]>max){
    max = numeros[i];
    pos = i;
  }
 }
  console.log ("El mayor es "+max+" y su posicion es "+pos);

 /*Ejercicio 5 - Dado el siguiente arreglo de números x = [10,24,36,7,98,11,14,20,98,14,10],
  mostrar por pantalla el valor máximo y la cantidad de veces que se repite.*/

  var numeros = [10,24,36,7,98,11,14,20,98,14,10,98,98];
  var mayor = 0;
  var contador = 1;

  for(i = 0; i<numeros.length;i++){
    if(numeros[i] >mayor){
      mayor = numeros [i];
       // aca yo veo cual es el max.
    }
  }

for(i = 0; i<numeros.length;i++){
    if(numeros[i] == mayor){
      
    }

  contador++; /* tiene que estar afuera para que se reinicie el contador*/

}
  console.log ("El mayor es "+mayor+ " y se repite "+contador++);



/* otra forma de hacerlo al contador*/

if(numeros[i] == max){
  cont ++
}

for(i = 0; i<numeros.length;i++){
    if(numeros[i] == mayor){
      contador = 1; // al ponerle 1 hago que si vaya sumando las posiciones.
    }
  }
  console.log ("El mayor es "+mayor+ " y se repite "+contador);



/*Ejercicio 6*/

/*Ejercicio 6 – Dados los siguientes arreglos:
X = [“a”,”l”,”f”,”a”];
Y = [“a”,”l”,”f”,”a”,”j”,”o”,”r”]
Crear un bloque de código que permita determinar si:
• Ambos arreglos son iguales
• Cuál de los dos es más largo
• Cuantas letras tienen en común*/


var x = ["a","l","f","a"];
var y = ["a","l","f","a","j","o","r"];

function compararArrays(x,y){
if( x.length == y.length ){
//Si son iguales
for( i = 0; x.length; i++){
  if (x[i] == y[i]){
    letras = letrasEnComun(x,y);
    return "No son iguales, tiene: "+letras+" en comun";
  }
}
return "son iguales";
}else{
  if(x.length> y.length){
    letras = letrasEnComun(x,y);
    return "x es mayor que y, tiene: "+letras+"en comun";
    }else{
      letras = letrasEnComun(x,y);
      return "y es mayor que x, tiene: "+letras+" en comun";
    }
}
}

function letrasEnComun(x,y){
  var i,j;
  var k = 0; //es un indice nuevo, para ir agregando elementos en Z.
  var iguales = false;
  var z = []; //esto es un arreglo vacio, como auxiliar. 

  for(i = 0; i < x.length; i++){//un for adentro de otro, si encuentra una letra dentro de un arreglo, entonces se detiene y lo cuenta.

    for(j = 0; j < y.length; j++){ //El for j lo que hace es cuenta las vueltas que hace i, si hace una vuelta entonces cambia el contador de J.


      if(x[i] == y[j]){

        iguales = true;
      }
    }
if(iguales){

  if(z.indexOf(x[i]) == -1){//el indice busca el elemento dentro del array, a mi me sirve preguntar si no esta. 
  z[k] = x[i];
  k++;
}  
iguales = false;   //ESTO es para que no cuente doble la misma letra, es decir para que cuente la A una vez.

}
}
return z.length;
}

console.log(compararArrays(x,y));


/*Ejercicio 7*/

/*Ejercicio 7 – Dado el siguiente array datos1 = [“Fido”,”Gomez”,26,15000.78,true] y datos2 = [“Gervasio”,”Fernandez”,32,28.550,false]
Determinar:
• ¿Cuál de los dos personajes es más viejo?
• ¿Cuál de los dos personajes está casado?
• Si Fido recibirá un aumento equivalente al 12.5% del sueldo de Gervasio, cuanto será el monto a cobrar? */

datos1 = ["Fido","Gomez",26,15000,true];
datos2 = ["Gervasio","Fernandez",32,28550,false];
var i = 0;


function comparacion (){
  
    for( i = 0; datos1.length == datos2.length; i++){
      if (datos1[2] == datos2[2]){
      return "Son iguales de edad";
      }else{
        if(datos1[2] < datos2[2]){
       console.log("Fido es menor que Gervasio");
       break;
      }
      if(datos1[2] > datos2[2]){
        console.log("Fido es mayor que Gervasio");
        break;
      }
     }
    }
  }
comparacion();


function casado(){

  for(i = 0; i < datos1.length ; i++){
    if(datos1[4] == true){
      console.log("Fido esta casado");
    }else{
      console.log("Fido es soltero");
    }
  }
  for(i = 0; i < datos2.length ; i++){
    if(datos2[4] == true){
      console.log("Gervasio esta casado");
    }else{
      console.log("Gervasio es soltero");
} 
  }
}

casado();

function sueldo(){
var aumento = 12.5*datos2[3]/100;
var sueldoFido = aumento + datos1[3];
console.log("Fido recibira un aumento de sueldo del 12,5% del sueldo de Gervasio. Se le adicionan " +aumento +" mas a su sueldo, por ende cobrara: "+sueldoFido+" pesos");
}
sueldo();