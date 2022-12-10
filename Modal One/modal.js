const btn = document.querySelector('.submit-btn');
const closeBtn = document.querySelector('#closeBtn');
const modal = document.querySelector('.modal-back');

btn.addEventListener('click', openModal)

closeBtn.addEventListener('click', closeModal)

window.addEventListener('click', closeModalCon)

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function closeModalCon(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}
