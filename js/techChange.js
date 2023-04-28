function removeActive() {

    const toRemove = document.querySelectorAll('.button')

    for (let i = 0; i < toRemove.length; i++) {
        toRemove[i].classList.remove('tech-active');
    }
}



// change dom

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

const title = document.getElementById('title');
const info = document.getElementById('info');

const techPic = document.getElementById('tech-pic');
const techPicdesktop = document.getElementById('tech-pic-desktop');


b1.addEventListener('click', (e) => {
    const button = e.target.classList

    removeActive()
    if(button.contains('button')){
        button.add('tech-active')
    }

    title.innerHTML = 'LAUNCH VEHICLE'
    info.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    
    techPic.src = './assets/technology/image-launch-vehicle-landscape.jpg'
    techPicdesktop.srcset ='./assets/technology/image-launch-vehicle-portrait.jpg'
})

b2.addEventListener('click', (e) => {
    const button = e.target.classList

    removeActive()
    if(button.contains('button')){
        button.add('tech-active')
    }

    title.innerHTML = 'SPACEPORT'
    info.innerHTML = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    
    techPic.src = './assets/technology/image-spaceport-landscape.jpg'
    techPicdesktop.srcset ='./assets/technology/image-spaceport-portrait.jpg'
})

b3.addEventListener('click', (e) => {
    const button = e.target.classList

    removeActive()
    if(button.contains('button')){
        button.add('tech-active')
    }

    title.innerHTML = 'SPACE CAPSULE'
    info.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    
    techPic.src = './assets/technology/image-space-capsule-landscape.jpg'
    techPicdesktop.srcset ='./assets/technology/image-space-capsule-portrait.jpg'
})