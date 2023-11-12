import axios from "axios";

axios.defaults.baseURL = 'https://books-backend.p.goit.global/';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.get('/books/top-books')
.then(res => fetchBooks(res.data));



axios.get(`https://books-backend.p.goit.global/books/category?category=selectedCategory`)
    .then(response => newListBooks(response.data))
    .catch(error => console.error(error));


const list = document.querySelector('.books')

function fetchBooks(data) {

    const markup = data.map((res) => {
        return `<div class = "books-list-name" >${res.list_name}</div>
                <ul class="books-container">
                    ${booksMarkup(res.books)}
                </ul>
                <a href="https://books-backend.p.goit.global/books/category?category=selectedCategory>"
                <button class = "books-btn" type = "button" id = "${res.list_name}"> SEE MORE </button>
                </a>`
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

    function newListBooks(data){
        console.log(data)
    }

    list.addEventListener('click', function(event) {
        // Перевіряємо, чи клік був на елементі з класом "books-btn"
        if (event.target.classList.contains('books-btn')) {
            // Отримуємо id кнопки (res.list_name) для подальшого використання в запиті
            const id = event.target.id;
    
            // Виклик Axios з отриманим id
            axios.get(`https://books-backend.p.goit.global/books/category?category=${id}`)
                .then(response => newListBooks(response.data))
                .catch(error => console.error(error));
        }
    });