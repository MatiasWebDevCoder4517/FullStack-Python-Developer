## Create a child class Bus that will inherit all of the variables and methods of the Vehicle class ##

""" 
from exercise2 import Vehicle

class Bus(Vehicle):
    def capacity(self, max_capacity):
        self.max_capacity = max_capacity
        if (max_capacity == 0):
            return("The bus is empty!")
        else:
            return("The bus has people in it!")


#----------------------------------#
## bus = Vehicle("Bus", 130, 14000, "Cargo")
bus = Bus("Bus", 130, 14000, "Cargo")
print("Vehicle Name: {}, Max Speed: {}KM, Mileage: {}KM, Type: {} type".format(
    bus.name, bus.max_speed, bus.mileage, bus.type))
print(bus.capacity(30))

"""