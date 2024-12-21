class Motorcycle:
    total_motorcycles = 0

    def __init__(self, brand, model, engine_size, color):
        self.brand = brand
        self.model = model
        self.engine_size = engine_size
        self.color = color
        Motorcycle.total_motorcycles += 1

    def display_info(self):
        return (
            f"Brand: {self.brand}, Model: {self.model}, "
            f"Engine Size: {self.engine_size}, Color: {self.color}"
        )

moto1 = Motorcycle("Yamaha", "R6", "600cc", "Blue")
moto2 = Motorcycle("Kawasaki", "Ninja", "1000cc", "Green")

print(moto1.display_info())
print(moto2.display_info())
print(f"Total motorcycles created: {Motorcycle.total_motorcycles}")
