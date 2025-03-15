#1
class Car:
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color
    
    def start_engine(self):
        return f"{self.brand} {self.model} ძრავი ჩაირთო"
    
    def car_info(self):
        return f"მანქანა: {self.brand} {self.model}, წელი: {self.year}, ფერი: {self.color}"
car1 = Car("Toyota", "Corolla", 2020, "თეთრი")
car2 = Car("BMW", "X5", 2022, "შავი")
car3 = Car("Mercedes", "C-Class", 2021, "ლურჯი")
cars = [car1, car2, car3]
for car in cars:
    print(car.car_info())
    print(car.start_engine())
    print("-")

#2
class Car:
    def __init__(self, brand, model, year, color):
        self.brand = brand
        self.model = model
        self.year = year
        self.color = color
    
    def start_engine(self):
        return f"{self.brand} {self.model} ძრავი ჩაირთო"
    
    def car_info(self):
        return f"მანქანა: {self.brand} {self.model}, წელი: {self.year}, ფერი: {self.color}"
car1 = Car("Toyota", "Corolla", 2020, "თეთრი")
car2 = Car("BMW", "X5", 2022, "შავი")
car3 = Car("Mercedes", "C-Class", 2021, "ლურჯი")
cars = [car1, car2, car3]
for car in cars:
    print(car.car_info())
    print(car.start_engine())
    print("-")

class Person:
    def __init__(self, name, age):
        self._name = name 
        self._age = age    
    
    def get_name(self):
        return self._name
    
    def get_age(self):
        return self._age
