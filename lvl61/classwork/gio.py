
#1
age = int(input("შეიყვანეთ თქვენი წლოვანება: "))
if age < 18:
    print("თქვენ არასრულწლოვანი ხართ!.")
elif age == 18:
    print("თქვენ ზუსტად 18 ხაართ!?")
else:
    print("თქვენ სრულწლოვანი ხართ.")


#2

counter = 1

while counter <= 5:
    print(f"ეს არის ციკლის {counter} შესრულება")
    counter += 1

print("ციკლი დასრუხდა!")

#3

for number in range(1, 101):
    print(number)

#4

for number in range(40, 61, 2):
    print(number)


#5

for number in range(50, 24, -1):
    print(number)

#6

#listi
fruits = ["ვაშლი", "ბანანი", "ფორთოხალი", "ატამი", "მსხალი","ბროწეული"]

# For loop
for fruit in fruits:
    print(fruit)
