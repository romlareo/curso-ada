
//Ejercicio 1: Escribir una función que dado un número X (base) y un número N (potencia), devuelva el resultado de realizar XN.

function elevar(numero,exponente){

    resultado=Math.pow(numero,exponente); 
    return resultado;
    }
   console.log("Ejercicio 1: "+ elevar(8,2)); //aca puedo ir cambiandolos para ver las potencias.



//Ejercicio 2: Escribir una función que, dado un número pasado como parámetro, determine si es primo.

 //Esta funcion crea arreglo de numeros primos hasta 100.

var c = 100; //esto puedo ir cambiandolo, averiguar si puede ser infinito
var numerosPrimos = [];


function primos(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

for (var j = 2; j < c; j++) {

    if (primos(j)) {
      numerosPrimos.push(j);
    }
    
  }
  console.log("Ejercicio 2: crea array de numeros primos "+numerosPrimos);

  //Esta funcion segun el numero que le coloque me dice si es primo o no

  
  function numPrimos()
	{
		var valor=parseInt(document.getElementById("valor").value); //aca convierto la cadena de caracteres en num entero y tomo su valor, el ingresado
		var NumeroPrimo=true; //aca defino que numrpimo es true, para que despues con el for se corte el bucle.
 
		for(i=1;i<valor;i++)
		{
			if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)  // para saber si es primo o no y redondeo
			{
				NumeroPrimo=false; //aca hago break para que si no es primo se termine el bucle.
				break;
			};
		};
 
		if(NumeroPrimo){
			document.getElementById("resultado").innerHTML="El numero ingresado es "+valor+" y es Primo";
    }else{
			document.getElementById("resultado").innerHTML="El numero ingresado es "+valor+" y no es Primo";
  }
}

//Ejercicio 3: Escribir una función que dada una palabra pasada por parámetro determine si es aguda, grave o esdrújula.


//Ejercicio 4: Escribir una función que dado un arreglo con los siguientes datos: retorne la categoría a la cual estará anotado por ejemplo:F 18 – 25, M 18 – 25

var corredor = ["Juan","Perez","22","M"];

if(corredor[2] > 18 && corredor[2] < 26 && corredor[3] == "M"){
  console.log("El corredor tiene "+corredor[2]+ " y esta en la categoria "+corredor[3]+" :entonces esta en la categoria M de 18 a 25 años");

  }
  if(corredor[2] > 18 && corredor[2] < 26 && corredor[3] == "F"){
    console.log("El corredor tiene "+corredor[2]+ " y esta en la categoria "+corredor[3]+" :entonces esta en la categoria F de 18 a 25 años");
  };
