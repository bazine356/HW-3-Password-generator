// Assignment Code
//  Charachter pool= [a-z] [A-Z] [1,2,3] etc.

let generateBtn = document.querySelector("#generate");

let lowChars = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let capChars = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0]

let schars = ["&", "$","&","@","!","?","/",".","%","#","+","="]




function generateOptions() {

  let length = parseInt(prompt("how long does this password need to be?"))

  if (length < 0 || length > 128) {
    alert("no can do refresh the page")
    return
  }
  let hasLowerCaseLetters = confirm("do you want Lowercase chars?")
  let hasUpperCaseLetters = confirm("do you want Cap chars?")
  let hasNumbers = confirm("do you want nums?")
  let hasSpecialChars = confirm("do you want schars?")

  let passwordOptions = {
    length: length,
    hasUpperCaseLetters: hasUpperCaseLetters,
    hasLowerCaseLetters: hasLowerCaseLetters,
    hasNumbers: hasNumbers,
    hasSpecialChars: hasSpecialChars
  }

return passwordOptions

}

function generatePassword () {
let  passOptions = generateOptions ()

//let passOptions = length
var character =[]
if (passOptions.hasUpperCaseLetters) {
  Array.prototype.push.apply(character,capChars)
}
if (passOptions.hasNumbers) {
  Array.prototype.push.apply(character,nums)
  
}
if (passOptions.hasSpecialChars) {
  Array.prototype.push.apply(character,schars)

}
if (passOptions.hasLowerCaseLetters) {
    Array.prototype.push.apply(character,lowChars)

  
}

var pw = ""
for (let index = 0; index  < passOptions.length; index++) {
  const element = character[Math.floor(Math.random()*character.length)];

  pw += element;

}
return pw
}






// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
