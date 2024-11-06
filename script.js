

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
// addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 110, true);
// addBookToLibrary('Le Petit Prince', 'Antoine de Saint-Exupéry', 211, false);
// addBookToLibrary('The Alchemist (O Alquimista)', 'Paulo Coelho', 290, false);
// addBookToLibrary("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 563, false);
// addBookToLibrary('And Then There Were None', 'Agatha Christie', 456, false);
// addBookToLibrary('The Hobbit', 'Lewis Carroll', 647, false);
// addBookToLibrary('The Da Vinci Code', '	Dan Brown', 266, false);
// addBookToLibrary('The Catcher in the Rye', 'J. D. Salinger', 785, false);

//function to creat instance of book
function addBookToLibrary(title, author, pages, isRead) {
    return myLibrary.push(new Book(title, author, pages, isRead));
}

 
//Display book to User
//function for iterate over array of myLibrary

function showBookCollection() {
    const tableBody = document.querySelector('table tbody');
    //create all element for the table
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    //iterate over the array collection of books
    myLibrary.forEach(function(book) {
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

//showBookCollection();

// Form and Button Handler
const form = document.querySelector('form');
const btn = document.querySelector('#add-btn');
btn.addEventListener('click', (x) => {
    //get all the input id
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
    //check the input before assign the value
    if(title.checkValidity() && author.checkValidity() && pages.checkValidity() && read.checkValidity()) {
        addBookToLibrary(title.value, author.value, pages.value, read.value);
        //only able to create element when the input pass the validity
        showBookCollection();
    }
    console.log(myLibrary);
    //prevent the button to refresh when clicked
    x.preventDefault();
    form.reset();
});