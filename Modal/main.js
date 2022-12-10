//Get modal Element
const modal = document.querySelector('#simpleModal');
//Get open modal btn
const modalBtn = document.querySelector('#modalBtn');
//Get closeBtn
const closeBtn = document.querySelector('.closeBtn')

//Listen for open click
modalBtn.addEventListener('click', openModal)
//Listen for close clicl
closeBtn.addEventListener('click', closeModal)
//Listen for outside click
window.addEventListener('click', clickOutside)
//function for open modal
function openModal(){
    modal.style.display = 'block';
}

//function for close modal
function closeModal(){
    modal.style.display = 'none';
}

//function for outside close modal
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}

