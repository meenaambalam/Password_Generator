// Assignment Code
var pwLength;
var validLen = false;
var validCriteria = false;
var promptCharLowCase = false;
var promptCharUpCase = false;
var promptNum = false;
var promptSpecChar = false;
var generateBtn = document.querySelector("#generate");

// Generate Password
function checkPWCriteria() {
  this.promptCharLowCase = confirm("Do you want to include lowercase in the Password?");
  this.promptCharUpCase = confirm("Do you want to include uppercase in the Password?");
  this.promptNum = confirm("Do you want to include numbers in the Password?");
  this.promptSpecChar = confirm("Do you want to include Special Characters (@,#,$,&,-,) in the Password?");

  if (this.promptCharLowCase || this.promptCharUpCase || this.promptNum || this.promptSpecChar) {
    validCriteria = true;
  }
  else {
    validCriteria = false;
    alert ("You need to choose at least one of the given Criteria\'s to generate password");
  }
  return validCriteria;
}

// Function to validate the Password Length to be at least 8 character or no more than 128 characters
function validatePassLen(paramLength) {
  if (paramLength < 3 || paramLength > 128) {
    validLen = false;
  }
  else
  {
    validLen = true;
  }
  return validLen;
}

// Function to prompt for the password length
function getPassLen() {
  return parseInt(prompt ("Choose a password length of at least 8 characters and no more than 128 characters"));
}

// Generate Password and covert from string to number for validation purpose
function generatePassword() {
  var vld_lowcaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var vld_uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var vld_numbers = '0123456789';
  var vld_specChars = '@#$&-';
  var vld_pwChars = '';
  var resultPassword = '';
  
  while (!validLen) {
    //pwLength = getPassLen();
    pwLength = parseInt(prompt ("Choose a password length of at least 8 characters and no more than 128 characters"));
    alert("pwLength: " + pwLength);
    //validLen = validatePassLen(pwLength);
    if (pwLength < 3 || pwLength > 128) {
      validLen = false;
    }
    else
    {
      validLen = true;
    }
    alert("validateLen: " + validLen);
  }

  while (!validCriteria){
    validCriteria = checkPWCriteria();
    alert ("Crietria: " + validCriteria);
  }
  
  if (this.promptCharLowCase) {
    vld_pwChars += vld_lowcaseChar;
  }

  alert('1. concatenated password so far: ' + vld_pwChars);

  if (this.promptCharUpCase) {
    vld_pwChars += vld_uppercaseChar;
  }

  alert('2. concatenated password so far: ' + vld_pwChars);

  if (this.promptNum) {
    vld_pwChars += vld_numbers;
  }

  alert('3. concatenated password so far: ' + vld_pwChars);

  if (this.promptSpecChar) {
    vld_pwChars += vld_specChars;
  }

  alert('final selected valid password chars: ' + vld_pwChars);
  alert ('pw length user given: ' + pwLength);
  alert ('valid pw character list length: ' + vld_pwChars.length);

  for (var i = 0; i < pwLength; i++) {
    var rndmChar  = Math.floor(Math.random() * vld_pwChars.length) + 1;
    resultPassword += vld_pwChars.charAt(rndmChar);
  }

  alert("resultant password: " + resultPassword);

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

