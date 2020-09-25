// Assignment Code
var generateBtn = document.querySelector("#generate");


// Function to generate the Random Password
function generatePassword() {

  // Define all the variables that are needed for the password generator functionality
  var pwLength = 0;
  var validLen = false;
  var validCriteria = false;
  var promptCharLowCase = false;
  var promptCharUpCase = false;
  var promptNum = false;
  var promptSpecChar = false;
  var vld_lowcaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var vld_uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var vld_numbers = '0123456789';
  var vld_specChars = '~@#$&%-+=_!';
  var vld_pwChars = '';
  var resultPassword = '';

  // Prompt the user for the password criteria they would like to include and capture their response

  while (!validCriteria) {
    promptCharLowCase = confirm("Do you want to include lowercase in the Password?");
    promptCharUpCase = confirm("Do you want to include uppercase in the Password?");
    promptNum = confirm("Do you want to include numbers in the Password?");
    promptSpecChar = confirm("Do you want to include Special Characters (~@#$&%-+=_!) in the Password?");

    if (promptCharLowCase || promptCharUpCase || promptNum || promptSpecChar) {
      validCriteria = true;
    }
    else {
      validCriteria = false;
      alert("You need to choose at least one of the given Criteria\'s to generate password");
    }
  }

  // Prompt the user for the length of the password, until they enter a value between 8 and 128.

  while (!validLen) {
    pwLength = parseInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters"));

    if (pwLength >= 8 && pwLength <= 128) {
      validLen = true;
    }
    else {
      alert(" Please enter a valid length (between 8 & 128)!");
    }
  }

  // Build the valid password string list based on the criteria choices users picked

  if (promptCharLowCase) {
    vld_pwChars += vld_lowcaseChar;
  }

  if (promptCharUpCase) {
    vld_pwChars += vld_uppercaseChar;
  }

  if (promptNum) {
    vld_pwChars += vld_numbers;
  }

  if (promptSpecChar) {
    vld_pwChars += vld_specChars;
  }

  // Randomly generate password (of the particular length) from the valid password string list
  for (var i = 0; i < pwLength; i++) {
    var rndmChar = Math.floor(Math.random() * vld_pwChars.length);
    resultPassword += vld_pwChars[rndmChar];
  }
  return resultPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

