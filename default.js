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
    this.info = this.title + " by " + this.author + ". " + this.pages + " pages. " + this.read;
    this.rgb = `rgb(${randomColor()})`;
    this.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
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
    const node = document.createTextNode(bookObj.title);
    const arrayNum = `num${myLibrary.length}`;
    list.appendChild(node);
    list.setAttribute("class", arrayNum);

    // Give each new book a random color...
    list.style.backgroundColor = bookObj.rgb;
    bookList.appendChild(list);

    //create dialogue button
    const dialogueButton = document.createElement("button");
    dialogueButton.textContent = "open";
    list.append(dialogueButton);
    
    //create dialogue box...
    const dialogue = document.createElement("dialog");
    dialogue.style.border = `5px solid ${bookObj.rgb}`;
    list.append(dialogue);
    
    //create dialogue div
    const dialogueDiv = document.createElement("div");
    dialogue.append(dialogueDiv);
    
    //create info blurb
    const bookInfo = document.createElement("p");
    bookInfo.textContent = bookObj.info;
    bookInfo.setAttribute("class", "book-info");
    dialogueDiv.append(bookInfo);
    
    //create lorem ipsum text on right hand side of page
    const blurb = document.createElement("p");
    blurb.textContent = bookObj.lorem;
    blurb.setAttribute("class", "book-blurb")
    dialogueDiv.append(blurb);
    
    //create close button...
    const dialogueCloseButton = document.createElement("button");
    dialogueCloseButton.textContent = "X";
    dialogueDiv.append(dialogueCloseButton);
    
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

    //dialogue event listeners 
    dialogueButton.addEventListener("click",(e) => {
        dialogue.showModal();
    });
    
    dialogueCloseButton.addEventListener("click", (e) => {
        dialogue.close();
    });
    dialogue.addEventListener("click", (e) => {
        if(e.target === dialogue) {
            dialogue.close();
        }
    })
    
    addTitle.value = '';
    addAuthor.value = '';
    addPageCount.value = '';
    addReadStatus.checked = false;
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
    
function randomColor() {
    // take 3 random num generators
    let r = Math.round(Math.random()*(255 - 0) + 0)
    let g = Math.round(Math.random()*(255 - 0) + 0)
    let b = Math.round(Math.random()*(255 - 0) + 0)
    // create String with the three numbers (xxx, xxx, xxx)
    // return string
    return (`${r}, `+`${g}, `+`${b}`);
}

// Instead of creating elements through the addBookToLibrary function, create an updateLibrary 
// function that loops through myLibrary and renders each of the items whenever there's an update (addition or deletion to list)
