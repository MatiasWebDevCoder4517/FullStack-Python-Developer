""" 
1. 
Crear una Clase Producto con los siguientes atributos:
 - codigo
 - nombre
 - precio 
Creale, su constructor, getter y setter y una funcion llamada calcular_total, donde le pasaremos unas unidades y nos debe calcular el precio final.
"""

## SOLUTION ##
class Producto:
    def __init__(self, cod, name, price):
        if (cod <= 0 or price <= 0):
            raise ValueError('El codigo o precio ingresado no es valido!')
        self.__cod = cod
        self.__name = name
        self.__price = price

    ## GETTERS AND SETTERS ##
    @property       # getter of cod
    def cod(self):
        return self.__cod
    @property       # getter of name
    def name(self):
        return self.__name
    @property       # getter of price
    def price(self):
        return self.__price
    @cod.setter     # setter of cod
    def cod(self, valor):
        self.__cod = valor
    @name.setter    # setter of name
    def name(self, valor):
        self.__name = valor
    @price.setter   # setter of price
    def price(self, valor):
        self.__price = valor
        
    ## FUNCTIONS ##
    def __str__(self):
        return ("Codigo Producto: {}, Nombre Producto: {}, Precio Producto: {}$".format(self.__cod, self.__name, self.__price))
    
    def calcular_total(self, unit_prod):
        if (unit_prod <= 0):
            raise ValueError('Los valores ingresados no son validos!')
        total = 0
        total = self.__price * unit_prod
        return total
    
    '''ESTO CONCEPTUALMENTE ESTA MAL '''
    """ 
    def total_compra(num1, num2, num3):
        if (num1 <= 0 or num2 <= 0 or num3 <= 0):
            raise ValueError('Los valores ingresados no son validos!')
        compra_total = 0
        compra_total = p1.calcular_total(
            num1) + p2.calcular_total(num2) + p3.calcular_total(num3)
        return "La compra total de los productos es: {}$".format(compra_total) 
    """
#--------------------------------------------------------------------------------------------#
## ACTIONS ##
p1 = Producto(2345, "CombatProtein", 53000)
p2 = Producto(21123, "FightProtein", 50000)
p3 = Producto(2554, "WarriorProtein", 63000)
"""
print(p1) 
print("\n", p2)
print("\n", p3)
print("\n", p3) 
print("\n", p1.calcular_total(2))
print("\n", p2.calcular_total(2))
print("\n", p3.calcular_total(2))

compra1 = Producto.total_compra(5, 5, 5)
print(compra1)
"""