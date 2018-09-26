
/* Add shadow to nav on scroll */
const nav = document.querySelector('nav');
window.addEventListener('scroll', (event) => {
    let position = window.pageYOffset;
    if (position > 150) {
        nav.style.boxShadow = "0 1px 20px 0 rgba(0,0,0,0.1)"; 
        nav.style.backgroundColor = "#fff";
    }
    else {
        nav.style.boxShadow = "0 1px 20px 0 rgba(0,0,0,0.0)";
        nav.style.backgroundColor = "rgba(0,0,0,0)";
    }    
  
});

// Adjust Height of scrollTo Element
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        let elementTo = event.target.hash;
        let element = document.querySelector(`${elementTo}`);
        let bodyRect = document.body.getBoundingClientRect();
        let elemRect = element.getBoundingClientRect();
        let offset = elemRect.top - bodyRect.top;
        window.scrollTo(0, offset - 100)
    })
})