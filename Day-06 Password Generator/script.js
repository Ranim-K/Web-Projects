// Helper functions
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function shufflePassword(password) {
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

// Main generator function
function generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols) {
    const types = [];
    if (includeLower) types.push(getRandomLower);
    if (includeUpper) types.push(getRandomUpper);
    if (includeNumbers) types.push(getRandomNumber);
    if (includeSymbols) types.push(getRandomSymbol);

    if (types.length === 0) return '';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomFunc = types[Math.floor(Math.random() * types.length)];
        password += randomFunc();
    }

    return shufflePassword(password);
}

// UI Elements
const passwordText = document.querySelector('.password-text');
const copyBtn = document.getElementById('copy');
const repeatBtn = document.getElementById('repeat');
const range = document.getElementById('range');
const rangeValue = document.querySelector('.range-value');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const statusBox = document.querySelector('.status-box');

// Password Strength Evaluation
function evaluateStrength(password) {
    let score = 0;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (password.length >= 16) score++;

    if (score <= 2) {
        statusBox.innerHTML = "<strong>Weak:</strong> Easily guessed. Be cautious.";
    } else if (score === 3) {
        statusBox.innerHTML = "<strong>Moderate:</strong> Not bad, but not Fort Knox either.";
    } else {
        statusBox.innerHTML = "<strong>Strong:</strong> Great job! That's a tough one.";
    }
}

// Generate and display password
function updatePassword() {
    const length = +range.value;
    const upper = upperEl.checked;
    const lower = lowerEl.checked;
    const numbers = numberEl.checked;
    const symbols = symbolEl.checked;

    const password = generatePassword(length, upper, lower, numbers, symbols);
    passwordText.value = password;
    evaluateStrength(password);
}

// Events
range.addEventListener('input', () => {
    rangeValue.textContent = range.value;
    updatePassword();
});

[upperEl, lowerEl, numberEl, symbolEl].forEach(el =>
    el.addEventListener('change', updatePassword)
);

repeatBtn.addEventListener('click', updatePassword);

copyBtn.addEventListener('click', () => {
    const password = passwordText.value;
    if (!password) return;
    navigator.clipboard.writeText(password)
        .then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => copyBtn.textContent = "Copy", 1500);
        });
});

// Initial password generation
updatePassword();
