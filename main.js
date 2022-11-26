function main() {
    addEventListeners();
}

function addEventListeners() {
    const selectBox = document.querySelector(".selectBox");
    selectBox.addEventListener("click", toggleDropdown);
}

function toggleDropdown() {
    const skillMenu = document.querySelector(".skillMenu");
    skillMenu.classList.toggle("skillMenu-open");

    const dropIcon = document.querySelector(".dropIcon")
    dropIcon.classList.toggle("dropIcon-rotate");
}

const options = document.querySelectorAll("li");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", selectOption);
}

function selectOption(e) {
    const selected = document.querySelector(".selected");
    const selectedText = e.target.innerText;
    const selectedIcon = e.target.querySelector("i").cloneNode(true);

    selected.innerHTML = "";
    selected.append(selectedIcon, selectedText);
    toggleDropdown();

    if ( selected.innerText === "Frontend development") {
        console.log("asd")
        
        const backEnd = document.querySelector("backEnd");
        const GaD = document.querySelector("GaD");

        backEnd.classList.toggle("skills-hidden")
        GaD.classList.toggle("skills-hidden")
        

    }
}


