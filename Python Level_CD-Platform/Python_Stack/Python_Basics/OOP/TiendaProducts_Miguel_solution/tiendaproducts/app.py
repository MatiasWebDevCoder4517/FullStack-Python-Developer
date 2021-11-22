from store import Store
from product import Product

store1 = Store("AllNutrition")
product1 = Product("CombatProtein", 30000, "Supplements")
product2 = Product("Multivitamin", 30000, "Vitamins")
product3 = Product("T-Shirt Gym", 30000, "Gym")
product4 = Product("Protein Scoop", 30000, "Accesories")

store1.add_product(product1).add_product(product2)
print(store1.get_store_data())
