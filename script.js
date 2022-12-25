// Assignment code here
var alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z'];
var alphabetLower = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var allChars = [alphabetUpper, alphabetLower, numerals, specialChars];

function generatePassword() {

    var myPassword = "";

    var length = window.prompt("Enter your password length (must be between 8 and 128 character):");
    if (length < 8 || length > 128) {
        window.alert("Password must be between 8 and 128 characters. Try again.")
        generatePassword();
    }

    var includeUpper = window.confirm("Do you want to include uppercase letters in your password?");
    var includeLower = window.confirm("Do you want to include lowercase letters in your password?");
    var includeNumerals = window.confirm("Do you want to include numerals in your password?");
    var includeSpecials = window.confirm("Do you want to include special characters in your password?");

    if (!includeUpper && !includeLower && !includeNumerals && !includeSpecials) {
        window.alert("You must choose at least one character type.")
        generatePassword();
    }

    if (!includeUpper) {
        allChars.splice(allChars.indexOf(alphabetUpper), 1);
    }
    if (!includeLower) {
        allChars.splice(allChars.indexOf(alphabetLower), 1);
    }
    if (!includeNumerals) {
        allChars.splice(allChars.indexOf(numerals), 1);
    }
    if (!includeSpecials) {
        allChars.splice(allChars.indexOf(specialChars), 1);
    }
    var count = 0;

    for (var i = 0; i < length; i++) {
        var index1 = randomNum(allChars.length);
        // var lengthOfNestedArr = allChars[index1].length;
        var index2 = randomNum(allChars[index1].length);  //Error with .length here
        myPassword = myPassword + allChars[index1][index2];

        if (i === (length - 1)) {
            count++;

            var countUpper = 0;
            var countLower = 0;
            var countSpecials = 0;
            var countNumerals = 0;

            for (var j = 0; j < length; j++) {

                for (var t = 0; t < alphabetUpper.length; t++) {
                    if (myPassword[j] === alphabetUpper[t]) {
                        countUpper++;
                    }
                    if (myPassword[j] === alphabetLower[t]) {
                        countLower++;
                    }
                }

                for (var t = 0; t < numerals.length; t++) {
                    if (myPassword[j] === numerals[t]) {
                        countNumerals++;
                    }
                }

                for (var t = 0; t < specialChars.length; t++) {
                    if (myPassword[j] === specialChars[t]) {
                        countSpecials++;
                    }
                }

            }
            
            console.log(countUpper);
            console.log(countLower);
            console.log(countNumerals);
            console.log(countSpecials);

            if (includeUpper && (countUpper === 0)) {
                i = -1;
                myPassword = "";
               countUpper = 0;
                countLower = 0;
                countNumerals = 0;
                countSpecials = 0;
            }
            if (includeLower && (countLower === 0)) {
                i = -1;
                myPassword = "";
                countUpper = 0;
                countLower = 0;
                countNumerals = 0;
                countSpecials = 0;
            }
            if (includeNumerals && (countNumerals === 0)) {
               i = -1;
                myPassword = "";
                countUpper = 0;
                countLower = 0;
                countNumerals = 0;
                countSpecials = 0;
            }
            if (includeSpecials && (countSpecials === 0)) {
                i = -1;
                myPassword = "";
                countUpper = 0;
                countLower = 0;
                countNumerals = 0;
                countSpecials = 0;
            }
            if (count > 50) {
                break;
            }
        }

    }

    function randomNum(max) {
        return Math.floor(Math.random() * max);
    }

    console.log(myPassword);

    return myPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);