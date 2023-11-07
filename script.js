const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

if (window.innerWidth >= 768) {
    swiper.destroy(true, true),
        swiper.update()

}

let brandsButton = document.querySelector('.brands-block__button');
let brandHidden = document.querySelectorAll(".hidden");

brandsButton.addEventListener('click', function () {
    if (brandsButton.classList.contains('show-mode')) {
        brandsButton.classList.toggle("show-mode");
        brandsButton.classList.toggle("hide-mode");
        brandsButton.textContent = ('Скрыть');
        brandsButton.style.background = 'url(/images/hidemore-icon.svg) no-repeat -5px';
        for (let i = 0; i < brandHidden.length; i++) {
            brandHidden[i].classList.remove('hidden');
        }
    } else {
        brandsButton.classList.toggle("show-mode");
        brandsButton.classList.toggle("hide-mode");
        brandsButton.textContent = ('Показать все');
        brandsButton.style.background = 'url(/images/readmore-icon.svg) no-repeat -5px';
        for (let i = 0; i < brandHidden.length; i++) {
            brandHidden[i].classList.add('hidden');
        }
    }
});