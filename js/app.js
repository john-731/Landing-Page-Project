//Defining Global Variables
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


//Building the navigation bar
const navBuilder = () => {    

    let navUI = '';
    //Iterating over all sections
    sections.forEach(section => {
                     
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
                     
        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
});
    //Appending all elements to the navigation bar
    navigation.innerHTML = navUI;
};
navBuilder();


//Getting the largest value that is less than or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//Removing the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
};

//Adding the active class
const addActive = (condition, section) => {
    if(condition){
        section.classList.add('your-active-class');
    };
};

//Implementing the actual function
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offset(section);
        
        inviewport = () => elementOffset < 150 && elementOffset >= -150;
        addActive(inviewport(), section);
        
        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener('scroll', sectionActivation);
