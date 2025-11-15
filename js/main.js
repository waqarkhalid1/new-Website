// Toggle navigation menu for mobile
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
    if (navList.style.display === 'flex' || navList.style.display === '') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
    }
});

// Make navigation responsive on resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 860) {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'row';
    } else {
        navList.style.display = 'none';
    }
});