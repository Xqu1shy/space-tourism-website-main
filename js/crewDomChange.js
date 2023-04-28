

function removeActive() {

    const toRemove = document.querySelectorAll('.button')

    for (let i = 0; i < toRemove.length; i++) {
        toRemove[i].classList.remove('current-crew');
    }
}

// for changing the dom 

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');

const title = document.getElementById('title')
const nameS = document.getElementById('name')
const bio = document.getElementById('bio')

const crewPic = document.getElementById('crew-pic')

b1.addEventListener('click', (e) => {
    const button = e.target.classList

    removeActive()
    if(button.contains('button')){
        button.add('current-crew')
    }

    title.innerHTML = 'COMMANDER'
    nameS.innerHTML = 'DOUGLAS HURLEY'
    bio.innerHTML = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    
    crewPic.src = './assets/crew/image-douglas-hurley.webp'
})

b2.addEventListener('click', (e) => {
    const button = e.target.classList

    removeActive()
    if(button.contains('button')){
        button.add('current-crew')
    }
    
    title.innerHTML = 'Mission Specialist'
    nameS.innerHTML = 'MARK SHUTTLEWORTH'
    bio.innerHTML = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'

    crewPic.src = './assets/crew/image-mark-shuttleworth.webp'
})

b3.addEventListener('click', (e) => {
    const button = e.target.classList

    removeActive()
    if(button.contains('button')){
        button.add('current-crew')
    }

    title.innerHTML = 'PILOT'
    nameS.innerHTML = 'Victor Glover'
    bio.innerHTML = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '

    crewPic.src = './assets/crew/image-victor-glover.webp'
})

b4.addEventListener('click', (e) => {
    const button = e.target.classList

    removeActive()
    if(button.contains('button')){
        button.add('current-crew')
    }

    title.innerHTML = 'Flight Engineer'
    nameS.innerHTML = 'Anousheh Ansari'
    bio.innerHTML = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '

    crewPic.src = './assets/crew/image-anousheh-ansari.webp'
})