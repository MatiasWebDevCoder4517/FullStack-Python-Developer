
class User:
    # aqui está lo que tenemos hasta ahora
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    # agrega el método deposit
    def make_deposit(self, amount):  # toma un argumento que es el monto del depósito
        # la cuenta del usuario específico aumenta por la cantidad del valor recibido
        self.account_balance += amount

    # agrega el metodo make_withdrawal
    # haz que este método disminuya el saldo del usuario en la cantidad especificada.
    def make_withdrawal(self, amount):
        self.account_balance -= amount

    # agrega el metodo display_user_balance
    # haz que este método imprima el nombre del usuario y el saldo de la cuenta en el terminal
    def display_user_balance(self):
        print("Name: {}, Balance: {}$".format(self.name, self.account_balance))

    # agrega el metodo transfer_money(self, other_user, amount)
    # haz que este método disminuya el saldo del usuario en la cantidad y agrega esa cantidad al saldo de otro other_user
    def transfer_money(self):
        guido.make_withdrawal(50)
        elon.make_deposit(50)
        print("Guido's Balance: {}, Elon's Balance: {}".format(
            guido.account_balance, elon.account_balance))


#-------------------------------------------------------------------------------------#
guido = User("Guido van Rossum", "guido@python.com")
print("")
guido.make_deposit(150)
guido.make_deposit(150)
guido.make_deposit(150)
guido.make_withdrawal(50)
print("Executing method display_user_balance!:")
guido.display_user_balance()
print("")
elon = User("Elon Musk", "elonmusk234@python.com")
print("Elon Musk balance changes:")
elon.make_deposit(30)
elon.make_deposit(30)
elon.make_withdrawal(10)
elon.make_withdrawal(10)
elon.display_user_balance()
print("")
gates = User("Bill Gates", "billgates234@python.com")
print("Bill Gates balance changes:")
gates.make_deposit(10000000)
gates.make_withdrawal(5000)
gates.make_withdrawal(5000)
gates.make_withdrawal(5000)
gates.display_user_balance()
print("")
print("Executing method transfer_money:")
guido.transfer_money()
print("")
