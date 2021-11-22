
# 1
# Actualiza los valores en diccionarios y listas
##
'''
.Cambia el valor 10 en x a 15. Una vez que haya terminado, x ahora debería ser [[5,2,3], [15,8,9]].
.Cambia el apellido del primer alumno de 'Jordan' a 'Bryant'
.En el directorio sports_directory, cambia 'Messi' a 'Andres'
.Camba el valor 20 en z a 30
'''

## SOLUTION 1 ##
''' x = [[5, 2, 3], [15, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Bryant'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Andres', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 30}]
'''
#####################

# 2
# Itera a través de una lista de diccionarios
##
'''
Crea una función iterateDictionary(some_list)que, dada una lista de diccionarios, 
la función recorra cada diccionario de la lista e imprime cada clave y el valor asociado. 
Por ejemplo, dada la siguiente lista:
'''

## SOLUTION 2 ##
''' students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]
#####################
def iterate_dictionary(arr, key1, key2):
    for i in arr:
        print("first-name - {}, last-name - {}".format(i[key1], i[key2]))
    return ""
#####################
iterate_dictionary(students, 'first_name', 'last_name')
'''

# La salida debería ser: (Está bien si cada clave y valor quedan en dos líneas separadas)
# Bonus: Hacer que aparezcan exactamente así!
''' first_name - Michael, last_name - Jordan
first_name - John, last_name - Rosales
first_name - Mark, last_name - Guillen
first_name - KB, last_name - Tonel 
'''
#####################

# 3
# Obtén valores de una lista de diccionarios
##
'''
Crea una función iterateDictionary2(key_name, some_list)que, dada una lista de diccionarios y un nombre de clave, 
la función imprima el valor almacenado en esa clave para cada diccionario. 
Por ejemplo, iterateDictionary2 ('first_name', students) debería generar:
'''

## SOLUTION 3 ##
## A ##
''' students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]
#####################
def iterate_dictionary2(arr, key1):
    for i in arr:
        print("{}".format(i[key1]))
    return ""
#####################
iterate_dictionary2(students, 'first_name')
'''

## B ##
''' students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]
#####################
def iterate_dictionary2(key1, arr):
    for i in arr:
        print("{}".format(i[key1]))
    return ""
#####################
iterate_dictionary2('last_name', students)
'''
#####################

# 4
# Itera a través de un diccionario con valores de listas
##
'''
Crea una función printInfo(some_dict) que, dado un diccionario cuyos valores son todas listas, 
imprima el nombre de cada clave junto con el tamaño de su lista, 
y luego imprima los valores asociados dentro de la lista de cada clave. 
Por ejemplo:
'''

## SOLUTION 4 ##
''' dojo = {
    'LOCATIONS': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'INSTRUCTORS': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
#####################
def printInfo(arr):
    print((len(arr['LOCATIONS'])), "---> LOCATIONS")
    print((arr['LOCATIONS']))
    print((len(arr['INSTRUCTORS'])), "---> INSTRUCTORS")
    print((arr['INSTRUCTORS']))
    return ""
print(printInfo(dojo))
'''
#####################
'''
# output:
7 ---> LOCATIONS
San Jose
Seattle
Dallas
Chicago
Tulsa
DC
Burbank
    
8 ---> INSTRUCTORS
Michael
Amy
Eduardo
Josh
Graham
Patrick
Minh
Devon
'''
