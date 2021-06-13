// Assignment Code
var generateBtn = document.querySelector("#generate");

//MY CODE 
var parameters = []; //empty array which will hold one or all of the character types if selected
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberCase = ['1','2','3','4','5','6','7','8','9','0'];
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "/"];

//Ask for character limite between 8 and 128:
function generatePassword() {
  var characterLimit = prompt("Set your character limit between 8 and 128 characters: ");
  if (characterLimit < 8 ||  characterLimit > 128) {
    alert("Please read the instructions carefully to create your password.");

    return generatePassword();
  }

  //Asks user if they would like to use lowercase, uppercase, numbers, or special characters
    var lowerConfirm = confirm("Would you like to use lowercase letters? ");

    var upperConfirm = confirm("Would you like to use uppercase letters? ");

    var numbersConfirm = confirm("Would you like to use numbers? ");

    var specialConfirm = confirm("Would you like to use special characters? ");

    //The empty parameters array is ammended with each approved type of character
    if (lowerConfirm === true) {
      for(var i = 0; i < lowerCase.length; i++){
        parameters.push(lowerCase[i]);
      }
    }

    if (upperConfirm === true) {
      for(var i = 0; i < lowerCase.length; i++) {
        parameters.push(lowerCase[i].toUpperCase());
        console.log(lowerCase[3].toUpperCase());
      }
    }

    if (numbersConfirm === true) {
      for (var i = 0; i < numberCase.length; i++) {
        parameters.push(numberCase[i]);
      }
    }

    if (specialConfirm === true) {
      for (var i = 0; i < specialCase.length; i++) {
        parameters.push(specialCase[i]);
      }
    }

  //The generated password is created by filling an empty string with random elements from the parameters array
    yourPassword = "";
    for (var i = 0; i < parseInt(characterLimit); i++) {
      var characterAdd = parameters[Math.floor(Math.random() * (parameters.length))];
      yourPassword = yourPassword.concat(characterAdd);

      console.log(characterAdd);


    }

    return yourPassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  parameters = [] //parameters array is cleared, so that the user may regenerate passwords without the need to refresh
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

