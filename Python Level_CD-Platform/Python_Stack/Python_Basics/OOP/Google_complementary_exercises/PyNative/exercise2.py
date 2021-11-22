## Create a Vehicle class without any variables and methods ##
""" class Vehicle: 
        pass
 
 """


class Vehicle:
    def __init__(self, name, max_speed, mileage, type):
        self.name = name
        self.max_speed = max_speed
        self.mileage = mileage
        self.type = type


#----------------------------------#
'''
truck = Vehicle("Monster Truck", 150, 20000, "Cargo")
print("Vehicle Name: {}, Max Speed: {}KM, Mileage: {}KM, Type: {} type".format(
    truck.name, truck.max_speed, truck.mileage, truck.type))
'''

