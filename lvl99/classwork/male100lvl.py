#1
def manual_isalnum(text):
    for char in text:
        if not (
            ('a' <= char <= 'z') or 
            ('A' <= char <= 'Z') or 
            ('0' <= char <= '9')
        ):
            return False
    return True
print(manual_isalnum("Hello123"))  #true
print(manual_isalnum("Hello 123")) #false
print(manual_isalnum("Python3"))   #true
print(manual_isalnum("@@@"))       #false

#2
def manual_startswith(text, prefix):
    if len(prefix) > len(text):
        return False

    for i in range(len(prefix)):
        if text[i] != prefix[i]:
            return False

    return True
print(manual_startswith("hello world", "hello"))  #true
print(manual_startswith("hello world", "world"))  #false
print(manual_startswith("python", "py"))          #true
print(manual_startswith("python", "pyt"))         #true
print(manual_startswith("python", "java"))        #false

#3
def manual_endswith(text, suffix):
    if len(suffix) > len(text):
        return False

    start_index = len(text) - len(suffix)

    for i in range(len(suffix)):
        if text[start_index + i] != suffix[i]:
            return False

    return True
print(manual_endswith("hello world", "world"))  # true
print(manual_endswith("hello world", "hello"))  # false
print(manual_endswith("python", "thon"))        # true
print(manual_endswith("python", "py"))          # false

#4
def manual_round(number):
    integer_part = int(number) 
    decimal_part = number - integer_part 

    if decimal_part >= 0.5:
        return integer_part + 1
    else:
        return integer_part
print(manual_round(3.2))  #3
print(manual_round(5.7))  #6
print(manual_round(8.5))  #9
print(manual_round(2.49)) #2

