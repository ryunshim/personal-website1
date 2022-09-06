const arttop = document.querySelector(".art-top");
const bottom = document.querySelector(".art-bottom");
const arrow = document.querySelector(".downarrow");

let lastscroll = window.scrollY;
let bottommed = false;
let topped = true;

document.onscroll = () => {
    // if (window.scrollY > lastscroll) {
    //     bottom.scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // }
    // console.log('hi')
}

arrow.onclick = () => {
    bottom.scrollIntoView({
        behavior: 'smooth'
    });
}

const fx = () => {
    const slides = $$(".slide");
    slides.array.forEach(slide => {
        slide.onclick(() => $('.carousel').carousel(parseInt(slide.getAttribute("num"))));
    });
}