const burger_nav = document.querySelector(".burger")
const slide_bar_menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.card')
const meme = document.querySelector('.meme');
const memeOverlay = document.querySelector('.overlayMeme');

function active_slidebar(){
    slide_bar_menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

function active_meme(){
    meme.classList.toggle('active');
    memeOverlay.classList.toggle('active');
    if (slide_bar_menu.classList.contains('active') && overlay.classList.contains('active')){
        slide_bar_menu.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

burger_nav.addEventListener('click', active_slidebar);
overlay.addEventListener('click', active_slidebar);
memeOverlay.addEventListener('click',active_meme);

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    })
});

