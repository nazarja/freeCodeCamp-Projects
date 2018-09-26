/*******
 *  Document Ready
 *******/
const logo = document.querySelector('#welcome-section h1');
const menu = document.querySelector('#menu');
const submenu = document.querySelector('#submenu');
// On Document Ready
window.addEventListener('DOMContentLoaded', () => {

    // Expand submenu on menu click
    menu.onclick = () => {
        if (submenu.style.top != '50px' ? submenu.style.top = '50px' : submenu.style.top = '0');
    }
    submenu.onclick = () => {
        submenu.style.top = '0';
    }

    // Animate logo
    setTimeout(() => {
        logo.style.color = '#fff';
    }, 2000);
});



/*******
 *  Skills
 *******/
const skillsDiv = document.querySelector('#skills-list');
const skills = [['JavaScript', 2], ['HTML', 2], ['CSS', 2], ['Sass', 1], ['Node', 1], ['Express', 1], ['Angular', 1], ['React', 1], ['jQuery', 2],['D3',1], ['MongoDB', 1], ['Git', 1]];
const fullStar = '&#9733;';
const emptyStar = '&#9734;'

// Add Skills
let ul = document.createElement('ul');
ul.className = 'skill-list';
skills.map(skill => {

    // Create stars
    let stars = '';
    num = 1 ;
   for (let i = 1; i < 4; i++) {
       if (skill[1] >= i ? stars += fullStar: stars += emptyStar);
   }

    // Create Element
    let li = document.createElement('li');
    li.className = 'skill-item';
    li.innerHTML = `${skill[0]} ${stars}`;
    ul.append(li)
});
skillsDiv.append(ul);



/*******
 *  Form Submit
 *******/
const form = document.querySelector('form');
const submit = document.querySelector('#messageIsSent');
form.addEventListener('submit', () => {submit.style.display = 'block';});



/*******
 *  ScrollTo Adjustment
 *******/
const navLink = document.querySelectorAll('.nav-link')
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
    })
})


/*******
 *  ScrollToTop Animation
 *******/
const scrollToTop = document.querySelector('#scroll-to-top');
window.addEventListener('scroll', () => {
    if (window.innerWidth > 1000) {
        if (window.scrollY > window.innerHeight ? scrollToTop.style.right = "30px" : scrollToTop.style.right = "-50px");
    }
    else {
        scrollToTop.style.right = "-50px";
    }
})
