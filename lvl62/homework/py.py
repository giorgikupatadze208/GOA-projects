class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} is eating.")

class Prey(Animal):
    def __init__(self, name):
        super().__init__(name)

    def hide(self):
        print(f"{self.name} is hiding to avoid predators.")
class Predator(Animal):
    def __init__(self, name):
        super().__init__(name)

    def hunt(self):
        print(f"{self.name} is hunting for prey.")

class Rabbit(Prey):
    def __init__(self, name):
        super().__init__(name)

    def hop(self):
        print(f"{self.name} is hopping around.")

class Hawk(Predator):
    def __init__(self, name):
        super().__init__(name)

    def fly(self):
        print(f"{self.name} is flying in the sky.")
rabbit = Rabbit("Bunny")
hawk = Hawk("Hunter")

rabbit.eat()
rabbit.hide()
rabbit.hop()
hawk.eat()
hawk.hunt()
hawk.fly()
