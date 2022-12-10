const value = document.querySelector('#value')
const btn = document.querySelectorAll('.btn')

let count = 0;

btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const trigger = e.currentTarget.classList
       if(trigger.contains('decrease')){
           count--
       }else if(trigger.contains('increase')){
           count++
       }else{
           count = 0
       }
       value.textContent = count
       if (count>0){
           value.style.color = 'green'
       }else if (count < 0){
           value.style.color = 'red'
       }else{
           value.style.color = '#222'
       }
    })
})