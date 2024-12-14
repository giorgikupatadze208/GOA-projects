#1
class car
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color

    def start_engine(self):
        return f"The {self.color} {self.brand} {self.model} ({self.year}) engine has started."

    def stop_engine(self):
        return f"The {self.color} {self.brand} {self.model} ({self.year}) engine has stopped."

car1 = Car("Toyota", "Corolla", 2020, "Red")
car2 = Car("Honda", "Civic", 2019, "Blue")
car3 = Car("Ford", "Mustang", 2021, "Black")

print("Car 1 Details:")
print(f"Brand: {car1.brand}")
print(f"Model: {car1.model}")
print(f"Year: {car1.year}")
print(f"Color: {car1.color}")
print(car1.start_engine())
print(car1.stop_engine())

print("\nCar 2 Details:")
print(f"Brand: {car2.brand}")
print(f"Model: {car2.model}")
print(f"Year: {car2.year}")
print(f"Color: {car2.color}")
print(car2.start_engine())
print(car2.stop_engine())

print("\nCar 3 Details:")
print(f"Brand: {car3.brand}")
print(f"Model: {car3.model}")
print(f"Year: {car3.year}")
print(f"Color: {car3.color}")
print(car3.start_engine())
print(car3.stop_engine())



#davaleba2

class Car:
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color

    def start_engine(self):
        return f"The {self.color} {self.brand} {self.model} ({self.year}) engine has started."

    def stop_engine(self):
        return f"The {self.color} {self.brand} {self.model} ({self.year}) engine has stopped."

car1 = Car("Toyota", "Corolla", 2020, "Red")
car2 = Car("Honda", "Civic", 2019, "Blue")
car3 = Car("Ford", "Mustang", 2021, "Black")

print("Car 1 Details:")
print(f"Brand: {car1.brand}")
print(f"Model: {car1.model}")
print(f"Year: {car1.year}")
print(f"Color: {car1.color}")
print(car1.start_engine())
print(car1.stop_engine())

print("\nCar 2 Details:")
print(f"Brand: {car2.brand}")
print(f"Model: {car2.model}")
print(f"Year: {car2.year}")
print(f"Color: {car2.color}")
print(car2.start_engine())
print(car2.stop_engine())

print("\nCar 3 Details:")
print(f"Brand: {car3.brand}")
print(f"Model: {car3.model}")
print(f"Year: {car3.year}")
print(f"Color: {car3.color}")
print(car3.start_engine())
print(car3.stop_engine())

class Person:
    count = 0  

    def __init__(self, name, age, city):
        self.name = name
        self.age = age
        self.city = city
        Person.count += 1 

    def introduce(self):
        return f"Hi, I'm {self.name}, {self.age} years old from {self.city}."

    def is_adult(self):
        return self.age >= 18

person1 = Person("Alice", 25, "New York")
person2 = Person("Bob", 17, "Los Angeles")
person3 = Person("Charlie", 30, "Chicago")

print("\nPerson 1 Details:")
print(f"Name: {person1.name}")
print(f"Age: {person1.age}")
print(f"City: {person1.city}")
print(person1.introduce())
print(f"Is adult: {person1.is_adult()}")

print("\nPerson 2 Details:")
print(f"Name: {person2.name}")
print(f"Age: {person2.age}")
print(f"City: {person2.city}")
print(person2.introduce())
print(f"Is adult: {person2.is_adult()}")
print(f"\nTotal people created: {Person.count}")



#3

(dunder method არის პაითონის სპეციალური მეთოდი რომელიც ორმაგი ასევთქვათ ქვედა აზით იწყება და მთავრდება
მაგალითად ააა _str_ და ა.შ)


#4
(Instance variables ინსტანციური ცვლადებია და ის ყველაფრისთვის იდეალურია მაგალითადდ)
class Person:
    def __init__(self, name, age):
        self.name = name  # instance variable
        self.age = age    # instance variable

#5

(Class variables არიან ცვლადები რომელიც ერთნაირებია ყველა ობიექტისათვისა და ეს ცვლადები ყველასთან
 საერთო იქნება მაგალითად თუ 1 კლაში გვაქვს variable რომელიც ყველასათვის იგივე იქნება ეს იქნება
 class variable)

#6

(blue print არის ასევთქვათ იმ რაღაცის გეგმა როგორ ავაწყოთ ეს შეიძლება იყოს სახლი, მანქანა ან მსგავსი
 რამ და მას აქვს თავისი მეთოდები ცვლადები და ეგრე)