
//Store all object of books
const myLibrary = [];

//Object of Book 
function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead;
}

//function to creat instance of book
function addBookToLibrary(title, author, pages, isRead) {
    return myLibrary.push(new Book(title, author, pages, isRead));
}
//Add book
addBookToLibrary('Abdul', 'Fufa', 110, true);
addBookToLibrary('Kurama', 'Chichan', 281, false);
 
//Display book to User
//function for iterate over array of myLibrary
function showBookCollection() {
    const list = document.querySelector('.book-list');
    //iterate over the array collection of books
    myLibrary.forEach(function(book) {
        //create h1 element 
        const h1 = document.createElement('h1');
        //assign the content within h1
        h1.textContent = book['title'];
        //add h1 to the parent element
        list.appendChild(h1);
    });
}

showBookCollection();