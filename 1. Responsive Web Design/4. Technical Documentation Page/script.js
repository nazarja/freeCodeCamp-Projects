/*  Navbar - Mobile Menu Expand */
const menu = document.querySelector('#hamburger-menu');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav-link');
const main = document.querySelector('main');
const darken = document.querySelector('#darken');

//  Preset styles
if (window.innerWidth < 600) {
    nav.style.left = "-310px";
    darken.style.zIndex = "-1";
    darken.style.backgroundColor = "rgba(0,0,0,0.0)";
}

// Control Nav and Main Animations depending on viewport width
function menuFunction() {
    if (window.innerWidth < 600) {
        if (nav.style.left == "-310px") {
            nav.style.left = "0";
            darken.style.zIndex = "1";
            darken.style.backgroundColor = "rgba(0,0,0,0.5)"
        }
        else {
            nav.style.left = "-310px";
            darken.style.zIndex = "-1";
            darken.style.backgroundColor = "rgba(0,0,0,0.0)"
        }
    }
    else {
        if (nav.style.left == "-310px") {
            nav.style.left = "0";
            main.style.left = "310px";
        }
        else {
            nav.style.left = "-310px";
            main.style.left = "0px";
        }
    }
}

// Add Event Listener for Nav
menu.addEventListener('click', () => {
    menuFunction();
});

// Adjust Height of scrollTo Element
navLink.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        let elementTo = event.target.hash;
        let element = document.querySelector(`${elementTo}`);
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = element.getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;
        window.scrollTo(0, offset - 90)
        if (window.innerWidth < 600) {
            menuFunction();
        }
    })
})