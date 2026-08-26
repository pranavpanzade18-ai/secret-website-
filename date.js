let selectedFood = "";

function nextPage(page) {

    document.querySelectorAll(".page").forEach(function(p) {
        p.classList.remove("active");
    });

    document.getElementById("page" + page).classList.add("active");
}

function yesClicked() {
    nextPage(2);
}

function moveNo() {

    const btn = document.getElementById("noBtn");

    btn.style.position = "absolute";

    const x = Math.random() * 180 - 90;
    const y = Math.random() * 120 - 60;

    btn.style.transform =
        `translate(${x}px, ${y}px)`;
}

function saveDate() {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!date || !time) {
        alert("Pick a date and time first 💗");
        return;
    }

    localStorage.setItem("date", date);
    localStorage.setItem("time", time);

    nextPage(4);
}

function selectFood(element, food) {

    document.querySelectorAll(".food").forEach(function(item) {
        item.classList.remove("selected");
    });

    element.classList.add("selected");

    selectedFood = food;
}

function finishDate() {

    if (!selectedFood) {
        alert("Choose something to eat first 🍕");
        return;
    }

    localStorage.setItem("food", selectedFood);

    nextPage(5);
}