document.getElementById("signupForm").addEventListener("submit", function(event) {
    var firstName = document.querySelector(".firstName").value;
    var lastName = document.querySelector(".lastName").value;
    var email = document.querySelector(".email").value;
    var password = document.querySelector(".password").value;

    var firstNameError = document.getElementById("firstName");
    var lastNameError = document.getElementById("lastName");
    var emailError = document.getElementById("email");
    var passwordError = document.getElementById("password");
    var namesvg = document.querySelector('.namesvg');
    var lastnamesvg= document.querySelector('.lastnamesvg');
    var emailsvg= document.querySelector('.emailsvg');
    var passwordsvg= document.querySelector('.passwordsvg');

    var firstNames = document.querySelector(".firstName");
    var lastNames = document.querySelector(".lastName");
    var emails = document.querySelector(".email");
    var passwords = document.querySelector(".password");

    // Reset previous error messages
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Check if fields are empty
    if (firstName.trim() === "") {
        firstNameError.textContent = "First Name is required";
        event.preventDefault();
        displayit(firstNames);
        namesvg.style.display = 'inline-block'; // Show SVG if input is empty
    } else {
        namesvg.style.display = 'none'; // Hide SVG if input is not empty
    }
    if (lastName.trim() === "") {
        lastNameError.textContent = "Last Name is required";
        event.preventDefault();
        displayit(lastNames);
        lastnamesvg.style.display = 'inline-block'; // Show SVG if input is empty
    } else {
        lastnamesvg.style.display = 'none'; // Hide SVG if input is not empty
    }
    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        event.preventDefault();
        displayit(emails);
        emailsvg.style.display = 'inline-block'; // Show SVG if input is empty
    } else {
        emailsvg.style.display = 'none'; // Hide SVG if input is not empty
    }
    if (password.trim() === "") {
        passwordError.textContent = "Password is required";
        event.preventDefault();
        displayit(passwords);
        passwordsvg.style.display = 'inline-block'; // Show SVG if input is empty
    } else {
        passwordsvg.style.display = 'none'; // Hide SVG if input is not empty
    }
});
function displayit(selector){
    selector.value='';
    selector.setAttribute("placeholder", "");
    var errorIcon = document.createElement("img");
    errorIcon.setAttribute("src", "../images/icon-error.svg");
    errorIcon.setAttribute("alt", "Error Icon");
    errorIcon.classList.add("error-icon");
    
    // Append the error icon to the parent element of the input field

}
function isValidEmail(email) {
    // Very basic email validation, you might want to use a more robust solution
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
