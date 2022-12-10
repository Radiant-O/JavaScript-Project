let images =['images/anc.jpeg', 'images/pri.jpeg', 'images/pub.jpeg', 'images/ran.jpeg', 'images/sch.jpeg']

const btn = document.querySelector('.img-btn')
const imgDisplay = document.querySelector('.img-display')

btn.addEventListener('click', selectImage)

function selectImage(){
    let randomImage = Math.floor(Math.random()*images.length)
    for(let i = 0; i< images.length; i++){
        imgDisplay.innerHTML = `<img src=${images[randomImage]} alt="" class="img-displays"></img>`
        
    }
}


