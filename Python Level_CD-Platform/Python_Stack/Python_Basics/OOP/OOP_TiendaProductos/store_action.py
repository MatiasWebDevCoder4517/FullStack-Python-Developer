
''' #---------------------------------------------------------------------#
# ACTIONS #
from OOP_TiendaProductos import Store
from OOP_TiendaProductos import Products
store1 = Store("AllNutrition")
product1 = Products("CombatProtein", 30000, "Supplements")
product2 = Products("Multivitamin", 30000, "Vitamins")
product3 = Products("T-Shirt Gym", 30000, "Gym")
product4 = Products("Protein Scoop", 30000, "Accesories")

store1.add_product(product1).add_product(product2)
print(store1.get_store_data())
#---------------------------------------------------------------------#
 '''


from store import Store
from products import Products

store1 = Store("AllNutrition")
product1 = Products("CombatProtein", 30000, "Supplements")
product2 = Products("Multivitamin", 30000, "Vitamins")
product3 = Products("T-Shirt Gym", 30000, "Gym")
product4 = Products("Protein Scoop", 30000, "Accesories")

store1.add_product(product1).add_product(product2)
print(store1.get_store_data())
