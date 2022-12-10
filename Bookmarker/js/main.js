//Listen for form submit
const myForm = document.querySelector('#myform');
myForm.addEventListener('submit', saveBookMark);

function saveBookMark(s){
    //prevent form from submitting to page
    s.preventDefault();
    //Get your value
    const siteName = document.querySelector('#site_name').value;
    const siteUrl = document.querySelector('#site_url').value;
    const bookmark = {
        name: siteName,
        url: siteUrl
    }
    //Test if bookmark is null
    if(localStorage.getItem('bookmark') === null){
        //init array
        const bookmarks = [];
        //Adding to array
        bookmarks.push(bookmark);
        //set to local storage
        localStorage.setItem('bookmark', JSON.stringify(bookmarks));
    }else{
        //get bookmarks from local storage
        const bookmarks = JSON.parse(localStorage.getItem('bookmark'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Reset back to local storage
        localStorage.setItem('bookmark', JSON.stringify(bookmarks));
    }

    bookmark.value = "";

    console.log(bookmark);

};
 