## Create a Vehicle class with max_speed and mileage instance attributes ##

class Vehicle:
    def __init__(self, max_speed, mileage, ve_type):
        self.max_speed = max_speed
        self.mileage = mileage
        self.ve_type = ve_type

#----------------------------------------------------------#
car = Vehicle(300, 4000, "convertible")
print(
    "Max Speed: {}KM, Mileage: {}KM, Vehicle Type: {} type".format(car.max_speed, car.mileage, car.ve_type))
