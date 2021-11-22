class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result = 0
        self.result += num
        for x in nums:
            self.result += x
        return self

    def subtract(self, num, *nums):
        self.result = 0
        self.result -= num
        for x in nums:
            self.result -= x
        return self


#------------------------------------#
md = MathDojo()
"""
x = md.add(2).add(2, 5, 1).subtract(3, 2).result
print(x)  # debe imprimir 5 
"""
#------------------------------------#
### ADDING NUMBERS ###
suma1 = md.add(2, 4, 6).result  # should give 12
print(suma1)
suma2 = md.add(2, 5, 6).result  # should give 13
print(suma2)
suma3 = md.add(2, 6, 6).result  # should give 14
print(suma3)
print("-----------------------------------------")
### SUBSTRACTING NUMBERS ###
resta1 = md.subtract(2, 4, 6).result       # should give -12
print(resta1)
resta2 = md.subtract(2, 5, 6).result       # should give -13
print(resta2)
resta3 = md.subtract(2, 6, 6).result       # should give -14
print(resta3)
print("-----------------------------------------")
### ENCHAINMENT NUMBERS ###
encadenamiento1 = md.add(2, 4, 6).subtract(2, 5, 6).result
print(encadenamiento1)
print("-----------------------------------------")

## DESVIACION ESTANDAR ##
