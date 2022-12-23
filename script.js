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

    for (var i = 0; i < length; i++) {

        if (includeUpper && includeLower && includeNumerals && includeSpecials) {
            var index1 = randomNum(4);
            var index2 = randomNum(allChars[index1].length);
            myPassword = myPassword + allChars[index1][index2];
            
            if (i === (length - 1)) {

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
                
                if ((countUpper === 0) || (countLower === 0) || (countNumerals === 0) || (countSpecials === 0)) {
                    i = -1;
                    myPassword = "";
                    countUpper = 0;
                    countLower = 0;
                    countNumerals = 0;
                    countSpecials = 0;
                }

            }

        }

    }

    function randomNum(max) {
        return Math.floor(Math.random() * max);
    }

    console.log(myPassword);

    return myPassword;

}

console.log(allChars[1].length);

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