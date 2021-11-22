## Create a Bus class that inherits from the Vehicle class. Give the capacity argument of Bus.seating_capacity() a default value of 50. ##

from exercise2 import Vehicle

'''
class Vehicle:
    def __init__(self, name, max_speed, mileage, type):
        self.name = name
        self.max_speed = max_speed
        self.mileage = mileage
        self.type = type
'''


class Bus(Vehicle):
    def capacity(self, max_capacity):
        self.max_capacity = max_capacity
        if (max_capacity == 0):
            return("The bus is empty!")
        else:
            return("The bus has people in it!")

    def driver(self, first_name, last_name, age, y_work):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.y_work = y_work
        if(age >= 30):
            return("Grand-Senior Driver")
        elif (age >= 20 and age < 30):
            return("Senior Driver")
        elif (age >= 10 and age < 20):
            return("Intermediate Driver")
        elif (age >= 5 and age < 10):
            return("Junior Driver")
        else:
            return("No Experienced Driver!")

#------------------------------------------------------------------#
## ACTIONS ##
bus = Bus("Bus", 130, 14000, "Cargo")
print("Vehicle Name: {}, Max Speed: {}KM, Mileage: {}KM, Type: {} type".format(
    bus.name, bus.max_speed, bus.mileage, bus.type))
## print(bus.capacity(30), "\n")
print(bus.driver("Daniel", "Willings", 54, 32))
