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


// Image Gallery
const images_gallery = document.querySelectorAll('.gallery-wrapper .gallery .image');

images_gallery.forEach((image_wrap) => {
    image_wrap.style.height = image_wrap.clientWidth + 'px';
    image_wrap.querySelector('img').style.height = image_wrap.clientWidth + 'px';
});


// Waktu Mundur
const countDownDate = new Date('4 February 2021 09:00:00').getTime();

setInterval(() => {
    let currentDate   = new Date().getTime();
    let distance = countDownDate - currentDate;

    let days    = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const jam_mundur_wrapper = document.querySelector('.jam-mundur-wrapper');

    jam_mundur_wrapper.innerHTML = `<div class="waktu">
                                        <span class="number" id="number_days">${days}</span>
                                        <span class="text">Hari</span>
                                    </div>
                                    <div class="waktu">
                                        <span class="number" id="number_hours">${hours}</span>
                                        <span class="text">Jam</span>
                                    </div>
                                    <div class="waktu">
                                        <span class="number" id="number_minutes">${minutes}</span>
                                        <span class="text">Menit</span>
                                    </div>
                                    <div class="waktu">
                                        <span class="number" id="number_seconds">${seconds}</span>
                                        <span class="text">Detik</span>
                                    </div>`;
        
        if( distance < 0 ) {
            jam_mundur_wrapper.innerHTML = '';
        }

}, 1000);

