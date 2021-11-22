""" 
How to call another classes from another files:

from OOP_User import User
from OOP_BankAccount import BankAccount

"""
#----------------------------------------------------------------------#
class BankAccounts:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print("Account Balance: {}$, Account Interest: {}%".format(
            self.balance, self.int_rate))
        return self

    def yield_interest(self):
        balance2 = 0
        if(self.balance <= 0):
            return("Insufficient Balance!")
        self.int_rate += 0.05
        balance2 = self.balance * self.int_rate
        self.balance = self.balance - balance2
        print("Interest charge (balance2): {}$".format(balance2))
        return self

#----------------------------------------------------------------------#
class Users:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccounts(
            int_rate=0.02, balance=100000)        # NUEVA LINEA #

    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self

    def make_withdrawal(self, amount):
        self.account.withdraw(amount)
        return self

    def display_user_balance(self):
        print("Name: {}, Balance: {}$".format(self.name, self.account.balance))
        return self

    def transfer_money(self, user, amount):
        self.make_withdrawal(amount)
        user.make_deposit(amount)
        """ print("Name: {}, Balance: {}$".format(self.name, self.account.balance))
        print("Name: {}, Balance: {}$".format(user.name, user.account.balance)) """
        return self

#----------------------------------------------------------------------#
elon = Users("Elon Musk", "elonmusk234@python.com")
gates = Users("Bill Gates", "billgates234@python.com")
elon.transfer_money(gates, 3000)
elon.display_user_balance()
gates.display_user_balance()

## SENSEI BONUS:
# Permite al usuario tener varias cuentas; actualiza los metodos para que el usuario pueda especificar de cual cuenta ellos quieren depositar o retirar ##


