function main() {
    addEventListeners();
}

function addEventListeners() {
    selectBox.addEventListener("click", toggleDropdown);
}

function toggleDropdown() {
    const skillMenu = document.querySelector(".skillMenu");
    skillMenu.classList.toggle("skillMenu-open");
}

const selectBox = document.querySelector(".selectBox");
function selectOption(e) {
    const selected = document.querySelector(".selected");
    const selectedText = e.target.innerText;
    const selectedIcon = e.target.querySelector("i").cloneNode(true)
    selected.innerHTML = "";
    selected.append(selectedIcon, selectedText);
    toggleDropdown();
}

const options = document.querySelectorAll("li");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", selectOption);
}

