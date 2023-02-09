// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// store possible character options

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
// store value for if criteria is meet
var criteria = true;
// store amounts of character types a min and a max
var max = 128;
var min = 8;

function generatePassword() {
  let charAmt = "";
  let passUpper = "";
  let passLower = "";
  let passNumb = "";
  let passChar = "";

  if (Number(prompt("How many characters do you want in your password?"))) {
    console.log(charAmt >= min && charAmt <= max);
  }

  if (window.confirm("Do you want uppercase letters in your password?")) {
    console.log(passUpper === upperCase);
  }
  if (window.confirm("Do you want lowercase letters in your password?")) {
    console.log(passLower === lowerCase);
  }

  if (window.confirm("Do you want numbers in your password?")) {
    console.log(passNumb === numbers);
  }
  if (window.confirm("Do you want special characters in you password?"));
  console.log(passChar === specChar);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
