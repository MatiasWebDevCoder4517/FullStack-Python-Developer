/* PARTE 2, ALGORTIMOS IV */

/* 

Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y.

*/
/*
function mayor_Y(x, Y) {
  count = 0;
  for (var i = 0; i <= x.length; i++) {
    if (x[i] > Y) {
      // CUENTA MAYORES QUE Y //
      count += 1;
    } else {
      count += 0;
    }
  }
  return "Numero de valores mayores que Y: " + count;
}

w = mayor_Y([1, 2, 3, 5, 6, 7], 3); // cuenta = 3 y result 3
console.log(w);
*/
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 
  
  Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 
  
  */
/*
  function max_min_avg(x) {
    var max = 0;
    var min = 0;
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
      // TOTAL SUM OF ARRAY
      sum += x[i];
    }
  
    // AVG OF ARRAY
    var avg = sum / x.length;
    // MAX OF ARRAY
    max = Math.max.apply(null, x);
  
    // MAX OF ARRAY
    min = Math.min.apply(null, x);
  
    return "Max , Min and avg respectively: " + max + " , " + min + " and " + avg;
  }
  
  w = max_min_avg([1, 2, 3, 4, 5, 6]);
  console.log(w);
  */
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 
  
  Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. 
  Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].
  
  */
/*
  function reemplazarNegativos(x) {
    for (var i = 0; i < x.length; i++) {
      var str = "'Dojo'";
      if (x[i] < 0) {
        // ES NUMERO NEGATIVO
        x[i] = str;
      } else {
        // NO ES NUMERO NEGATIVO
      }
    }
  
    return "Nuevo arreglo: " + x;
  }
  
  w = reemplazarNegativos([1, 2, -3, -5, 5]);
  console.log(w);
  */
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 
  
  Dado un array y su respectivo índice, remueve los valores en el rango del índice dado (acortando el array). 
  Por ejemplo, removerRango([20,30,40,50,60,70],2,4) debiera devolver [20,30,70].
  
  */
/*
  function removeVals(arr, start, end) {
    // this one is tough and you can do it a lot of different ways!
    var offset = end - start + 1;
    for (var i = start; i <= offset; i++) {
      arr[i] = arr[i + offset];
    }
    console.log(arr); // check out this console log to see how the array looks
    // now we're going to lop off the same "offset" number of values from the end of the array
    arr.length = arr.length - offset;
    return arr;
  }
  var result = removeVals([20, 30, 40, 50, 60, 70], 2, 4);
  console.log(result);
  */
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */
