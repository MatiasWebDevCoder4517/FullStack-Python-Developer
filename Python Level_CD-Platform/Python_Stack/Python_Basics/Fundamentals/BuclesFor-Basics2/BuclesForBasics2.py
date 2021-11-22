'''

1. Tamaño grande: dada una lista, escriba una función que cambie todos los números positivos de la lista a "big".
Ejemplo: biggie_size ([- 1, 3, 5, -5]) devuelve la misma lista, pero cuyos valores son ahora [-1, "big", "big", -5]

2. Contar positivos : dada una lista de números, cree una función para reemplazar el último valor con el número de valores positivos. 
(Tenga en cuenta que cero no se considera un número positivo).
Ejemplo: count_positives([- 1, 1, 1,1 ]) cambia la lista original a [-1, 1, 1, 3] y la devuelve
Ejemplo: count_positives([1, 6, -4, -2, -7, -2]) cambia la lista a [1, 6, -4, -2, -7, 2] y la devuelve

3. Suma total : crea una función que toma una lista y devuelve la suma de todos los valores de la matriz.
Ejemplo: sum_total ([1,2,3,4]) debería devolver 10
Ejemplo: sum_total ([6,3, -2]) debería devolver 7

4. Promedio : crea una función que toma una lista y devuelve el promedio de todos los valores.
Ejemplo: el promedio ([1,2,3,4]) debería devolver 2.5

5. Longitud : crea una función que toma una lista y devuelve la longitud de la lista.
Ejemplo: la longitud ([37,2,1, -9]) debería devolver 4
Ejemplo: longitud ([]) debería devolver 0

6. Mínimo : crea una función que tome una lista de números y devuelva el valor mínimo en la lista. Si la lista está vacía, haga que la función devuelva False.
Ejemplo: mínimo ([37,2,1, -9]) debería devolver -9
Ejemplo: mínimo ([]) debería devolver False

7. Máximo : crea una función que toma una lista y devuelve el valor máximo en la matriz. Si la lista está vacía, haga que la función devuelva False.
Ejemplo: máximo ([37,2,1, -9]) debería devolver 37
Ejemplo: máximo ([]) debería devolver False

8. Análisis final : crea una función que tome una lista y devuelva un diccionario que tenga la suma total, promedio, mínimo, máximo y longitud de la lista.
Ejemplo: ultimate_analysis ([37,2,1, -9]) debería devolver {'total': 31, 'promedio': 7.75, 'minimo': -9, 'maximo': 37, 'longitud': 4}

9. Lista inversa : crea una función que tome una lista y la devuelva con los valores invertidos. Haz esto sin crear una segunda lista. 
(Se sabe que este desafío aparece durante las entrevistas técnicas básicas).
Ejemplo: reverse_list ([37,2,1, -9]) debería devolver [-9,1,2,37]

'''

## SOLUTIONS ##

## 1 ##
''' def big_size(lista):
    for x in range(len(lista)):
        if(lista[x] >= 1):
            ## numero es positivo ##
            lista[x] = 'Big'
        else:
            pass
    return "NuevaLista: {}".format(lista)
lista = [-1, 3, 5, -5]
print(big_size(lista))
'''

## 2 ##
''' def count_positives(x):
    count = 0
    for i in range(1, len(x), 1):
        if(x[i] > 0):
            ## numero positivo ##
            count += 1
    w = x.pop(len(x)-1)
    w = count
    x.append(count)
    print("")
    print("Cantidad de numeros positivos: {}".format(count))
    return "Nueva Lista: {}".format(x)
print(count_positives([- 1, 1, 1, 1, 1]))
'''

## 3 ##
''' def sum_total(x):
    suma = 0
    for i in range(0, len(x), 1):
        suma += x[i]
        print("Numero sumado: {}".format(x[i]))
    return "Suma total de los valores de la lista: {}".format(suma)
x = [1, 2, 3, 4, 5]
print(sum_total(x))
'''

## 4 ##
''' def promedio(x):
    suma = 0
    avg = 0
    for i in range(0, len(x), 1):
        suma += x[i]
        print("Numero sumado: {}".format(x[i]))
    avg = suma / len(x)
    return "Promedio Lista: {}".format(avg)
x = [1, 2, 3, 4, 5, 6]
print(promedio(x))
'''

## 5 ##
''' def longitud(x):
    return "Longitud Lista: {}".format(len(x))
x = [1, 2, 3, 4]
print(longitud(x))
'''

## 6 ##
''' def minimo(x):
    if(len(x) <= 0):
        return False
    else:
        return "Minimo de lista x: {}".format(min(x))
x = [37, 2, 1, -9]
print(minimo([37, 2, 1, -9, -1000]))
'''

## 7 ##
''' def maximo(x):
    if(len(x) <= 0):
        return False
    else:
        return "Maximo de lista x: {}".format(max(x))
x = [37, 2, 1, -9]
print(maximo([37, 2, 1, -9, 1000]))
'''

## 8 ##
''' def ultimate_analysis(x):
    # CALCULANDO SUMA TOTAL
    suma = 0
    for i in range(0, len(x), 1):
        suma += x[i]
    ###-------###
    # CALCULANDO PROMEDIO
    avg = suma / len(x)
    ###-------###
    # CALCULANDO LONGITUD
    largo = len(x)
    ###-------###
    # CALCULANDO MINIMO
    minimum = min(x)
    ###-------###
    # CALCULANDO MAXIMO
    maximum = max(x)
    ###-------###
    ## CREANDO DICCIONARIO ##
    dict = {
        'Suma-total': suma, 'promedio-lista': avg, 'minimo-lista': minimum, 'maximo-lista': maximum, 'longitud-lista': largo
    }
    return "Diccionario: {}".format(dict)
x = [1, 2, 3, 4, 5, 6]
print(ultimate_analysis(x))
'''

## 9 ##
''' def reverse_list(x):
    x.reverse()
    return "Reverse List: {}".format(x)
x = [1,2,3,4]
print(reverse_list(x))
'''
