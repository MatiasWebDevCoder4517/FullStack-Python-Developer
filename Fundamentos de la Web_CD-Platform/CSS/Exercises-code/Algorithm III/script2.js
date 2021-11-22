/* PARTE 2, ALGORTIMOS III */

/*
Analiza los valores de un array y obtén el promedio (average) de esos valores.
*/

/*
function printAverage(x) {

  sum = 0;

  // var prom = 0;

  for (var i = 0; i < x.length; i++) {

    sum += x[i]; // SUMA TOTAL ARREGLO

  }

  prom = sum / x.length; // PROMEDIO ARREGLO
  return "Promedio arreglo: " + prom;

}

y = printAverage([1, 2, 3]);
console.log(y); // should log 2
y = printAverage([2, 5, 8]);
console.log(y); // should log 5
*/

console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 
Crea un array entre 1 y 255 (inclusive), con todos los enteros impares (odd integers). 
*/

//  % ---> operador / operator:    4,6,8,10 / 2 = 0  ----> PAR   ;  1,3,5,7,....
/*
function returnOddArray() {
  var imp_arr = [];

  for (var i = 1; i <= 255; i++) {
    console.log("proceso: " + i);
    if (i % 2 == 0) {
      // ES NUMERO PAR (EVEN)
      // console.log("ES PAR!");
    } else {
      // ES NUMERO IMPAR (ODD)
      console.log("Numero impar: " + i);
      imp_arr.push(i);                     // PUSH:   ENTREGAME EL VALOR AL FINAL DEL ARREGLO  push(3)  ---> [1,2]  ---> [3,1,2]  
    }
  }

  console.log("");
  return "Arreglo de impares: " + "[ " + imp_arr + " ]";
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]
*/
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 

Cuadra cada valor con un array dado, obteniendo el mismo array con valores cambiados..

*/
/*
function squareValue(x) {

  for (var i = 0; i < x.length; i++) {
      x[i] *= x[i];
  }
  return x;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]
console.log("");
y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]
*/
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */
