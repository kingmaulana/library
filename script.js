

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
// addBookToLibrary('Le Petit Prince', 'Antoine de Saint-Exupéry', 211, true);
// addBookToLibrary('The Alchemist (O Alquimista)', 'Paulo Coelho', 290, false);
// addBookToLibrary("Harry Potter and the Philosopher's Stone", 'J. K. Rowling', 563, false);
// addBookToLibrary('And Then There Were None', 'Agatha Christie', 456, false);
// addBookToLibrary('The Hobbit', 'Lewis Carroll', 647, true);
// addBookToLibrary('The Da Vinci Code', '	Dan Brown', 266, true);
// addBookToLibrary('The Catcher in the Rye', 'J. D. Salinger', 785, false);

//function to creat instance of book
function addBookToLibrary(title, author, pages, isRead) {
    return myLibrary.push(new Book(title, author, pages, isRead));
};

 
//Display book to User
//function for iterate over array of myLibrary
function showBookCollection() {
    const container = document.querySelector('.container');
    
    //make a random image png
    const randomNumber = Math.floor(Math.random() * 10);
    //make sure the png is never same
    let lastNumber;
    if(randomNumber !== lastNumber) {
        lastNumber = randomNumber;
    } else {
        let numIter = Math.floor(Math.random() * 10);
        if(numIter !== lastNumber) {
            lastNumber = numIter;
        } else {
            let anotherNum = lastNumber = Math.floor(Math.random() * 10);
            if(anotherNum !== lastNumber) {
                lastNumber = anotherNum;
            }
        }
    }
        
    //create all element for the book
    const divMain = document.createElement('div');
    const img = document.createElement('img');
    const divDesc = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const pPages = document.createElement('p');
    const sTitle = document.createElement('strong');
    const sAuthor = document.createElement('strong');
    const sPages = document.createElement('strong');
    const cLabel = document.createElement('label');
    const cInput = document.createElement('input');
    const cSpan = document.createElement('span');

    // for button remove
    const divImg = document.createElement('div');
    const delImg = document.createElement('img');       
    
    //iterate over the array collection of books
    myLibrary.forEach(function(book) {
        //give all the element above attribute
        divMain.className = "card-book";
        divMain.setAttribute("book-ref", book.title);
        img.src = `img/bcover${lastNumber}.png`;
        img.alt = "book";
        divDesc.className = "desc-book";

        pTitle.className = "p-title";
        pAuthor.className = "p-author";
        pPages.className = "p-pages";

        cLabel.className = "is-read";
        cInput.type = "checkbox";
        cSpan.className = "checkmark";

        sTitle.textContent = "Title : ";
        sAuthor.textContent = "Author : ";
        sPages.textContent = "Pages : ";
        cLabel.textContent = "Finished";

        divImg.className = "my-img"; 
        delImg.src = "alpha-x-circle.svg";
        delImg.alt = "x";
        delImg.className = "remove";
        delImg.setAttribute("book-ref", book.title);

        //each element show related value of array object
        pTitle.textContent = book.title;
        pAuthor.textContent = book.author;
        pPages.textContent = book.pages;
        cInput.checked = book.isRead;

        //append all the skeleton element to the parent element
        container.appendChild(divMain);
        divMain.appendChild(divImg);
        divImg.appendChild(img);
        divMain.appendChild(divDesc);
        divDesc.appendChild(pTitle);
        divDesc.appendChild(pAuthor);
        divDesc.appendChild(pPages);

        pTitle.prepend(sTitle);
        pAuthor.prepend(sAuthor);
        pPages.prepend(sPages);

        divDesc.appendChild(cLabel);
        cLabel.appendChild(cInput);
        cLabel.appendChild(cSpan);
        
        divImg.appendChild(delImg);

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
    //select the div container for manipulate later
    const boxBook = document.querySelectorAll(".card-book");
    const btnRemove = document.querySelectorAll(".remove");
    btnRemove.forEach(button => {
        //add a listerner for each button
        button.addEventListener('click', () => {
            //iterate each array which storage all the books
            myLibrary.forEach((book) => {
                //check if the array object title is same with button id
                if(book.title === button.attributes[3].value) {
                    //make an index for reference when splice(delete)
                    const index = myLibrary.indexOf(book);
                    myLibrary.splice(index, 1);
                    //for html element delete the item matching with array delete
                    boxBook.forEach((item) => {
                        if(item.attributes[1].value === book.title){
                            //delete the tr or row in table
                            item.remove();
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
    const cbxButton = document.querySelectorAll(".is-read input");
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