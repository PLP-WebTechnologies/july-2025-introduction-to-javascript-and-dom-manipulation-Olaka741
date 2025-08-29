// ------------------ VARIABLES & DATA TYPES ------------------
let siteName = "JS Fundamentals Demo";
let year = 2025;
let isLearning = true;

console.log(`Welcome to ${siteName}, Year: ${year}, Learning: ${isLearning}`);

// ------------------ FUNCTIONS ------------------
function greetUser(name) {
  if (name) {
    return `Hello, ${name}! 👋 Welcome to JavaScript.`;
  } else {
    return "Please enter your name!";
  }
}

function addNumbers(a, b) {
  return a + b;
}

function formatString(str) {
  return str.toUpperCase();
}

// ------------------ EVENT LISTENERS ------------------
document.getElementById("greetBtn").addEventListener("click", function () {
  let nameInput = document.getElementById("username").value;
  document.getElementById("greeting").textContent = greetUser(nameInput);
});

document.getElementById("calcBtn").addEventListener("click", function () {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;
  let result = addNumbers(num1, num2);
  document.getElementById("calcResult").textContent = `Result: ${result}`;
});

// ------------------ LOOPS ------------------
document.getElementById("countdownBtn").addEventListener("click", function () {
  let countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // clear previous items

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    countdownList.appendChild(li);
  }
});

// ------------------ TOGGLE CONTENT ------------------
document.getElementById("toggleBtn").addEventListener("click", function () {
  let toggleText = document.getElementById("toggleText");
  toggleText.classList.toggle("hidden");
});
