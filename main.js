const navGreeting = document.getElementById("nav-greeting");
const input = document.getElementById("name");
const greetButton = document.getElementById("greet-btn")
const cards = document.querySelectorAll(".card");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

cards.forEach(card => {
    card.addEventListener("click", () => {
        if (card.style.backgroundColor) {
            card.style.backgroundColor = "";
            card.style.color = "";
        } else {
            card.style.backgroundColor = card.id;
            card.style.color = (card.id === "yellow") ? "black" : "white";
        }
    });
});


greetButton.addEventListener("click", (event) => {
    event.preventDefault();

    const userName = input.value;

    if (userName.trim() !== "") {
        navGreeting.textContent = `Hello, ${userName}`;
    } else {
        navGreeting.textContent = "Hello";
    }
})
