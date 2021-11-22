// CHALLENGES //

//1. Imprime números enteros de 1 a x. Si x es menor que 1, retorna false.
/*
function imprimeHasta(x) {

    for (var i = 1; i <= x; i++) {
        console.log(i);
    }
    if (x < 1) {
        return false;
    }
}
imprimeHasta(1000000); // debe imprimir todos los enteros desde el 1 hasta el 1000000
console.log('');
y = imprimeHasta(-10);
console.log('variable y: ' + y); // debe imprimir false
*/

//2. Imprime todos los enteros desde el 0 hasta el 255. Con cada entero, debes imprimir la suma de todos hasta ese punto. Retorna la suma final.
/*
function printSum(x) {
    var sum = 0;
    for (var i = 0; i <= x; i++) {

        console.log('Iteracion: ' + i + '; Suma acumulativa: ' + sum);
        sum = sum + i;
    }
    console.log('');
    return ('Suma Total: ' + sum);
}
y = printSum(255) // debe imprimir todos los enteros desde el 0 hasta el 255, y la suma parcial en cada punto
console.log(y) // debe imprimir 32640
*/

//3. La función debe imprimir la suma de todos los valores en el arreglo dado:
/*
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        console.log('valor: ' + x[i]);
        sum = sum + x[i];
    }
    return ('Suma Total= ' + sum);
}
console.log(printSumArray([1, 2, 3])); // debe imprimir 6
*/

//4. Escribe una función que retorne el elemento mayor del arreglo dado:
/*
function mayorElem(x) {
    var mayorHastaAhora = x[0];
    mayorHastaAhora = Math.max.apply(null, x);
    return ('El numero mayor del arreglo es: ' + mayorHastaAhora);
}
console.log(mayorElem([8, 3, 11, 2, -8])); // debe imprimir 11
*/

