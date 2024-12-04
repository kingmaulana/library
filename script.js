

//Store all object of books
const myLibrary = [];

//Object of Book 
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.isRead = isRead
    }

    static addBookToLibrary(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead

        return myLibrary.push(new Book(this.title, this.author, this.pages, this.isRead))
    }
}

//Add book
Book.addBookToLibrary('A Tale of Two Cities', 'Charles Dickens', 110, true);

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
    
    //iterate over the array collection of books
    let content = document.createElement('div');
    myLibrary.forEach(function(book) {
        content.className = "card-book"
        content.setAttribute = ('book-ref', `${book.title}`)
        content.innerHTML = 
            `<div class="my-img">
                <img src="img/bcover${lastNumber}.png" alt="book">
                <img src="alpha-x-circle.svg" alt="x" class="remove" book-ref='${book.title}'>
            </div>
            <div class="desc-book">
                <p class="p-title">
                    <strong>Title: </strong>
                    ${book.title}
                </p>
                <p class="p-author">
                    <strong>Author: </strong>
                    ${book.author}
                </p>
                <p class="p-pages">
                    <strong>Pages: </strong>
                    ${book.pages}
                </p>
                <label class="is-read">Finished
                    <input type="checkbox">
                    <span class="checkmark"></span>
                </label>
            </div>`
        container.appendChild(content)
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
        Book.addBookToLibrary(title.value, author.value, pages.value, inputCheckbox.checked);
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
                        let bookItem = item.attributes[0].ownerElement.setAttribute;
                        if(bookItem === book.title){
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