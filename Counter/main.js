const value = document.querySelector('#value')

const decreaseBtn = document.querySelector('.decrease')
const resetBtn = document.querySelector('.reset')
const increaseBtn = document.querySelector('.increase')

let count = 0

decreaseBtn.addEventListener('click', function(){
    count--
    value.textContent = count
    if(count < 0){
        value.style.color = 'red';
    }
})
increaseBtn.addEventListener('click', function(){
    count++
    value.textContent = count
    if(count > 0){
        value.style.color = 'green';
    }
})
resetBtn.addEventListener('click', function(){
    count = 0
    value.textContent = count
    if(count = 0){
        value.style.color = '#222';
    }
})

/*if (count > 0){
    value.style.color = 'green'
}else if(count < 0){
    value.style.color = 'red'
}else{
    value.style.color = '#222'
}*/