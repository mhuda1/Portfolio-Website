function splitScroll() {
    const controller = new ScrollMagic.Controller();

    const about = new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
        .setPin('.about-title')
        .addTo(controller);
}
// function scrollContact() {
//     let head = document.querySelector('.head');
//     let headPosition = head.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight / 2;

//     if (headPosition < screenPosition) {
//         head.classList.add('.head-appear');
//     }

// }

// function copy() {
//     let copyText = document.getElementById('nomortelp');

//     copyText.select();
//     copyText.setSelectionRange(0, 99999);

//     document.execCommand("copy");

//     alert("Copied to Clipboard\n" + copyText.value)

// }

function swipe() {
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

swipe();
// window.addEventListener('scroll', scrollContact);
splitScroll();