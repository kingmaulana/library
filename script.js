

//Store all object of books
const myLibrary = [];

//Object of Book 
function Book(title, author, pages, isRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead;
};

//Add book
addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 110, true);
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
};

 
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
    // for button remove
    const td4 = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Delete';

    // Toggle - Switch Button
    const input = document.createElement('input');

    //iterate over the array collection of books
    myLibrary.forEach(function(book) {
        //gave an content text to the element 
        tr.id = book.title;
        th.textContent = book.title;
        td1.textContent = book.author;
        td2.textContent = book.pages;
        //td3.textContent = book.isRead;

        //insert all the element above to the table body
        tableBody.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        // button remove
        //create attribute with the same name with title book
        removeBtn.setAttribute('reference-book', book.title);
        removeBtn.className = 'remove'
        td4.appendChild(removeBtn);
        tr.appendChild(td4);

        // toggle - switch
        input.className = 'checkbox';
        input.id = book.title;
        input.type = 'checkbox';
        input.checked = book.isRead;
        td3.appendChild(input);
    });
}
showBookCollection();

// Form and Button Handler add Book
const form = document.querySelector('form');
const btn = document.querySelector('#add-btn');
btn.addEventListener('click', (x) => {
    //get all the input id
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const inputCheckbox = document.querySelector('input#switch');
    //check the input before assign the value
    if(title.checkValidity() && author.checkValidity() && pages.checkValidity()) {
        addBookToLibrary(title.value, author.value, pages.value, inputCheckbox.checked);
        //only able to create element when the input pass the validity
        showBookCollection();
    }
    console.log(myLibrary);
    //prevent the button to refresh when clicked
    x.preventDefault();
    form.reset();

    //trigger here, because the script read the delete button 
    //at first so the new added button doesn't update automaticly
    buttonRemove();
    checkboxFunc();
});
buttonRemove();

//Function button remove
function buttonRemove() {
    //select the tr for manipulate later
    const trTable = document.querySelectorAll("tr");
    const btnRemove = document.querySelectorAll(".remove");
    btnRemove.forEach(button => {
        //add a listerner for each button
        button.addEventListener('click', () => {
            //iterate each array which storage all the books
            myLibrary.forEach((book) => {
                //check if the array object title is same with button id
                if(book.title === button.attributes[0].value) {
                    //make an index for reference when splice(delete)
                    const index = myLibrary.indexOf(book);
                    myLibrary.splice(index, 1);
                    //for html element delete the item matching with array delete
                    trTable.forEach((row) => {
                        if(row.id === book.title){
                            //delete the tr or row in table
                            row.remove();
                        }
                    });
                };
            });
        });
    });
};

//console.log(myLibrary);
//console.log(cbxButton);
function checkboxFunc() {
    const cbxButton = document.querySelectorAll("table input");
    cbxButton.forEach((button) => {
        button.addEventListener('click', () => {
            myLibrary.forEach((item) => {
                if(item.title === button.id && button.checked === true) {
                    item.isRead = true;
                } else {
                    item.isRead = false;
                }
            });
        });
    });
}
checkboxFunc();