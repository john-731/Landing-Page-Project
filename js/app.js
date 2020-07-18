//Defining Global Variables
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


//Building the navigation bar
const navBuilder = () => {    

    let navUI = '';
    sections.forEach(section => {
                     
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;
                     
        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
});
    navigation.innerHTML = navUI;
};
navBuilder();





// check which element is active
function getActiveElem() {
    maxSection = sections[0];
    minVal = 1000000;
    for (item of sections) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -300 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;
        };
    };
    return maxSection;
};

// Add class 'active' to section when near top of viewport
function setActive () {
    window.addEventListener('scroll', function (event) {
        let section = getActiveElem();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of sections) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        // set corresponding header style
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // remove from other headers
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};


// Build menu 

// Scroll to section on link click


// Set sections as active
setActive();