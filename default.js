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

function addBookToLibrary(bookObj) {
    // create div with text elements, blurb, remove button.
    const list = document.createElement("li");
    const node = document.createTextNode(bookObj.title + " by " + bookObj.author + ". " + bookObj.pages + " pages. " + bookObj.read);
    const arrayNumLength = myLibrary.length;
    const arrayNum = `num${myLibrary.length}`;
    list.appendChild(node);
    list.setAttribute("class", arrayNum);
    bookList.appendChild(list);

    //create delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    list.appendChild(deleteButton);
    deleteButton.addEventListener("click", (e) => {
        const removeTarget = myLibrary.length-1;
        // removes the list element with the corresponding class
        list.closest(`.${arrayNum}`).remove();
        // remove item from array
        myLibrary.push(myLibrary.splice(removeTarget,1)[0]); //if removing item from middle of list then removing last item, creates an undefined entry. not sure why this is happening but here's a stupid fix i guess...
        myLibrary.pop();
        if (myLibrary[removeTarget]) {
            myLibrary.pop();
        }
    });

    //reinitialize input fields
    addTitle.value = '';
    addAuthor.value = '';
    addPageCount.value = '';
    addTitle.focus();
    return
}

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