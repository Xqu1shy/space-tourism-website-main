
//  for secondary navigation

const burger = document.getElementById('burger');
const burgerSwapImg = document.getElementById('burger-swap');

burger.addEventListener('click', () => {

    burger.parentNode.classList.toggle('show-secondary-nav');

    if (burgerSwapImg.src.indexOf("hamburger") != -1) {
        burgerSwapImg.src=('./assets/shared/icon-close.svg');
    }else {
        burgerSwapImg.src=('./assets/shared/icon-hamburger.svg');
    }

})


