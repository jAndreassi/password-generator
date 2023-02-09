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

// store amounts of character types a min and a max
var max = 128;
var min = 8;

function generatePassword() {
  var totalSelections = [];
  let passNumb = "";
  var password = "";
  var criteria = false;
  console.log(totalSelections.length);
  var charAmt = Number(
    prompt("How many characters do you want in your password?")
  );
  var lenghthCheck = charAmt >= min && charAmt <= max;
  // console.log(lenghthCheck);
  if (!lenghthCheck) {
    alert("Sorry you have to choose a number between 8 and 128!");
    generatePassword();
  }

  if (window.confirm("Do you want uppercase letters in your password?")) {
    totalSelections = totalSelections.concat(upperCase);
    criteria = true;
    console.log(totalSelections.length);
    // console.log(totalSelections);
  }

  if (window.confirm("Do you want lowercase letters in your password?")) {
    totalSelections = totalSelections.concat(lowerCase);
    criteria = true;
    console.log(totalSelections.length);
    // console.log(totalSelections);
  }
  if (window.confirm("Do you want numbers in your password?")) {
    totalSelections = totalSelections.concat(numbers);
    criteria = true;
    console.log(totalSelections.length);
    // console.log(totalSelections);
  }
  if (window.confirm("Do you want special characters in your password?")) {
    totalSelections = totalSelections.concat(specChar);
    criteria = true;
    console.log(totalSelections.length);
    // console.log(totalSelections);
  }
  console.log(criteria);
  if (criteria === false) {
    alert("You need to select one of the character options, let's try again!");
    generatePassword();
  }
  console.log(totalSelections);
  console.log(totalSelections.size);
  for (var i = 0; i < charAmt; i++) {
    var randomIndex = Math.floor(
      Math.random() * (totalSelections.length - 0) + 0
    );
    console.log(randomIndex);
    password[i] = totalSelections[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
