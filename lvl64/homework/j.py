class Person:
    def __init__(self, name):
        self.name = name

    def greet(self):
        return f"Hello, my name is {self.name}."

person = Person("Giorgi")
print(person.greet())  # Hello, my name is Giorgi.

class Person:
    species = "Human"


    def set_species(cls, species_name):
        cls.species = species_name

 
    def from_fullname(cls, fullname):
        first_name = fullname.split()[0]
        return cls(first_name)

    def __init__(self, name):
        self.name = name

print(Person.species) 
Person.set_species("Homo Sapiens")
print(Person.species)  #

new_person = Person.from_fullname("Giorgi Kupatadze")
print(new_person.name)  # Giorgi


class MathHelper:

    def add(a, b):
        return a + b

    def multiply(a, b):
        return a * b

print(MathHelper.add(5, 3))       # 8
print(MathHelper.multiply(5, 3))  # 15
