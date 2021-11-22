## Escribir una clase en python que convierta un número romano en un número entero ##


## SOLUCION STACKOVERFLOW ##
class Romano:
    def __init__(self, roman):
        if(type(roman) != str):
            ## VAR IS NOT STRING ##
            raise ValueError('El numero romano ingresado no es valido!')
        self.roman = roman
        self.normal = self.convert_to_normal()

    def convert_to_normal(self):
        romanos = {'I': 1, 'V': 5, 'X': 10,
                   'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        i = 12
        valor = self.roman
        entero = romanos[valor[0]]
        for i in range(1, len(valor)):
            if romanos[valor[i - 1]] < romanos[valor[i]]:
                entero += (romanos[valor[i]] - 2) * romanos[valor[i - 1]]
            else:
                entero += romanos[valor[i]]
        return entero


print("Traductor de romano a entero: -> 0 <- Para terminar. ")
while True:
    str__ = input().upper()  # Para evitar que se ingrese letras en minuscula.
    if str__[0] == '0':
        break
    print(str__," ==> ",str(Romano(str__).normal))

## SOLUTION MINE (NOT CORRECTLY) ##

""" 
class Romano:
    def __init__(self, roman):
        if(type(roman) != str):
            ## VAR IS NOT STRING ##
            raise ValueError('El numero romano ingresado no es valido!')
        elif (roman != roman.upper()):
            raise ValueError("Ingrese numero romano en MAYUSCULAS!")
        self.roman = roman
        self.normal = self.convert_to_normal()

    def convert_to_normal(self):
        romanos = {'I': 1, 'V': 5, 'X': 10,
                   'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        entero = 0
        i = 12
        valor = self.roman
        for i in range(len(valor)):
            if romanos[valor[i]] > romanos[valor[i - 1]]:
                entero += romanos[valor[i]] - 2 * romanos[valor[i - 1]]
            else:
                entero += romanos[valor[i]]
        return entero
#-------------------------------------------------------------------------------------#
romano1 = Romano('XI')   # 11   PERO ARROJA 9
print("ROMANO:", romano1.roman)
print("TRANSFORMACION A NORMAL:", romano1.normal)

"""
