def respond_to_input(user_input):
    responses = {
        "გამარჯობა": "გამარჯობა! როგორ ხარ?",
        "ბალანსი": "თქვენი ბალანსია 1500 ლარი.",
        "გადარიცხვა": "გთხოვთ, მიუთითოთ გადარიცხვის რაოდენობა და ანგარიში.",
        "დახმარება": "თქვენ შეგიძლიათ გამოიყენოთ შემდეგი ფუნქციები: ბალანსი, გადარიცხვა, გამარჯობა."
    }
    return responses.get(user_input, "უკაცრავად, ეს ბრძანება ვერ მოიძებნა. გთხოვთ, სცადოთ სხვა.")

while True:
    user_input = input("შეიყვანეთ ბრძანება (ან 'გასვლა' პროგრამის დასასრულებლად): ")
    if user_input.lower() == "გასვლა":
        print("პროგრამა დასრულდა. ნახვამდის!")
        break
    response = respond_to_input(user_input)
    print(response)
