const hamburger = document.querySelector('.hamburger');
const nav_links = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    if( !nav_links.classList.contains('active') ) {
        if( nav_links.classList.contains('not-active') ) {
            nav_links.classList.remove('not-active');
        }
        nav_links.classList.add('active');
    } else {
        nav_links.classList.remove('active');
        nav_links.classList.add('not-active');
    }
});

nav_links.addEventListener('click', (e) => {
    if(e.target.classList.contains('link-to-id')) {
        if( !nav_links.classList.contains('active') ) {
            if( nav_links.classList.contains('not-active') ) {
                nav_links.classList.remove('not-active');
            }
            nav_links.classList.add('active');
        } else {
            nav_links.classList.remove('active');
            nav_links.classList.add('not-active');
        }
    }
});