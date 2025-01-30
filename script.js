const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");
const romanNum = [
  {value: 1000, numeral: "M"},
  {value: 900, numeral: "CM"},
  {value: 500, numeral: "D"},
  {value: 400, numeral: "CD"},
  {value: 100, numeral: "C"},
  {value: 90, numeral: "XC"},
  {value: 50, numeral: "L"},
  {value: 40, numeral: "XL"},
  {value: 10, numeral: "X"},
  {value: 9, numeral: "IX"},
  {value: 5, numeral: "V"},
  {value: 4, numeral: "IV"},
  {value: 1, numeral: "I"}
];


// Check user input for a valid number
const checkUserInput = () => {
  const userInput = Number(numberInput.value);
  result.classList.add("alert");

  if (numberInput.value === "") {
  result.innerText = "Please enter a valid number.";
  } else if (userInput < 1) {
    result.innerText = "Please enter a number greater than or equal to 1."
  } else if (userInput >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999."
  } else {
    getRomanNum(userInput);
  }
};


  // Listening for button click or keydown to check user input
convertBtn.addEventListener("click", checkUserInput);
 
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});


// Roman numeral conversion
let roman = [];

const getRomanNum = (input) => {
  result.classList.remove("alert");

  let found = romanNum.find(function (element) {
    return element.value <= input;
  });

  roman.push(found.numeral);

  const remainder = input - found.value;

  if (remainder > 0) {
    getRomanNum(remainder);
  } else {
    result.innerText = roman.join("");  
  };
  
  roman = [];  
};