## Escribir una clase en python que convierta un número entero a número romano ##

## SOLUTION ##
class Numero:
    
    def __init__(self, normal):
        if normal < 1 or normal > 4000:
            raise ValueError(
                "No se soportan números menores de 1 o mayores de 4000")
        self.normal = normal
        self.romano = self.convert_to_roman()

    def convert_to_roman(self):
        num = [1, 4, 5, 9, 10, 40, 50, 90,
               100, 400, 500, 900, 1000]
        sym = ["I", "IV", "V", "IX", "X", "XL",
               "L", "XC", "C", "CD", "D", "CM", "M"]
        romano = []
        i = 12
        valor = self.normal
        while valor:
            div = valor // num[i]
            valor %= num[i]
            while div:
                romano.append(sym[i])
                div -= 1
            i -= 1

        return "".join(romano)

minumero = Numero(2000)
print(minumero.normal)
print(minumero.romano)
