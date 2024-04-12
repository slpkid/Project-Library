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

const theHobbit = new Book('The Hobbit', 'JRR Tolki en', '300', 'false');
const fahrenheit451 = new Book('Fahrenheit 451', 'Ray Bradbury', '281', 'true');
const shadesOfGray = new Book('Shades of Gray', 'Jasper Fforde', '1', 'false');

myLibrary.push(theHobbit);
myLibrary.push(fahrenheit451)
myLibrary.push(shadesOfGray)

// end placeholder books

function deleteItem(e) {
    e.parentElement.remove();
}

function addBookToLibrary(bookObj) {
    // create div with text elements, blurb, remove button.
    const arrayNum = myLibrary.length;
    const list = document.createElement("li");
    const node = document.createTextNode(bookObj.title + " by " + bookObj.author + ". " + bookObj.pages + " pages. " + bookObj.read);
    const eek = `num${arrayNum}`
    list.appendChild(node);
    list.setAttribute("class", `num${arrayNum}`)
    bookList.appendChild(list);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    list.appendChild(deleteButton);
    deleteButton.addEventListener("click", (e) => {
        // removes the list element with the corresponding class
        list.closest(`.${eek}`).remove();
        // remove item from array
        myLibrary.push(myLibrary.splice(arrayNum-1,1)[0]);
        myLibrary.pop();
    });
    //reinitialize input fields
    addTitle.value = '';
    addAuthor.value = '';
    addPageCount.value = '';
    addTitle.focus();
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

// function randomColor
    // function random num
    // take 3 random num generators
    // create String with the three numbers (xxx, xxx, xxx)
    // return string

// submit event listener