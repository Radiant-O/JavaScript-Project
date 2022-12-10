const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profileImg = document.querySelector('#profile_img')
const name = document.querySelector('#name')
const date = document.querySelector('#date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
    header.innerHTML='<img src="https://unsplash.com/photos/_x335IZXxfc" alt="">';
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, accusantium!'
    profileImg.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe';
    date.innerHTML ='Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}

