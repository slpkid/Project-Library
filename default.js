const myLibrary = [];
const addTitle = document.getElementById("title")
const addAuthor = document.getElementById("author")
const addPageCount = document.getElementById("pages")
const addReadStatus = document.getElementById("read")
const addBookButton = document.getElementById("add-book-button")
const bookList = document.getElementById("book-list")
//remove book button
// removeBookButton = document.querySelector("")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (addReadStatus.checked) {
        this.read = "Read"
    } else {
        this.read = "Unread"
    }
}

addBookButton.addEventListener("click", function(e) {
    //read user input to create a new book object
    const newBook = new Book(
        addTitle.value,
        addAuthor.value,
        addPageCount.value,
        addReadStatus.value)
        //add new book to the library array...
        myLibrary.push(newBook)
    // visually push it now with addBookToLibrary func...
    addBookToLibrary(newBook)
});

// placeholder books

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '300', 'false');
const fahrenheit451 = new Book('Fahrenheit 451', 'Ray Bradbury', '281', 'true');
const shadesOfGray = new Book('Shades of Gray', 'Jasper Fforde', '1', 'false');

myLibrary.push(theHobbit);
myLibrary.push(fahrenheit451)
myLibrary.push(shadesOfGray)

// end placeholder books

function addBookToLibrary(bookObj) {
    // create div with text elements, remove button, and a checkbox inside.
    const para = document.createElement("li");
    const node = document.createTextNode(bookObj.title + " by " + bookObj.author + ". " + bookObj.pages + " pages. " + bookObj.read);
    para.appendChild(node);
    bookList.appendChild(para);
    // fill text elements in with values title,author, pages
    // if read === true, tick checkbox, else leave it as is.
    return
}

// function removeBook(book) {
    //  check current book's position in array...
    //  delete book from array
    //  run updateLibrary function
    //  or delete the input book from the DOM.
    //  ==> loop through DOM with input and iteratively remove elements
// }

// function updateLibrary() {
    //  check to see if library has contents
    //  delete all visual elements from current library
    //  reference const myLibrary to regenerate visual library contents
    //  or
    //  delete
// }

// submit event listener