const passwordBox = document.getElementById("password")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()+=?.";

const allChars = upperCase + lowerCase + number + symbol;
// create password function-------------------
function createPassword(){
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
  console.log(passwordBox.value)
}
// copy password function-----------------
function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");
}