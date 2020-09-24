// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password and covert from string to number for validation purpose
function generatePassword() {
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

  while (!validLen) {
    pwLength = parseInt(prompt("Choose a password length of at least 8 characters and no more than 128 characters"));
    alert("pwLength: " + pwLength);
    if (pwLength >= 8 && pwLength <= 128 && (pwLength != null)) {
      validLen = true;
    }
    alert("validateLen: " + validLen);
  }

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
    alert("Crietria: " + validCriteria);
  }

  if (promptCharLowCase) {
    vld_pwChars += vld_lowcaseChar;
  }

  alert('1. concatenated password so far: ' + vld_pwChars);

  if (promptCharUpCase) {
    vld_pwChars += vld_uppercaseChar;
  }

  alert('2. concatenated password so far: ' + vld_pwChars);

  if (promptNum) {
    vld_pwChars += vld_numbers;
  }

  alert('3. concatenated password so far: ' + vld_pwChars);

  if (promptSpecChar) {
    vld_pwChars += vld_specChars;
  }

  alert('final selected valid password chars: ' + vld_pwChars);
  alert('pw length user given: ' + pwLength);
  alert('valid pw character list length: ' + vld_pwChars.length);

  for (var i = 0; i < pwLength; i++) {
    var rndmChar = Math.floor(Math.random() * vld_pwChars.length);
    resultPassword += vld_pwChars.charAt(rndmChar);
  }

  alert("resultant password: " + resultPassword);
  console.log(resultPassword);

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

