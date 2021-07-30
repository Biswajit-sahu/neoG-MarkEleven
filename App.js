const birthDate = document.getElementById("birthDate");
const luckyNumber = document.getElementById("luckyNumber");
const output = document.getElementById("output");
var image = document.getElementById("image");
const form = document.getElementById("form");
const close = document.querySelector(".close");
const privacy = document.querySelector(".privacy");

close.addEventListener("click", (e) => {
    privacy.style.display = "none";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    var sum = 0;
    const birthValue = birthDate.value;
    const luckyValue = luckyNumber.value;

    const birth = birthValue.split("-").join("");
    for (const i in birth) {
        sum = sum + birth[i];
    }
    if (sum % luckyValue === 0) {
        output.textContent = "Hooray ! You are a Lucky Person ";
        image.src = "./gifs/Lucky.gif "
    } else {
        output.textContent = "Ooops!!!Your birthday is not a lucky number!";
        image.src = "./gifs/Unlucky.gif";
    }
});
