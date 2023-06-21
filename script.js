let passBox = document.querySelector('.passBox');
let inputSlider = document.querySelector('#inputSlider');
let sliderValue = document.querySelector('#sliderValue');
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let numbers = document.querySelector('#numbers');
let symbols = document.querySelector('#symbols');
let genBtn = document.querySelector('.genBtn');
let copyText = document.querySelector('#copyText');

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let uperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nums = "0123456789";
let allSymbols = "~@#$%^&*";

function generatePassword() {
    let pass = "";
    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? uperChars : "";
    allChars += numbers.checked ? nums : "";
    allChars += symbols.checked ? allSymbols : "";

    for (let i = 1; i <= inputSlider.value; i++) {
        pass += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return pass;
}

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

copyText.addEventListener('click', () => {
    if (passBox.value != "" || passBox.value >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyText.innerHTML = "check";
        copyText.title = "Password copied";

        setTimeout(() => {
            copyText.innerHTML = "content_copy";
            copyText.title = "";
        }, 5000);
    }
})