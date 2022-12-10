const result = document.querySelector('#result')
const filter = document.querySelector('#filter')
const listItems =[]

getData()

//EventListener to filter the output
filter.addEventListener('input', (e) => filterData(e.target.value))

//fetching the data from the API
async function getData(){
    const res = await fetch ('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    //Clear result
    result.innerHTML = ''

    //pushing into array of listItems the result from the API
    results.forEach(user => {
        const li = document.createElement('li')


        listItems.push(li)
        console.log(li)
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}<h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        console.log(li)
        result.appendChild(li)
    }) 
}

//To filter data in our text box
function filterData(searchTerm){
    listItems.forEach(li => {
        if(li.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            li.classList.remove('hide')
        }else{  
            li.classList.add('hide')
        }
    })
}

