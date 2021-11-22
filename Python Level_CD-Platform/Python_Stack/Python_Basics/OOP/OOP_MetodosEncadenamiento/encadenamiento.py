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
        return self

    # agrega el metodo make_withdrawal
    # haz que este método disminuya el saldo del usuario en la cantidad especificada.
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    # agrega el metodo display_user_balance
    # haz que este método imprima el nombre del usuario y el saldo de la cuenta en el terminal
    def display_user_balance(self):
        print("Name: {}, Balance: {}$".format(self.name, self.account_balance))
        return self

    # agrega el metodo transfer_money(self, other_user, amount)
    # haz que este método disminuya el saldo del usuario en la cantidad y agrega esa cantidad al saldo de otro other_user
    def transfer_money(self):
        guido.make_withdrawal(50)
        elon.make_deposit(50)
        print("Guido's Balance: {}, Elon's Balance: {}".format(
            guido.account_balance, elon.account_balance))
        return self


#-------------------------------------------------------------------------------------#
guido = User("Guido van Rossum", "guido@python.com")
elon = User("Elon Musk", "elonmusk234@python.com")
elon.make_deposit(1000).make_withdrawal(
    200).make_deposit(400).display_user_balance()
