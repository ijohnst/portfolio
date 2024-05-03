const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') ? 
    navToggle.setAttribute('aria-expanded', false) 
    : navToggle.setAttribute('aria-expanded', true)
    primaryNav.toggleAttribute('data-visible');
})

primaryNav.addEventListener('click', () => {
    if (primaryNav.hasAttribute('data-visible')) {

        primaryNav.removeAttribute('data-visible');
        navToggle.setAttribute('aria-expanded', false);
    } 
});