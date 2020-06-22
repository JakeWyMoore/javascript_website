
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;

for (let i = 0; i<menuLength; i++) {
    if(menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}


const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();