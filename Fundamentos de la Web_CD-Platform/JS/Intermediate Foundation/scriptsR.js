/* INTERMEDIATE FOUNDATION JS */

/* 
Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). 
Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
*/

/*
function sigma(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
    console.log("Suma acumulada: " + "(" + sum + ")");
  }
  console.log("");
  return "Sigma de: " + num + " es = " + sum;
}
y = sigma(5); // should print 15 -----> (1+2+3+4+5)
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos (incluyendo el número dado). 
Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
*/

/*
function Factorial(x) {
  // OJO CON QUE MULTI TIENE QUE SER 1 Y ITERADOR 1 TAMBIEN, SI UNO DE ELLOS ES 0 , LA MULTIPLICACION SERA SIEMPRE 0!
  var multi = 1;
  for (var i = 1; i <= x; i++) {
    multi *= i;
    console.log("Multiplicacion acumulada: " + "(" + multi + ")");
  }
  console.log("");
  return "Factorial de: " + x + " es = " + multi;
}
y = Factorial(5); // should print 120   ------>   (1*2*3*4*5)
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Fibonacci - Crea una función para generar números de Fibonacci. 
En esta famosa secuencia matemática, cada número es la suma de las dos anteriores, partiendo con los valores 0 y 1. 
Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al valor inicial, 4 corresponden al valor cuatro más tarde, etc).
Ejemplos: fibonacci(0) = 0 (dado), fibonacci(1) = 1 (dado), fibonacci(2) = 1 (fib(0)+fib(1), o 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1), 
fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). 
Haz esto primero sin usar recursión. 
Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir este concepto en la Parte 2 de esta actividad. 
*/

/* FIBONACCI SECUENCIA:      [0,1,1,2,....n]   n=Sumtotal */
/* EJEMPLO:   FIBONACCI(6) ---->  [0,1,1,2,3,5,8] ; n=8 ; 8 = (3+5) */

/*
function Fibonacci(x) {
  // FORMULAMOS SECUENCIA DE FIBONACCI SEGUN X
  var fib_arr = [];
  fib_arr.push(0);
  fib_arr.push(1);
  for (var i = 2; i <= x; i++) {
    fib_arr[i] = fib_arr[i - 2] + fib_arr[i - 1];
    fib_arr.push(fib_arr[i]);
  }
  fib_arr.pop(); // ELIMINAMOS VALOR REPETIDO

  // CALCULAMOS SUMA TOTAL DE FIBONACCI SEGUN X (RECURSIVA)
  function sumFib(x) {
    // DETERMINAMOS QUE NO SUMEN LOS ARGUMENTOS [0,1,1,]
    if (x <= 2) {
      return 1;
    }
    return sumFib(x - 2) + sumFib(x - 1);
  }

  // ENTREGAMOS RESULTADOS DE FIBONACCI(X)
  console.log("");
  z = sumFib(x);
  console.log("Suma fibonacci: " + z);
  return "Fibonacci array: " + "[" + fib_arr + "]";
}
y = Fibonacci(7);    // should give 13
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Array: Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño, devuelve null.
*/

/*
function Penultimo(x) {
  if (x.length <= 2) {
    return null;
  }
  for (var i = 0; i < x.length; i++) {
    if (i == x.length - 2) {
      // PENULTIMO VALOR DEL ARREGLO
      return "Penultimo valor del arreglo: " + x[i];
      break;
    }
  }
}
y = Penultimo([42, true, 4, "'Liam'", 7, "'Viking'", "'Warrior'", -1, 3]);         // should give -1
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3]), devuelve 6. Si el array es muy pequeño, devuelve null. 
*/

/*
function N_ult(x, w) {
  if (x.length <= 2) {
    return null;
  }
  for (var i = 0; i < x.length; i++) {
    if (i == w) {
      return "n-ultimo: " + x[i];
    }
  }
}
y = N_ult([5, 2, 3, 6, 4, 9, 7], 3); // should give 6
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  
Si el array es muy pequeño, devuelve null.
*/

/*
function Segundo_max(x) {
  if (x.length <= 2) {
    return null;
  }

  var maximum = Math.max.apply(null, x); // DETERMINAMOS PRIMER MAXIMO
  var maximum2 = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i] > maximum2 && x[i] != maximum) {
      maximum2 = x[i];
    }

  }
  console.log("");
  console.log("Primer maximo: " + maximum);
  return "Segundo maximo: " + maximum2;
}
y = Segundo_max([42, 1, 100, 3, 7, 30, 3]); // should give 10
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos y manteniendo el orden original. 
Convierte [4, "Ulysses", 42, false] a [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
function DobleProblema(x) {
  for (var i = 0; i < x.length; i += 2) {
    // (i+1) ---> empieza aqui el metodo  ;  (0) ----> remueve 0 datos   ;   (x[i])   --->  agrega nuevo item al arreglo.
    x.splice(i+1, 0, x[i]);
    // splice method:   Array.splice(start, removeCount, newItem, newItem, newItem, ...)   // SPLICE --> NO CONTIENE INDEX 0, PARTE DESDE 1
  }
  return "Nuevo arreglo: " + "[" + x + "]";
}
console.log("");
y = DobleProblema([4, "Ulysses", 42, false]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
ACTIVIDAD:

1. Crea una función Fib(n) que devuelve el enésimo número Fibonacci. Usa recursión para esto. 
*/

/*
function Fib(n) {
  // DETERMINAMOS QUE NO SUMEN LOS ARGUMENTOS [0,1,1,]
  if (n <= 2) {
    return 1;
  }
  return Fib(n - 2) + Fib(n - 1);
}
console.log("");
console.log("N-esimo Numero: ");
y = Fib(6);
console.log(y);
*/

console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
