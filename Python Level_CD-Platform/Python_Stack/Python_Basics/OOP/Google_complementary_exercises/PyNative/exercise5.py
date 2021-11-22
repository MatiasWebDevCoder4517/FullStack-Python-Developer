## Define property that should have the same value for every class instance ##

class Vehicle:
    default_color = "White"
    def __init__(self, name, max_speed, mileage):
        self.name = name
        self.max_speed = max_speed
        self.mileage = mileage
#------------------------------------------------------------------#
class Bus(Vehicle):
    pass
#------------------------------------------------------------------#
class Car(Vehicle):
    pass

#------------------------------------------------------------------#
## ACTIONS ##
bus = Bus("Bus", 130, 14000)
print("Vehicle Name: {}, Max Speed: {}KM, Mileage: {}KM, Color: {}".format(
    bus.name, bus.max_speed, bus.mileage, bus.default_color))
