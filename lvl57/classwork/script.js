function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var agree = document.getElementById('agree').checked;

    if (!agree) {
        alert('გთხოვთ, დაეთანხმოთ საიტის წესებს');
        return false;
    }

    if (!name || !email || !password || !gender) {
        alert('gtxovt yvelaferi sheavsot');
        return false;
    }

    console.log("სახელი: " + name);
    console.log("ემაილი: " + email);
    console.log("პაროლი: " + password);
    console.log("გენდერი: " + gender.value);

    alert('tkven swored gaiared registracia madlobt rom ewviet chems saits');
    return false;
}
