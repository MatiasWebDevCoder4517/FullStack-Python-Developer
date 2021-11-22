class Animals:
    def __init__(self, kind, name):
        self.kind = kind
        self.name = name
        self.happy = True

    def display_info(self):
        print(self.kind, self.name, "Happy?:", self.happy)
        return self


class Lion(Animals):
    def __init__(self, kind, name):
        super().__init__(kind, name)
        self.roar = "RAWR1"
        self.happy = True


class Tiger(Animals):
    def __init__(self, kind, name):
        super().__init__(kind, name)
        self.roar = "RAWR2"
        self.happy = False


class Bear(Animals):
    def __init__(self, kind, name):
        super().__init__(kind, name)
        self.roar = "RAWR3"
        self.happy = False


class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_lion(self, name):
        self.animals.append(Lion("Lion:", name))
        return self

    def add_tiger(self, name):
        self.animals.append(Tiger("Tiger:", name))
        return self

    def add_bear(self, name):
        self.animals.append(Bear("Bear:", name))
        return self

    def print_all_info(self):
        print(self.name, "\n")
        for animal in self.animals:
            animal.display_info()


ygg = Zoo("Yggdrassil")
print("Zoo Name: ")
ygg.add_lion("Zimba,").add_tiger(
    "SheerKhan,").add_bear("Beowulf,").print_all_info()
