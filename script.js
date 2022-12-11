const libaryContainer = document.querySelector("#bookshelf")
const form = document.querySelector("form")
const submitBtn = document.querySelector("#addBook > form > button")
let myLibrary = [
    {
        title: "48 Laws Of Power",
        author: "Robert Greene",
        pages: "240",
        readStatus: true
    },
    {
        title: "How To Win Friends And Influence People",
        author: "Dale Carnegie",
        pages: "200",
        readStatus: true
    }
];

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
        this.info = function () {
            console.log(`${title} by ${author}, ${pages} pages, ${readStatus}`);
        };
        console.log(this.info());
    }
}

function addBookToLibrary(){
    libaryContainer.innerHTML = "";
    for (const newBook of myLibrary){

        const bookTitle = document.createElement("span");
        bookTitle.className = "bookTitle";

        const bookAuthor = document.createElement("span");
        bookAuthor.className = "bookAuthor";

        const bookPages = document.createElement("span");
        bookPages.className = "bookPages";

        const bookRead = document.createElement("span");
        bookRead.className = "bookRead";

        const checkRead = document.createElement("input");
        checkRead.type = "checkbox";
        checkRead.className = "checkRead";

        bookTitle.textContent = `Title: ${newBook.title}`;
        bookAuthor.textContent = `Author: ${newBook.author}`;
        bookPages.textContent = `${newBook.pages} pages`;
        bookRead.textContent = "Read?"

        /*if(newBook.readStatus === true){
            bookRead.textContent = "Read";
        }else{
            bookRead.textContent = "Not Read";
        }*/

        const book = document.createElement("div");
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(bookRead);
        book.appendChild(checkRead);
        book.className = "book";
        libaryContainer.appendChild(book);

        //const aBook = document.createElement("div");
        //aBook.c<<<<<<lassName = "bookDiv";

    }
}
form.addEventListener("submit",(event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd);
    myLibrary.push(obj);
    addBookToLibrary();
});
addBookToLibrary();