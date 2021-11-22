/* BASIC FUNDATION I JS */

/* 
Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
*/
/*
function numeros255() {
  var arr = [];
  for (var i = 1; i <= 255; i++) {
    // INICIAMOS CICLO FOR PARA QUE VAYA ITERANDO DEL 1 AL 255 Y LUEGO IMPRIMIMOS //
    arr.push(i);
  }
  return "Array: " + "[" + arr + "]";
}
y = numeros255();
console.log(y);


*/
console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 
- Puedes usar un operador de módulo para este ejercicio. 
*/

/*
function pares1000() {
  sum_par = 0;
  for (var i = 2; i <= 1000; i++) {
    if (i % 2 == 0) {
      // SI ES PAR
      console.log("Numero Par: " + i);
      sum_par += i;
    } else {
      // NO ES PAR
      console.log("-------------");
    }
  }
  console.log("");
  return "SUMA PARES HASTA EL 1000: " + sum_par;
}
y = pares1000();
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Suma impares hasta 5000: 
Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
*/

/*
function impares5000() {
  sum_impar = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 != 0) {
      // SI ES IMPAR
      console.log("Numero Impar: " + i);
      sum_impar += i;
    } else {
      // NO ES IMPAR
      console.log("-------------");
    }
  }
  console.log("");
  return "SUMA IMPARES HASTA EL 5000: " + sum_impar;
}
y = impares5000();
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Itera un array: 
Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
*/

/*
function sumaArr(x) {
  sum_arr = 0;
  for (var i = 0; i < x.length; i++) {
    sum_arr += x[i];
    console.log("Numero: " + x[i]);
  }
  console.log("------------------");
  return "SUMA VALORES ARRAY: " + sum_arr;
}
y = sumaArr([-5, 2, 5, 12]); // retorna 14.
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Encuentra el mayor (max): 
Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

*/
/*
function maxArr(x) {
  maximum = 0;
  maximum = Math.max.apply(null, x);
  return "valor maximo del arreglo: " + maximum;
}
y = maxArr([-3, 3, 5, 7]); // retorna 7.
console.log(y);
*/
console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Encuentra el promedio (avg): 
Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
*/

/*
function avgArr(x) {
  var sum = 0;
  var avg = 0;

  for (var i = 0; i < x.length; i++) {
    sum += x[i];
    console.log("valor arreglo: " + x[i]);
    //console.log("Suma acumulada: " + sum);
  }
  avg = sum / x.length;
  console.log("----------------------------------------------------");
  return "Promedio valores del array: " + avg;
}
y = avgArr([1, 3, 5, 7, 20]); // [1,3,5,7,20] 7.2
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Array de impares: 
Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
*/

/*
function impares() {
  var imp_arr = [];
  for (var i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      // SI ES IMPAR
      imp_arr.push(i);
    } else {
      // NO ES IMPAR
    }
  }
  console.log("-------------------------------------------");
  return "Arreglo de impares: " + "[" + imp_arr + "]";
}
y = impares();
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. 
Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
*/

/*
function MayorY(x, y) {
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i] > y) {
      // SI ES MAYOR A Y
      count += 1;
    } else {
      // NO ES MAYOR A Y
      count += 0;
    }
  }
  console.log("--------------------------------------");
  return "Mayor que Y: " + count;
}
w = MayorY([1, 3, 5, 7], 3);
console.log(w);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Cuadrados: 
Dado un array con múltiples valores, 
escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
*/

/*
function Cuadrado(x) {
  var new_arr = [];
  for (var i = 0; i < x.length; i++) {
    var cuadrado = x[i] * x[i];
    new_arr.push(cuadrado);
  }
  console.log("-----------------------------");
  return "Arreglo amplificado: " + "[" + new_arr + "]";
}
w = Cuadrado([1, 5, 10, -2]);
console.log(w);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. 
Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
*/

/*
function Negativos(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      // ES NUMERO POSITIVO
    } else {
      // ES NUMERO NEGATIVO
      x[i] = 0;
    }
  }
  console.log("-------------------------------------");
  return "Arreglo cambiado: " + "[" + x + "]";
}
w = Negativos([1, 5, 10, -2]);
console.log(w);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Max/Min/Avg: Dado un array con múltiples valores, 
escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
*/

/*
function max_min_avg(x) {
  var maximum = Math.max.apply(null, x);
  var minimum = Math.min.apply(null, x);
  var sum_arr = 0;
  var avg = 0;
  largo = x.length;
  for (var i = 0; i < largo; i++) {
    sum_arr += x[i];
  }
  avg = sum_arr / largo;
  for (var i = 0; i < largo; i++) {
    x.pop(); // EXTRAE EL ULTIMO VALOR
  }
  x.push(maximum);
  x.push(minimum);
  x.push(avg);
  console.log("---------------------------");
  return "Arreglo Max/Min/Avg: " + "[" + x + "]";
}
w = max_min_avg([1, 5, 10, -2]); // [10,-2,3.5]
console.log(w);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. 
La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
*/

/*
function Intercambia(x) {
  if (x.length <= 2) {
    console.log("La longitud del arreglo debe ser mayor a 2!");
  } else {
    var primer = x.shift(); // EXTRAE PRIMER VALOR DEL ARREGLO
    var ultimo = x.pop(); // EXTRAE ULTIMO VALOR DEL ARREGLO
    x.unshift(ultimo); // INTEGRO VAR ULTIMO AL PRIMER LUGAR DEL ARREGLO
    x.push(primer); // INTEGRO VAR PRIMER AL ULTIMO LUGAR DEL ARREGLO
  }
  console.log("");
  return "Nuevo arreglo: " + "[" + x + "]";
}
w = Intercambia([1, 5, 10, -2]);
console.log(w);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/*
De Número a String: 
Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. 
Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
*/
/*
function numString(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      x[i] = "'Dojo'";
    } else {
      // AQUI NO HACE NADA
    }
  }
  return "Nuevo arreglo: " + "[" + x + "]";
}
w = numString([-1, -3, 2]); // should print [‘Dojo’,‘Dojo’,2]
console.log(w);
*/
console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);
