import axios from "axios";

axios.defaults.baseURL = 'https://books-backend.p.goit.global/';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.get('/books/top-books')
.then(res => fetchBooks(res.data));

const list = document.querySelector('.books')

function fetchBooks(data) {

    const markup = data.map((res) => {
        return `<div>${res.list_name}</div>
                <ul class="books-container">
                    ${booksMarkup(res.books)}
                </ul>`
      });
      list.insertAdjacentHTML('beforeend', markup)
      console.log(list)
}

function booksMarkup(books) {
    return books.map((book) => {
        return `<li>
            <img src="${book.book_image}" class="book-pic" width=120 heigh=240 />
            <p class="book-name">${book.title}</p>
            <p class="book-author">${book.author}</p>
        </li>`
    }).join('');
}
  
