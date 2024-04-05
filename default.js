const myLibrary = [];
addTitle = document.getElementById("title")
addAuthor = document.getElementById("author")
addPageCount = document.getElementById("pages")
addReadStatus = document.getElementById("read")
addBookButton = document.getElementById("add-book-button")
//remove book button
// removeBookButton = document.querySelector("")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = read;
}

addBookButton.addEventListener("click", function(e) {
    const newBook = new Book(
        addTitle.value,
        addAuthor.value,
        addPageCount.value,
        addReadStatus.value)
        myLibrary.push(newBook)
});

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '300', 'false');
const fahrenheit451 = new Book('Fahrenheit 451', 'Ray Bradbury', '281', 'true');
const shadesOfGray = new Book('Shades of Gray', 'Jasper Fforde', '1', 'false');

// function addBookToLibrary() {
    // Run Book function using text input info.
    // add book.title to myLibrary array.
    // create div with text elements, remove button, and a checkbox inside.
    // fill text elements in with values title,author, pages
    // if read === true, tick checkbox, else leave it as is.
// }

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