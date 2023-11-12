import axios from "axios";

axios.defaults.baseURL = 'https://books-backend.p.goit.global/';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.get('/books/top-books')
.then(res => fetchBooks(res.data));



const list = document.querySelector('.books')

function fetchBooks(data) {

    const markup = data.map((res) => {
        return `<div class = "books-list-name" >${res.list_name}</div>
                <ul class="books-container">
                    ${booksMarkup(res.books)}
                </ul>
                
                <button class = "books-btn" type = "button" id = "${res.list_name}"> SEE MORE </button>
                `
      });
      list.insertAdjacentHTML('beforeend', markup)
      console.log(list)
}

function booksMarkup(books) {
    return books.map((book) => {
        return `<li class = "book-block">
            <img src="${book.book_image}" class="book-pic" width=120 heigh=240 />
            <p class="book-name">${book.title}</p>
            <p class="book-author">${book.author}</p>
        </li>`
    }).join('');
}

const httpRequest = new XMLHttpRequest();

function newList() {
    
    
    return `<div class = "books-list-name" ></div>
    <ul class="books-container">
    </ul>`
}

httpRequest.onreadystatechange = newList;
httpRequest.open("GET", "https://books-backend.p.goit.global/books/category?category=selectedCategory", true);
httpRequest.setRequestHeader(
    "Content-Type",
    "application/json",
  );
httpRequest.send();

const categoryItems = document.querySelectorAll('.categ-item');
categoryItems.forEach(function(category) {
    category.addEventListener("click", function() {
        const selectedCategory = categoryItems.value;
        const url = "https://books-backend.p.goit.global/books/category?category=" + selectedCategory;
        axios.get(url)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.error(error));

    })
})





const buttonsForCateg = document.querySelectorAll(".books-btn");

buttonsForCateg.forEach(function(button) {
    button.addEventListener("click", function() {
        const showList = categoryItems.map(url)
    list.insertAdjacentHTML("beforeend", showList)
    console.log(list)
    });
});

// categoryItems.addEventListener("click", function() { 
//     const selectedCategory = categoryItems.value;
//     const url = "https://books-backend.p.goit.global/books/category?category=" + selectedCategory;
//     axios.get(url)
//         .then(response) })
