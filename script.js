var generateBtn = document.querySelector("#generate");
var passwordLength;
var lc;
var upperCase;
var Numeric;
var specialChar;
var Choice;

var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [0,1,2,3,4,5,6,7,8,9];
var sc = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var passwordChar = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("Choose the length of the password at least 8 characters and no more than 128 characters");
  alert("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Please select the number of characters");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Select between 8 and 128");
    alert("Your Password Length " + passwordLength);
  
  } else { 
    lowerCase = confirm("Will this contain lower case letters?");
    alert("Lower case " + lowerCase);
    upperCase = confirm("Will this contain upper case letters?");
    alert("Upper case " + upperCase);
    Numeric = confirm("Will this contain numbers?");
    alert("Number " + Numeric);
    specialChar = confirm("Will this contain special characters?");
    alert("Special Character " + specialChar);
  };
  //
  if (!lowerCase && !upperCase && !Numeric && !specialChar) {
    Choice = alert("You must choose a criteria");
  // 4 true options
  } else if (lowerCase && upperCase && Numeric && specialChar) {
    Choice = lc.concat(uc, num, sc);
    alert(Choice);
  }
  //
  else if (lowerCase && upperCase && Numeric) {
    Choice = lc.concat(uc, num);
    alert(Choice);
  }
  else if (lowerCase && upperCase && specialChar) {
    Choice = lc.concat(uc, sc);
    alert(Choice);
  }
  else if (lowerCase && Numeric && specialChar) {
    Choice = lc.concat(num, sc);
    alert(Choice);
  }
  else if (upperCase && Numeric && specialChar) {
    Choice = uc.concat(num, sc);
    alert(Choice);
  }
  //
  else if (lowerCase && upperCase) {
    Choice = lc.concat(uc);
    alert(Choice);
  }
  else if (lowerCase && Numeric) {
    Choice = lc.concat(num);
    alert(Choice);
  }
  else if (lowerCase && specialChar) {
    Choice = lc.concat(sc);
    alert(Choice);
  }
  else if (upperCase && Numeric) {
    Choice = uc.concat(num);
    alert(Choice);
  }
  else if (upperCase && specialChar) {
    Choice = uc.concat(sc);
    alert(Choice);
  }
  else if (Numeric && specialChar) {
    Choice = num.concat(sc);
    alert(Choice);
  }
  //
  else if (lowerCase) {
    Choice = lc;
    alert(Choice);
  }
  else if (upperCase) {
    Choice = uc;
    alert(Choice);
  }
  else if (Numeric) {
    Choice = num;
    alert(Choice);
  }
  else if (specialChar) {
    Choice = sc;
    alert(Choice);
  };
  
  for (var i = 0; i < passwordLength; i++) {
    var getChoices = Choice[Math.floor(Math.random() * Choice.length)];
    passwordChar.push(getChoices);
    console.log(getChoices);
  }
  var password = passwordChar.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}