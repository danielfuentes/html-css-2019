
var numeroA = 30;
var numeroB = 2;

var resultadoSuma = numeroA + numeroB;
var resultadoResta = numeroA - numeroB;
var resultadoMultiplicacion = numeroA * numeroB;
var resultadoDivision = numeroA / numeroB;

console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicacion);
console.log(resultadoDivision);

-------------------------------------------------------

// strings

var nombre = "Karly"
var apellido = "Salama"
var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);


--------------------------------------------------------

// Variables y tipos de datos - operaciones

var nombre = "Karly";
var apellido = "Salama";
var edad = 30;

var resultado = "Pasado el tiempo," + " " + nombre + " " + apellido + " " + "va a tener" + " " + (edad + 2);

console.log(resultado);

-------------------------------------------------------

//Funciones

function nombre(parametro1, parametro2) {
	aqui van las instrucciones
}

/* Una funcion recibe el nombre y los parametros y dentro de las llaves el codigo que quiero que ejecute
mi funcion (instrucciones). Y luego un return

Puedes llamar a esa funcion y colocarle valores donde irian los parametros

Ejemplo */

function sumar(numeroA, numeroB) {
   var resultado = numeroA + numeroB
   return resultado;
}

sumar(10, 3);


-----------------------------------------------------------------

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

multiplicar(5, 7);


-----------------------------------------------------------------

/*Veamos si con la función sumar() podemos hacer una función dobleDelSiguiente()
que tome un parámetro y nos devuelva el doble del siguiente. */

function dobleDelSiguiente(numero1) {
  var resultado = numero1 + 1;
  return resultado * 2;
}

dobleDelSiguiente(5);

Devuelve 12


---------------------------------------------------------------------

/*Formulas y Funciones

Hagamos una función perimetro que nos diga el perímetro de un círculo cuando le damos el radio
como parámetro.

También la función area que nos dé el area de un círculo cuando recibe el radio como parámetro.
*/

 perimetro = π * radio * 2;

 area = π * radio * radio;

 π = 3.14;



function perimetro(radio) {
  return π * (radio *2);
}

function area(radio) {
  return π * (radio * radio);
}


----------------------------------------------------------

function longitudNombreCompleto(nombre, apellido) {
  return(nombre + " " + apellido).length ;
}

----------------------------------------------------------

//Cartelito

function escribirCartelito(titulo, nombre, apellido){
  return (titulo + " " + nombre + " " + apellido);
}

escribirCartelito("Dra", "Ana", "Perez");

---------------------------------------------------------


/* Formulas matematicas que ya están declaradas en JavaScript
Math.abs(4)    //devuelve 4
Math.abs(0)    //devuelve 0
Math.abs(-123) //devuelve 123

Math.round(4.6) //devuelve 5
Math.round(4.3) //devuelve 4

Math.floor(4.6) //devuelve 4
Math.floor(4.3) //devuelve 4


Math.max(4, 7)  //devuelve 7
Math.min(4, 7)  //devuelve 4

*/

----------------------------------------------------------

function hoySeJuega(diaDeLaSemana) {
  if (diaDeLaSemana == "domingo") {
    return ("Hoy se juega al futbol!!!");
  } else {
    return ("Hoy no se juega al futbol :(");
  }
}


hoySeJuega("domingo");



-----------------------------------------------------------

Ejercicio 4 cual es mayor

/*
Definí la función elMayor, la cual recibiendo por parámetro dos números, retornará el mayor de los dos. Por ejemplo, si pasamos 4 y 5 retornará 5 pues es el mayor, y si pasamos 10 y 4, retornará 10.

*/

function elMayor(numeroA, numeroB) {
  if (numeroA > numeroB ) {
    return numeroA;
  } else {
    return numeroB;
  }
}

----------------------------------------------------------------
