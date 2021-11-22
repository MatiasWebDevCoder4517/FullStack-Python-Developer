## BASIC 1 FOR LOOPS ASSIGNMENT ##

'''

1. Básico : imprime todos los enteros del 0 al 150.

2. Múltiplos de cinco : imprime todos los múltiplos de 5 hasta 1,000.

3. Contar, Dojo Way - imprime enteros del 1 al 100. Si es divisible por 5, imprima "Coding" en su lugar. Si es divisible por 10, imprima "Coding Dojo".

4. ¡Uf, Eso es bastante grande!: suma enteros impares de 0 a 500,000 e imprime la suma final.

5. Cuenta regresiva por cuatro : imprime números positivos del 2018 al 0, restando 4 en cada iteración.

6. Contador flexible : establece tres variables: lowNum, highNum, mult. Comenzando en lowNum y pasando por highNum, imprima solo los enteros que son múltiplos de highNum.
Por ejemplo, si lowNum = 2, highNum = 10 y mult = 3, el bucle debe imprimir 3, 6 , 9 (en líneas sucesivas).

BONUS: 7. ¿Cómo se puede detectar si un número es primo? ¿Cómo retornar una lista con los primos entre el 1 y el 1000?

'''


####### SOLUTIONS: #######

## 1. ##
'''
for x in range(151):
    print("Number: {}".format(x))
'''

## 2. ##
'''
for x in range(5, 1001, 5):
    print("Number: {}".format(x))
'''

## 3. ##
'''
for x in range(1, 101, 1):
    if(x % 5 == 0 and x % 10 != 0):
        ## DIVISIBLE POR 5 ##
        print("Coding", ",Number: ", x)
    elif (x % 10 == 0):
        ## DIVISIBLE POR 10 ##
        print("Coding Dojo", ",Number: ", x)
    else:
        pass
        # print("Something went wrong!")
'''

## 4. ##
'''
suma_imp = 0
for x in range(0, 500001, 1):
    if(x % 2 != 0):
        ## IMPAR ##
        # print("Numero impar: ", x)
        suma_imp += x
print("Suma total enteros impares: ", suma_imp)
'''

## 5 ##
'''
for x in range(2018, 0, -4):
    print("Cuenta regresiva: {}".format(x))
    if(x == 2):
        x -= 2
        break
print("Cuenta regresiva: {}".format(x))
'''

## 6 ##
'''
lowNum = 2
highNum = 10
mult = 3
for x in range(lowNum, highNum, 1):
    if(x % mult == 0):
        ## MULTIPLO DE HIGHNUM ##
        print("Multiplo: {}".format(x))
'''

## 7 BONUS: ##
### Nota: Los números primos son aquellos que solo pueden ser divisibles por ellos mismos y por el numero uno. ###
'''
def NumPrimo(n, y):
    primo = 0
    primo_list = []
    primo_list.append(1)
    for x in range(1, n, 1):
        for i in range(1, x+1):
            if(x % i == 0):
                ## ES PRIMO ##
                primo += 1
        if (primo == 2):
            primo_list.append(x)
        primo = 0
    print("Lista numeros Primos: {}".format(primo_list))

    ## DETERMINAMOS SI EL NUMERO ENTREGADO ES PRIMO ##
    for w in primo_list:
        is_primo = False
        if(w == y):
            ## VAR Y ES PRIMO ##
            print("")
            is_primo = True
            break
        elif (w != y):
            continue
        else:
            continue
    print("")
    return "variable y es primo?: {}".format(is_primo)


n = 1001  # RANGO A CALCULAR
y = 8  # DETERMINA SI ESTE ES PRIMO O NO
print(NumPrimo(n, y))
'''