/* BASIC FOUNDATION II JS */

/* 
Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. 
Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
*/
/*
function Grande(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      // VALOR DEL ARRAY ES POSITIVO
      x[i] = "'Big'";
    } else {
      // AQUI NO HACE NADA
    }
  }
  return "Nuevo arreglo: " + "[" + x + "]";
}
y = Grande([-1, 3, 5, -5]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. 
La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
*/
/*
function min_max(x) {
  var maximum = Math.max.apply(null, x);
  var minimum = Math.min.apply(null, x);
  console.log("El valor minimo del arreglo es: " + minimum);
  return "El valor maximo del arreglo es: " + maximum;
}
y = min_max([-1, -30, 10, -5]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
*/

/*
function Devuelve(x) {
  var primer_imp = 0;
  var penultimo = 0;
  var cambio = x.length - 2;
  for (var i = 0; i < x.length; i++) {
    // BUSCAMOS PENULTIMO VALOR
    if (i == cambio) {
      // ENCONTRAMOS PENULTIMO VALOR DEL ARREGLO
      penultimo = x[i];
    } else {
      // NO ES EL PENULTIMO VALOR
    }
  }
  
  for (var j = 0; j < x.length; j++) {
    if (x[j] % 2 == 0) {
      // ES NUMERO PAR
    } else {
      // ES IMPAR
      primer_imp = x[j];
      break;
    }
  }
  console.log("");
  return (
    "Penultimo valor es: " +
    penultimo +
    " y el Primer valor impar es: " +
    primer_imp
  );
}
y = Devuelve([4, 6, 10, 2, 8, 1]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. 
Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
*/
/*
function Double(x) {
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i] * 2;
  }
  return "Nuevo arreglo: " + "[" + x + "]";
}

y = Double([1, 2, 3]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. 
Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
*/
/*
function contarPositivos(x) {
  var count = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      // ES POSITIVO
      count += 1;
    }
  }
  x.pop();
  x.push(count);
  console.log("");
  return "Nuevo arreglo: " + "[" + x + "]";
}
y = contarPositivos([-1, -1, -1, 1, 3, 4, -2]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Pares e Impares - Crea una función que acepte un array. 
Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
*/
/*
function Par_Imp(x) {
  var impares_seguidos = 0;
  var pares_seguidos = 0;

  for (var i = 0; i < x.length; i++) {
    if (x[i] % 2 !== 0) {
      // VALOR IMPAR
      pares_seguidos = 0; // <-- Si tuviera 2 pares ya no sirven
      impares_seguidos += 1;
      if (impares_seguidos >= 3) {
        return "¡Qué imparcial!";
        break;
      }
    } else {
      // VALOR PAR
      impares_seguidos = 0; // <-- Si tuviera 2 impares ya no sirven
      pares_seguidos += 1;
      if (pares_seguidos >= 3) {
        return "¡Es para bien!";
        break;
      }
    }
  }
  console.log("");
  // SI NO HAY 3 IMPARES O 3 PARES SEGUIDOS
  return "Array Normal!";
}
console.log(Par_Imp([1, 2, 1, 2, 1, 2]));           // ARRAY NORMAL
console.log(Par_Imp([1, 1, 1, 2, 1, 2]));           // QUE IMPARCIAL
console.log(Par_Imp([2, 2, 2, 1, 2, 1]));           // ES PARA BIEN
*/
console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 
*/
/*
function Incrementa(x) {
  for (var i = 0; i < x.length; i++) {
    if (i % 2 != 0) {
      // INDICE ES IMPAR
      x[i] += 1;
      console.log("Valor array incrementado: " + x[i]);
    } else {
      // AQUI NO SE HACE NADA PORQUE EL INDICE ES PAR
      x[i] += 0;
    }
  }
  console.log("");
  return "Arreglo: " + "[" + x + "]";
}
console.log("");
y = Incrementa([2, 4, 6, 8, 10, 11]); // SHOULD INCREMENT VALOR 4,8,11
console.log(y);
*/
console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, 
reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. 
Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. 
Pista: ¿For loops solo puede ir hacia adelante?
*/

/*
function previousLengths(arr) {
  // FOR EMPIEZA DESDE ULTIMA POSICION HASTA LLEGAR AL SEGUNDO VALOR DEL ARREGLO
  for (var i = arr.length - 1; i > 0; i--) {
    // VA CAMBIANDO DESDE EL FINAL DEL ARREGLO ; CAMBIA EL VALOR SIGUIENTE CON EL LARGO DEL VALOR ANTERIOR
    arr[i] = arr[i - 1].length;
  }
  console.log("");
  return arr;
}
console.log("");
console.log("Nuevo arreglo: " + "[" + previousLengths(["programar", "dojo", "genial", "coding"]) + "]");
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. 
Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
*/

/*
function agregaSiete(x) {
  var new_arr = [];
  for (var i = 0; i < x.length; i++) {
    x[i] += 7;
    new_arr.push(x[i]);
  }
  console.log("Arreglo original: " + "[" + x + "]");
  return "Nuevo arreglo: " + "[" + new_arr + "]";
}
console.log("");
y = agregaSiete([1, 2, 3, 4, 5]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. 
Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
*/

/*
function arrayInverso(x) {
  x.reverse();
  return "Array Inverso: " + "[" + x + "]";
}
console.log("");
y = arrayInverso([3, 1, 6, 4, 2, 5]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1).
Dado [1,-3,5], devuelve [-1,-3,-5].
*/

// EJERCICIO AMBIGUO... POINTLESS EXERCISE //

/*
function Negativa(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] > 0) {
      // VALOR POSITIVO, SE APLICA CAMBIO
      x[i] = -x[i];
    } else {
      // VALOR NEGATIVO, NO APLICA NADA
    }
  }
  return "Nuevo arreglo: " + "[" + x + "]";
}
console.log("");
y = Negativa([-1, -3, -5]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Siempre hambriento - 
Crea una función que acepte un array e imprima “yummy” cada vez que alguno de los valores sea “comida”. 
Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
*/

/*
function Hunger(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i].toLowerCase() == "comida") {
      console.log("yummy");
    } else {
      console.log("");
      return "Tengo Hambre";
      break;
    }
  }
}
y = Hunger(["CoMiDa", "COMIDA", "comida", "nada", "nada"]);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. 
Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza", 42, "Ada", 2, true]. 
cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. 
No es necesario devolver (return) el array esta vez. 
*/

/*
function swapTowardCenter(arr) {
  for (var i = 0; i < arr.length / 2; i += 2) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  console.log("");
  return arr;
}

console.log(swapTowardCenter([1, 2, 3, 4, 5, 6]));
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);

/* 
Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado.
Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
*/

/*
function escalaNum(x, w) {
  for (var i = 0; i < x.length; i++) {
    x[i] *= w;
  }
  console.log("");
  return "Nuevo arreglo: " + "[" + x + "]";
}
y = escalaNum([1,2,3], 3);
console.log(y);
*/

console.log(
  "/*------------------------------------------------------------------------------------------------------*/"
);
