
"ra aris keyword?""keyword gamoiyeneba sakmaod xshirad programirebashi da warmoadgens mimdinare klasis obieqts"
"romlis metodic ekutvnis. da pytonshic aris self kkodi da analogiuria isini.


class Computer:
    def __init__(self, brand, model, processor, ram, storage):
        self.brand = brand
        self.model = model
        self.processor = processor
        self.ram = ram
        self.storage = storage

    def display_specs(self):
        print(f"Computer Specs:\nBrand: {self.brand}\nModel: {self.model}\nProcessor: {self.processor}\nRAM: {self.ram}GB\nStorage: {self.storage}GB")

class Keyboard:
    def __init__(self, brand, model, is_mechanical, connection_type):
        self.brand = brand
        self.model = model
        self.is_mechanical = is_mechanical
        self.connection_type = connection_type

    def display_info(self):
        print(f"Keyboard Info:\nBrand: {self.brand}\nModel: {self.model}\nMechanical: {'Yes' if self.is_mechanical else 'No'}\nConnection: {self.connection_type}")
