//  Password Generater


var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// lower case upper case and special characters
var specialCharacters = " ~`!@#$%^&*()_-=+[{}]?><|";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";


// Add event listener to the red button
generateBtn.addEventListener("click", writePassword);

//function that generates a random password in the "text area" box
function writePassword() {

    // Prevents the screen from refreshing
    event.preventDefault();
    // Clear previous password from screen
    password.value === "";
    var randomString = "";


    // User choice: password criteria
    var passwordLength = prompt("Choose a password length between 8 characters and 128 characters.");
    var lowercaseLetters = confirm("Would you like to include lowercase letters?");
    var uppercaseLetters = confirm("Would you like to include uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
    

    // function that checks if it's between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    // If user clicks cancel for all... this asks them to choose at least one
    else if (lowercaseLetters === false && uppercaseLetters === false && num === false && specialChar === false) {
        alert("You must chose at least one for a secure password.");
        var lowercaseLetters = confirm("Do you want your password to contain lowercase letters?");
        var uppercaseLetters = confirm("Do you want your password to contain uppercase letters?");
        var num = confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    // Uses selected chriteria to generate the password
    if (lowercaseLetters) {
        optionsVariable += lowerCase;
    }

    if (uppercaseLetters) {
        optionsVariable += upperCase;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }


    // Generates a random password based on the criteria that have been selected
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}