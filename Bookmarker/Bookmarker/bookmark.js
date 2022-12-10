const submit = document.querySelector('#bookmark-input');

const siteName = document.querySelector('#site-name')

let siteUrl = document.querySelector('#site-url')

siteUrl = /([a-z A-Z 0-9]).[a-z]/

const submitBtn = document.querySelector('#submit-btn')

let modal = document.querySelector('.confirmation_modal');

submit.addEventListener('submit', onSubmit)

submitBtn.addEventListener('click', openModal)


function openModal(e){
    e.preventDefault();
    modal.style.display = 'block';
}


function onSubmit(e){
    e.preventDefault();
    const bookmarks ={
        name: siteName.value,
        url: siteUrl.value
    }

    // modal.style.display = 'block';

    if(localStorage.getItem('myBookmark') === null){
        const bookmarkSite = [];

        bookmarkSite.push(bookmarks);

        localStorage.setItem('myBookmark', JSON.stringify(bookmarkSite));
    }else{
        const bookmarkSite = JSON.parse(localStorage.getItem('myBookmark'));

        bookmarkSite.push(bookmarks);

        localStorage.setItem('myBookmark', JSON.stringify(bookmarkSite));

    }

    bookmarks.value = "";

}

