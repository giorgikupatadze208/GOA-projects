#1
sum1=0
for i in range(1000):
   if i not in range(500, 600):
     sum1 +=i


print(sum1)


#2
i=1
sum1=0

while i < 10:
    sum1=sum1 * 1
    i=i + 1


print(sum1)


#3
number = int(input("enter your mark: "))

if 90 <=number<=100:
   print("your grade is A.")
elif 80 <= number <= 89:
   print("your grade is B")

elif 70 <=number <79:
    print("your grade is C.")

elif 60 <= number <=69:
    print("yout grade is D.")

else:
   print("your grade is F.")


