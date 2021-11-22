'''

La clase también debe tener los siguientes métodos:

1.deposit(self, cantidad): aumenta el saldo de la cuenta en la cantidad dada

2.withdraw(self, cantidad): disminuye el saldo de la cuenta en la cantidad dada si hay fondos suficientes; si no hay suficiente dinero,
imprima un mensaje "Fondos insuficientes: cobrar una tarifa de $ 5" y deduzca $ 5

3.display_account_info(self) - imprime en la consola: ej. "Saldo: $ 100"

4.yield_interest(self): aumenta el saldo de la cuenta en el saldo actual * la tasa de interés (siempre que el saldo sea positivo)

'''


class BankAccount:
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


#-------------------------------------------------------------------------------------#

# CREATING TWO BANK ACCOUNTS
account1 = BankAccount(0, 2000)
account2 = BankAccount(0.01, 3000)

# OPERATION 1:
account1.deposit(1000).deposit(3000).deposit(1000).withdraw(
    1000).yield_interest().display_account_info()
print("")
# OPERATION 2:
account2.deposit(3000).deposit(5000).withdraw(1000).withdraw(1000).withdraw(
    1000).withdraw(1000).yield_interest().display_account_info()
