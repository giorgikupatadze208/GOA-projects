#1
def print_anything(*args):
    for item in args:
        print(item)

print_anything(1, 2, 3, 4, 5)

#2
def print_details(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_details(name="giorgi", age=12, city="georgia")

#3
def greet_decorator(func):
    def wrapper():
        print("Hello, welcome!")
        func()
        print("Goodbye!")
    return wrapper

def say_name():
    print("My name is Giorgi Kupatadze.")

say_name()

#4
class Animal:
    def sound(self):
        print("Animal makes a sound")

class Dog(Animal):
    def bark(self):
        print("Dog barks")

class Puppy(Dog):
    def play(self):
        print("Puppy plays")

puppy = Puppy()
puppy.sound()  
puppy.bark()  
puppy.play()  

#5
class Person:
    def __init__(self, name, age):
        self.name = name
        self._age = age  

    def display_info(self):
        print(f"Name: {self.name}")
        print(f"Age: {self._age}")

person = Person("Giorgi Kupatadze", 25)
person.display_info()

print(person._age) 

#6
class Person:
    def __init__(self, name, age):
        self.name = name
        self.__age = age 

    def display_info(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.__age}")

person = Person("Giorgi Kupatadze", 25)
person.display_info()
print(person._Person__age)

