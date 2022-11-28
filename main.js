function main() {
    addEventListeners();
}

function addEventListeners() {
    const selectBox = document.querySelector(".selectBox");
    selectBox.addEventListener("click", toggleDropdown);

    const messageMe = document.querySelector(".messageMeBtn");
    messageMe.addEventListener("click", toggleMessageWindow);

    const messageMeXMark = document.querySelector("#messageMeXMark");
    messageMeXMark.addEventListener("click", toggleMessageWindow);

    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
        collapseDropdown(e);
        collapseMyMailWindow(e);
    });

    const experienceSwitch = document.querySelector(".switch");
    experienceSwitch.addEventListener("click", clickExperienceSwitch);

    const projectItem = document.querySelector(".goTo");
    projectItem.addEventListener("click", openProjectItem);
    
    const linkedInButton = document.querySelector("#linkedInLink");
    linkedInButton.addEventListener("click", openLinkedInLink);
    
    const gitHubButton = document.querySelector("#gitHubLink");
    gitHubButton.addEventListener("click", openGitHubLink);
    
    const myMailButton = document.querySelector("#emailLink");
    myMailButton.addEventListener("click", openMyMailWindow);
}


function openLinkedInLink() {
    window.open('https://www.linkedin.com/in/parham-berenjian-5a2a26196/', '_blank').focus();
}

function openGitHubLink() {
    window.open('https://github.com/ParhamInBinary', '_blank').focus();
}

function openProjectItem() {
    window.open('https://parhaminbinary.github.io/The-grifters-game/', '_blank').focus();
}

function openMyMailWindow() {
    const myMailWindow = document.querySelector(".myMailWindow");
    myMailWindow.classList.toggle("displayFlex");
}

function clickExperienceSwitch () {
    const experienceSwitch = document.querySelector(".switch");
    experienceSwitch.classList.toggle("switchClicked");

    const educationalExperience = document.querySelector(".education");
    educationalExperience.classList.toggle("displayNone");

    const workExperience = document.querySelector(".work");
    workExperience.classList.toggle("displayFlex");

    const eduIcon = document.querySelector(".eduIcon");
    eduIcon.classList.toggle("eduIconColorSwitch");
    
    const workIcon = document.querySelector(".workIcon");
    workIcon.classList.toggle("workIconColorSwitch");
}

function collapseDropdown(e) {
    const selectBox = document.querySelector(".selectBox");
    const path = e.path;
    for ( const element of path ) {
        if ( element == selectBox) {
            return
        }
    }
    const skillMenu = document.querySelector(".skillMenu");
    skillMenu.classList.toggle("skillMenu-open", false);

    const dropIcon = document.querySelector(".dropIcon")
    dropIcon.classList.toggle("dropIcon-rotate", false);
}

function collapseMyMailWindow(e) {
    const emailLink = document.querySelector("#emailLink");
    const path = e.path;
    for ( const element of path ) {
        if ( element == emailLink ) {
            return
        }
    }
    const myMailWindow = document.querySelector(".myMailWindow");
    myMailWindow.classList.toggle("displayFlex", false);
}

function toggleMessageWindow() {
    const messageBox = document.querySelector(".messageBox");
    messageBox.classList.toggle("show-message-window");
    
    const footer = document.querySelector("footer");
    footer.classList.toggle("displayNone");

    const qualificationsPage = document.querySelector(".qualificationsPage");
    qualificationsPage.classList.toggle("displayNone");
    
    const portfolioPage = document.querySelector(".portfolioPage");
    portfolioPage.classList.toggle("displayNone");
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