
const elements = {
container: document.querySelector('.js-list'),
totalQuantity: document.querySelector('.js-quantity'),
clearBtn: document.querySelector('.js-close'),
pageName: document.querySelector('.js-title'),
// booksImg: document.querySelector('.js-books')
}
const BOOKS_KEY = 'shoppinglist'
const books = JSON.parse(localStorage.getItem(BOOKS_KEY)) ?? [];

elements.container.insertAdjacentHTML('afterbegin', createMarkup(books));

console.log(books);
function createMarkup(arr) {
  return arr.map(({img, titlle, category, desc, author})=> `
<li class='card-item' class='book-img'>
  <img src='${img}' alt ='${titlle}'>
  <h2>${titlle}</h2>
  <p>${category}</p>
  <h3>${desc}</h3>
  <p>${author}</p>
</li>
<button type="button" class="js-close">Close</button>`).join('');
}

if (books.length){
  const quantity = books.reduce((acc, {qty}) => acc + qty, 0);
  elements.totalQuantity.textContent = quantity;
  elements.container.insertAdjacentHTML('afterbegin', createMarkup(books));
  elements.clearBtn.addEventListener(click, handlerClearBasket)
  } else {
    elements.totalQuantity.textContent = 'This page is empty, add some books and proceed to order.'
  }


  function handlerClearBasket() {
    localStorage.removeItem(BOOKS_KEY);
  }