document.getElementById("submit-btn").addEventListener("click", function() {
    var registrationInput = document.getElementById("registration-input").value;

    if (registrationInput === "") {
        document.getElementById("warning-text").style.color = "red";
        document.getElementById("warning-text").innerText = "გთხოვთ, შეავსოთ ველი!";
    } else {
        document.getElementById("warning-text").style.color = "green";
        document.getElementById("warning-text").innerText = "რეგისტრაცია წარმატებით განხორციელდა!";
    }
});
