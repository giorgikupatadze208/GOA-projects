#N1
def whatday(num):
    weekdays = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Saturday"
    }
    if num in range (1,8):
        return weekdays[f"{num}"]
    else:
        return"wrong please enter number between 1 and 7"
    
print(whatday(5))

#N2
def distinct(seq):
    listn = []
    for i in seq:
        if i in listn:
            pass
        else:
            listn.append(i)

        return listn
print(distinct([1,2,2,3,3,4,4,5,6,7,7,]))   

#N3
def position(albhabet):
    albhabet1 = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"

    return f"position of albhabet: {albhabet1.find(albhabet)+1}"
print (position("f"))

#N4
def to_alternating_case(string):
    res = ""

    for i in string:
        if i.islower()
        res += i.upper()
    else:
        res += i.lower()
        
    return res
print(to_alternating_case("altERnaTing cAsE"))    

#5