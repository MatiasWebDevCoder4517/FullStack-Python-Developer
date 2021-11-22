## CICLO FOR ##
'''
    #####
    for x in range(0, 10, 1):
    for x in range(0, 10):  # incremento de +1 está implícito
    for x in range(10):  # incremento de +1 e inicia en 0 está inplicito

    #####
    my_list = ["abc", 123, "xyz"]
    for i in range(0, len(my_list)):
        print(i, my_list[i])
    # salida: 0 abc, 1 123, 2 xyz 
    # OR 
    for v in my_list:
        print(v)
    # salida: abc, 123, xyz

    #####
    my_dict = { "name": "Noelle", "language": "Python" }
    for k in my_dict:
    print(k)
    # salida: name, language

    #####
    #otra forma de iterar a través de claves o llaves
    for key in capitals.keys():
    print(key)
    #iterar con valores
    for val in capitals.values():
    print(val)
    #iterar con ambos, llaves y valores
    for key, val in capitals.items():
    print(key, " = ", val)
'''

## CICLO WHILE ##
'''
    ########
    for count in range(0,5):
    print("looping - ", count)

    ########
    count = 0
    while count < 5:
    print("looping - ", count)
    count += 1
    
    ########
    while <expression>:
    # hacer algo, incluido el progreso para hacer que la expresión sea falsa. De lo contrario, nunca saldremos de aquí.

    #######
    y = 3
    while y > 0:
    print(y)
    y = y - 1
    else:
    print("Final de sentencia else")

'''

## BREAK STATEMENT ##
'''
El uso más común para el break es cuando se activa una condición externa, que requiere una salida apresurada de un bucle. 

#####
for val in "string":
if val == "i":
break
print(val)
# salida: s, t, r

'''

## CONTINUE STATEMENT ##
'''
La instrucción continue inmediatamente devuelve el control al comienzo del ciclo.

#####
for val in "string":
if val == "i":
continue
print(val)
# salida: s, t, r, n, g
# Nota, no i en el output, pero el bucle continuo después de la i

#####
y = 3
while y > 0:
print(y)
y = y - 1
if y == 0:
break
else:		# solo se ejecuta en una salida limpia del ciclo while (es decir, no un break)
print("Final else statement")
# salida: 3, 2, 1

'''

