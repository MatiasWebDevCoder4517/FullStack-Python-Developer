/* ALGORTIMOS V */

/* 
Configura un array para que los valores negativos se transformen en 0. 
Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].
*/
/*
function resetNegativos(x) {
  for (var i = 0; i < x.length; i++) {
    if (x[i] < 0) {
      // NUMERO ES NEGATIVO
      x[i] = 0;
    } else {
      // NUMERO POSITIVO
    }
  }
  return "nuevo arreglo: " + "[" + x + "]";
}
y = resetNegativos([1, 2, -1, -3]); // should print [1,2,,0,0]
console.log(y);
*/
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 
  Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. 
  Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].
  */
/*
  function moverAdelante(x) {
    var last = x.shift(); // EXTRAE EL PRIMER ELEMENTO DEL ARREGLO
    last = 0; // CONVIERTE PRIMER ELEMENTO A 0
    x.push(last); // INGRESA AL ARREGLO AL FINAL LA VARIABLE LAST
    //  ARREGLO HASTA AHORA ---->  [2,3,0]
    return "Nuevo arreglo: " + "[" + x + "]";
  }
  
  y = moverAdelante([1, 2, 3, 4, 5]); // should print [2,3,0]
  console.log(y);
  */
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 
  Configura un array para que el resultado sean los valores en el orden contrario. 
  Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].
  */
/*
  function returnReverso(x) {
    x.reverse();
    return "Arreglo Reverso: " + "[" + x + "]";
  }
  
  y = returnReverso([1, 2, 3]); // should print [3,2,1]
  console.log(y);
  */
console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */

/* 
  
  Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
  Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].
  
  */
/*
  SOLUCION 1 STACK OVERFLOW: 
  const arr = [4,"Ulysses", 42, false];
  
  const res = arr.map(e=>[e,e]).flat();
  
  console.log(res);
  */

/*
  SOLUCION 2 STACK OVERFLOW: 
  // El arreglo se modifica por referencia así que no es necesario retornarlo
  function repetir(arreglo){
    // Por cada iteración el arreglo incrementará su tamaño por lo que al final
    // será el doble de grande por eso se itera en saltos de 2
    for(let i = 0; i < arreglo.length; i += 2){
    // la función splice insertará un duplicado del elemento en la posición arreglo[i]  en la posición
    // indicada en i + 1
      arreglo.splice(i + 1, 0 , arreglo[i])
    }
  }
  let arreglo = [1,'hola',false];
  repetir(arreglo);
  console.log(arreglo)
  */

/* 
  SOLUCION 3 STACK OVERFLOW
  
  let arr = [4,"Ulysses", 42, false];
  // Usar reduce para agregar elementos previos con desestructuración
  // y duplicar el elemento actual
  let dup = arr.reduce((acc, cur) => [...acc, cur, cur], []);
  // Ver resultado
  console.log(dup);
  
  */

console.log(
  "/* ---------------------------------------------------------------------------------- */"
);
/* ---------------------------------------------------------------------------------- */
