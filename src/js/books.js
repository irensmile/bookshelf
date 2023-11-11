import axios from "axios";

axios.defaults.baseURL = 'https://books-backend.p.goit.global/';

axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.get('/books/top-books')
.then(res => fetchBooks(res.data));

const list = document.querySelector('.books')

function fetchBooks(data) {

const markup = data.map((res) => {
          return `<ul class="books-list"> 
                  <li> 
                     <img src="${res.book_image}" class="book-pic" />
                     <p class="book-name">${res.title}</p>
                      <p class="book-author">${res.author}</p>
                  </li>
                 </ul>`
      });
      list.insertAdjacentHTML('beforeend', markup)
      console.log(list)
}
  
