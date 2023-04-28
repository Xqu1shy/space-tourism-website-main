function removeActive() {

    const toRemove = document.querySelectorAll('.button')

    for (let i = 0; i < toRemove.length; i++) {
        toRemove[i].classList.remove('planet-description-active');
    }
}

// function to change the main and give underline

const moon = document.getElementById('moon')
const mars = document.getElementById('mars')
const europa = document.getElementById('europa')
const titan = document.getElementById('titan')

const image = document.getElementById('planet-img')
const changeH1 = document.getElementById('change-h1')
const changeP = document.getElementById('change-p')
const changeAvg = document.getElementById('change-avg')
const changeEst = document.getElementById('change-est')



moon.addEventListener('click', (e) => {

    removeActive()

    moon.classList.add('planet-description-active')

    image.src="./assets/destination/image-moon.webp"
    changeH1.innerHTML= `moon`
    changeP.innerHTML= `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`
    changeAvg.innerHTML= `384,400 KM`
    changeEst.innerHTML= `3 DAYS`

})


mars.addEventListener('click', (e) => {

    removeActive()

    mars.classList.add('planet-description-active')

    image.src="./assets/destination/image-mars.webp"
    changeH1.innerHTML= `mars`
    changeP.innerHTML= `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`
    changeAvg.innerHTML= `225 MIL. km`
    changeEst.innerHTML= `9 months`


})

europa.addEventListener('click', (e) => {


    removeActive()

    europa.classList.add('planet-description-active')

    image.src="./assets/destination/image-europa.webp"
    changeH1.innerHTML= `europa`
    changeP.innerHTML= `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`
    changeAvg.innerHTML= `628 MIL. km`
    changeEst.innerHTML= `3 years`
 
})

titan.addEventListener('click', (e) => {

removeActive()

titan.classList.add('planet-description-active')

image.src="./assets/destination/image-titan.webp"
changeH1.innerHTML= `titan`
changeP.innerHTML= `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`
changeAvg.innerHTML= `1.6 BIL. km`
changeEst.innerHTML= `7 years`
  
})