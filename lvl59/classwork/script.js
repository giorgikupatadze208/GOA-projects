document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const gender = document.getElementById('gender');
        const country = document.getElementById('country');
        const terms = document.getElementById('terms');
        const fields = [name, email, password, gender, country];
        fields.forEach(field => field.classList.remove('error'));

    let isValid = true;

    if (!name.value) {
        name.classList.add('error');
        isValid = false;
    }
    if (!email.value) {
        email.classList.add('error');
        isValid = false;
    }
    if (!password.value) {
        password.classList.add('error');
        isValid = false;
    }
    if (!gender.value) {
        gender.classList.add('error');
        isValid = false;
    }
    if (!country.value) {
        country.classList.add('error');
        isValid = false;
    }
    if (!terms.checked) {
        alert('you need agree F');
        isValid = false;
    }
    if (isValid) {
        alert('registraciam warmatebit chaiara');
    }
});
