const myLibrary = [];
//add book button
// addBookButton = document.querySelector("")
//remove book button
// removeBookButton = document.querySelector("")

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = read;
    myLibrary.push(this.title);
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', '300', 'false');
const fahrenheit451 = new Book('Fahrenheit 451', 'Ray Bradbury', '281', 'true');

// function addBookToLibrary() {
    // Run Book function using text input info.
    // add book.title to myLibrary array.
    // create div with text elements, remove button, and a checkbox inside.
    // fill text elements in with values title,author, pages
    // if read === true, tick checkbox, else leave it as is.
// }

// function removeBook(book) {
    //delete book from array
    //run updateLibrary function
    //or delete the input book from the DOM.
    // ==> loop through DOM with input and iteratively remove elements
// }

// function updateLibrary() {
    //delete all visual elements from current library
    //reference const myLibrary to regenerate visual library contents
    //or
    //delete
// }

// submit event listener