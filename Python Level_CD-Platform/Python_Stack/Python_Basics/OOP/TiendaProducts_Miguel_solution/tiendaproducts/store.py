class Store:
    def __init__(self, name, list_products=[]):
        self.name = name
        self.list_products = list_products

    def get_store_name(self):
        return self.name

    def get_list_products(self):
        return self.list_products

    def get_store_data(self):
        return "Name: {}, ListOfProducts: {}".format(self.name, self.list_products)

    def add_product(self, new_product):
        self.list_products.append(new_product)
        return self

    def sell_product(self, id):
        print("Product is Sold, Data:")
        self.list_products[id].print_info()
        del self.list_products[id]
        
        return self

    def inflation(self, percent_increase):
        for product in self.products:
            product.update_price(percent_increase, True)
        return self

    def set_clearance(self, percent_discount):
        for product in self.products:
            product.update_price(percent_discount, False)
        return self
#---------------------------------------------------------------------#
