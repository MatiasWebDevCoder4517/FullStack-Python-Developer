

class Products:
    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category

    def print_info(self):
        return "Name: {}, Price: {}, Category: {}".format(self.name, self.price, self.category)

    def get_product_name(self):
        return self.name

    def get_price(self):
        return self.price

    def get_category(self):
        return self.category

    def update_price(self, percent_change, is_increased):
        if is_increased:
            self.price += self.price * percent_change/100
        elif not is_increased:
            self.price -= self.price * percent_change/100
        return self
#---------------------------------------------------------------------#
