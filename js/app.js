//__________Defining global variables________________________________________________________________________
const sections = document.querySelectorAll('section');
const list = document.getElementById('navbar__list');
//const link = document.querySelectorAll('a');



//__________Building the nav_________________________________________________________________________________
function navBuild(sections) {
    
    for (const section of sections) {
        const sectionID = section.id;
        const sectionDN = section.dataset.nav;              
        list.innerHTML += `<li><a href="#${sectionID}">${sectionDN}</a></li>`;
              };
};



//__________Add class 'active' to section when near top of viewport__________________________________________
window.addEventListener('scroll', function() {
    for (section of sections) {
        let position = section.getBoundingClientRect();

        if((position.top >= 0 && position.bottom < window.innerHeight)/* || (position.top < window.innerHeight && position.bottom >= 0)*/) {
	        section.classList.add('your-active-class');
            } else {
                section.classList.remove('your-active-class');
        };
    };
});



// Build menu 
navBuild(sections);
