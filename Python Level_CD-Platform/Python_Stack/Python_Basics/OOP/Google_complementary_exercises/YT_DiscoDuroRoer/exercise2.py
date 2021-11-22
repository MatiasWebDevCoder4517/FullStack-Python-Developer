'''
ENUNCIADO: 

2. Añadir una clase pedido que tiene como atributos:
    - lista de productos    (herencia class Producto)
    - lista de cantidades
    
   Añade las siguiente funcionalidad:
    - total_pedido: muestra el precio final del pedido
    - mostrar_productos: muestra los productos del pedido
'''

## SOLUTION MINE ##
from exercise1 import Producto  # IMPORTS NO VAN DE LA MANO CON LA HERENCIA!! ##

class Pedidos:
    def __init__(self, productos=[]):
        self.__productos = productos
    
    # setters and getters
    @property
    def productos(self):
        return self.__productos
    @productos.setter
    def productos(self, productos):
        self.__productos = productos

    # show all products
    def mostrar_productos(self):
        for p, q in self.__productos:
            print(f"{p} ---> (x{q})")

    ## FUNCTIONS ##
    def __str__(self):
        return "Productos: {}".format(self.__productos)

    def calcular_total2(self):
        total = 0
        for p, q in self.__productos:
            total += p.price * q
        return total


#------------------------------------------------------#
## ACTIONS ##
p1 = Producto(2345, "CombatProtein", 50000)
p2 = Producto(21123, "FightProtein", 50000)
p3 = Producto(2554, "WarriorProtein", 60000)
p4 = Producto(1123, "Multivitaminico", 12000)
Pedido1 = Pedidos([[p1, 2], [p2, 2], [p3, 2], [p2, 4], [p4,2]])
Pedido1.mostrar_productos()
print("\nCompra Total Pedido: ", Pedido1.calcular_total2(), "$")
