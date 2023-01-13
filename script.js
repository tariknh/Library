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
    }
    get read(){
        if(this.readStatus === "on"){
            return "Read";
        }else{
            return "Not Read";
        }
    }
    info(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`);
    }
}
const exBook = new Book("title","author","200","Read");
console.log(exBook);

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
        if(newBook.readStatus){
            checkRead.checked = true;
        }

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
    console.log(obj);
    const newBook = new Book(obj.title,obj.author,obj.pages,obj.read);
    console.log(newBook.read);
    myLibrary.push(newBook)
    //myLibrary.push(obj);
    addBookToLibrary();
});
addBookToLibrary();