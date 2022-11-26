function main() {
    addEventListeners();
}

function addEventListeners() {
    const selectBox = document.querySelector(".selectBox");
    selectBox.addEventListener("click", toggleDropdown);

    const messageMe = document.querySelector(".messageMeBtn");
    messageMe.addEventListener("click", toggleMessageWindow);

    const messageMeXMark = document.querySelector("#messageMeXMark")
    messageMeXMark.addEventListener("click", toggleMessageWindow);
}


function toggleMessageWindow() {
    const messageBox = document.querySelector(".messageBox");
    messageBox.classList.toggle("show-message-window");
    
    const footer = document.querySelector("footer");
    footer.classList.toggle("displayNone");
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
    updateSkillResults();
}

function updateSkillResults() {
    const selectedSkill = document.querySelector(".selected").innerText.trim();
    const GraphicsAndDesignsResults = document.querySelector(".GraphicsAndDesigns");
    const backEndResults = document.querySelector(".backEnd");
    const frontEndResults = document.querySelector(".frontEnd");
    
    
    if ( selectedSkill === "Frontend development") {
        
        backEndResults.classList.toggle("displayNone", true);
        GraphicsAndDesignsResults.classList.toggle("displayNone", true);
        frontEndResults.classList.toggle("displayNone", false)
    } 
    else if ( selectedSkill === "Backend development" ) {
        
        backEndResults.classList.toggle("displayNone", false);
        GraphicsAndDesignsResults.classList.toggle("displayNone", true);
        frontEndResults.classList.toggle("displayNone", true)
    }
    else if ( selectedSkill === "Graphics & design" ) {
        
        backEndResults.classList.toggle("displayNone", true);
        GraphicsAndDesignsResults.classList.toggle("displayNone", false);
        frontEndResults.classList.toggle("displayNone", true)
    }
}