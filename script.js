
//Store all object of books
const myLibrary = [];

//Object of Book 
function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead;
}

//Add book
addBookToLibrary('Abdul', 'Fufa', 110, true);
addBookToLibrary('Kurama', 'Chichan', 281, false);

//function to creat instance of book
function addBookToLibrary(title, author, pages, isRead) {
    return myLibrary.push(new Book(title, author, pages, isRead));
}

 
//Display book to User
//function for iterate over array of myLibrary

function showBookCollection() {
    const tableBody = document.querySelector('table tbody');
    //iterate over the array collection of books
    myLibrary.forEach(function(book) {
        //create all element for the table
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        //gave an content text to the element 
        th.textContent = book.title;
        td1.textContent = book.author;
        td2.textContent = book.pages;
        td3.textContent = book.isRead;

        //insert all the element above to the table body
        tableBody.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    });
}

showBookCollection();