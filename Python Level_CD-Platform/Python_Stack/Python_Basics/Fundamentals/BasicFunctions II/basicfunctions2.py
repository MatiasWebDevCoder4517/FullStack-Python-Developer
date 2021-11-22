'''

1. Cuenta regresiva : crea una función que acepte un número como entrada. 
Devuelve una nueva lista que cuenta hacia atrás en uno, desde el número (como el elemento 0) hasta 0 (como el último elemento).
Ejemplo: la cuenta regresiva (5) debería devolver [5,4,3,2,1,0]

2. Imprimir y volver : crea una función que recibirá una lista con dos números. Imprima el primer valor y devuelva el segundo.
Ejemplo: print_and_return ([1,2]) debería imprimir 1 y devolver 2

3. First Plus Length : crea una función que acepta una lista y devuelve la suma del primer valor de la lista más la longitud de la lista.
Ejemplo: first_plus_length ([1,2,3,4,5]) debería devolver 6 (primer valor: 1 + longitud: 5)

4. Valores mayores que el segundo : escribe una función que acepte una lista y 
crea una nueva lista que contenga solo los valores de la lista original que sean mayores que su segundo valor. Imprima cuántos valores son y 
luego devuelva la nueva lista. Si la lista tiene menos de 2 elementos, haga que la función devuelva False
Ejemplo: values_greater_than_second ([5,2,3,2,1,4]) debería imprimir 3 y devolver [5,3,4]
Ejemplo: values_greater_than_second ([3]) debería devolver False

5. Esta longitud, ese valor : escribe una función que acepte dos enteros como parámetros: tamaño y valor. 
La función debe crear y devolver una lista cuya longitud es igual al tamaño dado y cuyos valores son todos los valores dados.
Ejemplo: length_and_value (4,7) debería devolver [7,7,7,7]
Ejemplo: length_and_value (6,2) debería devolver [2,2,2,2,2,2]

'''

## SOLUTIONS ##

## 1. ##
''' def cuentaregresiva(num):
    new_list = []
    for x in range(num, -1, -1):
        new_list.append(x)
    return "Nueva Lista: {}".format(new_list)
num = 5
print(cuentaregresiva(num)) 
'''

## 2. ##
''' def print_and_return(num):
    print(num[0])  # PRIMER VALOR
    return(num[1])  # SEGUNDO VALOR
num = [1, 2]
print(print_and_return(num))
'''

## 3 ##
''' def first_plus_length(y):
    print("Largo Lista: {}".format(len(y)))
    print("Primer valor de la lista: {}".format(y[0]))
    suma = len(y) + y[0]
    print("")
    return "Suma primer valor con largo lista: {}".format(suma)
y = [1, 2, 3, 4, 5]
print(first_plus_length(y))
'''

## 4 ##
''' def values_greater_than_second(y):
    new_list = []
    if(len(y) < 2):
        return False
    else:
        count = 0
        for x in y:  # RECORREMOS LA LISTA y
            if(x > y[1]):
                count += 1
                new_list.append(x)
            else:
                pass
    return "Valores mayores que 2do item de la lista y: {}, Nueva_Lista: {}".format(count, new_list)

y = [5, 2, 3, 2, 1, 4]
print(values_greater_than_second(y))
'''

## 5 ##
''' def length_and_value(x, y):
    new_list = []
    for n in range(x):
        new_list.append(y)
    return new_list
x = 3      ## ENTERO
y = 6      ## LARGO
print(length_and_value(x,y))
'''

