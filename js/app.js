//__________Defining global variables________________________________________________________________________
const sections = document.querySelectorAll('section');
const list = document.getElementById('navbar__list');
const links = document.querySelectorAll('.navbar__menu .menu__link__active');


//__________Building the nav_________________________________________________________________________________
function navBuild(sections) {
    
    for (const section of sections) {          
        list.innerHTML += `<li class="menu__link" id="${section.id}z"><a href="#${section.id}">${section.dataset.nav}</a></li>`;
              };
};
        


//__________Add class 'active' to section when near top of viewport__________________________________________
window.addEventListener('scroll', function() {
    for (section of sections) {
        let position = section.getBoundingClientRect();

        if(position.top >= 0 && position.bottom < window.innerHeight) {
	        section.classList.add('your-active-class') ;
            document.getElementById(`${section.id}z`).classList.add('menu__link__active');
            } else {
                section.classList.remove('your-active-class');
                document.getElementById(`${section.id}z`).classList.remove('menu__link__active');
        };
    };
});



// Build menu 
navBuild(sections);
