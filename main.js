/**
 * Main function wihch is onloaded on the body tag in the HTML-file.
 */
function main() {
    addEventListeners();
}


/**
 * Every eventListener thoughtout the script.
 */
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

    const projectItemGrifter = document.querySelector(".goToGrifter");
    projectItemGrifter.addEventListener("click", openProjectItemGrifter);
    
    const projectItemEtch = document.querySelector(".goToEtch");
    projectItemEtch.addEventListener("click", openProjectItemEtch);

    const linkedInButton = document.querySelector("#linkedInLink");
    linkedInButton.addEventListener("click", openLinkedInLink);
    
    const gitHubButton = document.querySelector("#gitHubLink");
    gitHubButton.addEventListener("click", openGitHubLink);
    
    const myMailIcon = document.querySelector("#emailIcon");
    myMailIcon.addEventListener("click", openMyMailWindow);
}

/**
 * Function to open the link in a new tab.
 */
function openLinkedInLink() {
    window.open('https://www.linkedin.com/in/parham-berenjian-5a2a26196/', '_blank').focus();
}


/**
 * Function to open the link in a new tab.
 */
function openGitHubLink() {
    window.open('https://github.com/ParhamInBinary', '_blank').focus();
}


/**
 * Function to open the link in a new tab.
 */
function openProjectItemGrifter() {
    window.open('https://parhaminbinary.github.io/The-grifters-game/', '_blank').focus();
}


/**
 * Function to open the link in a new tab.
 */
function openProjectItemEtch() {
    window.open('https://parhaminbinary.github.io/Etch-N-Sketch/', '_blank').focus();
}


/**
 * Function to display a div presenting an email address.
 */
function openMyMailWindow() {
    const myMailWindow = document.querySelector(".myMailWindow");
    myMailWindow.classList.toggle("displayFlex");
}


/**
 * Function to switch between two layouts on demand.
 */
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

/**
 * A function to collapse a dropdown by clicking anywhere on the body.
 * @param { MouseEvent<HTMLDivElement> } e click event.
 * @returns { void }
 */
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

/**
 * A function to hide a div by clicking anywhere on the body.
 * @param { MouseEvent<HTMLDivElement> } e click event.
 * @returns { void }
 */
function collapseMyMailWindow(e) {
    const myMailIcon = document.querySelector("#emailIcon");
    const myMailWindow = document.querySelector(".myMailWindow");
    const path = e.path;
    for ( const element of path ) {
        if ( element == myMailIcon || element == myMailWindow ) {
            return
        }
    }
    myMailWindow.classList.toggle("displayFlex", false);
}


/**
 * A function to display a contact form in a div.
 */
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


/**
 * A function to display a dropdown.
 */
function toggleDropdown() {
    const skillMenu = document.querySelector(".skillMenu");
    skillMenu.classList.toggle("skillMenu-open");

    const dropIcon = document.querySelector(".dropIcon")
    dropIcon.classList.toggle("dropIcon-rotate");
}

/**
 * A variable and a loop for running though an array of options in a dropdown to be clicked.
 */
const options = document.querySelectorAll("li");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", selectOption);
}


/**
 * A function to select the chosen element to be presented in the div taking the previous' stead then closing the dropdown.
 * @param { MouseEvent<HTMLDivElement> } e click event.
 */
function selectOption(e) {
    const selected = document.querySelector(".selected");
    const selectedText = e.target.innerText;
    const selectedIcon = e.target.querySelector("i").cloneNode(true);

    selected.innerHTML = "";
    selected.append(selectedIcon, selectedText);
    toggleDropdown();
    updateSkillResults();
}


/**
 * A function to present information depending on which element was chosen in the dropdown.
 */
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