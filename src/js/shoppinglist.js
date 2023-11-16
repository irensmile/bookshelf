
const elements = {
container: document.querySelector('.js-list'),
totalQuantity: document.querySelector('.js-quantity'),
clearBtn: document.querySelector('.js-clear'),
pageName: document.querySelector('.js-title'),
message: document.querySelector('.js-message'),
booksImg: document.querySelector('.js-books'),
}

const BOOKS_KEY = 'booksInList'
var books = null;

updateShoppingCart();

elements.container.addEventListener('click', (event) => {
  if (event.target.classList.contains('icon-delete'))
    handlerRemoveSingleBook(event.target.parentNode.dataset.id);
})

function createMarkup(arr) {
  return arr.map(({_id, book_image, title, list_name, description, author, buy_links})=> `
<li data-id='${_id}' class='card-item'>
    <img src='${book_image}' alt ='${title}' class='img'>
    <div class="info">
      <h2 class='shopping_title description-title'>${title}</h2>
      <p class='list_name'>${list_name}</p>
      <h3 class='text description'>${description}</h3>
      <div class='info-author-socials'>
        <p class= 'shopping_author'>${author}</p>
        <ul class="socials_list">
          ${createBuyLinksMarkup(buy_links)}
        </ul>
      </div>
    </div>

  <button type="button" class="js-clear btn-delete", data-id=${_id}>
    <svg class="icon-delete" width="28" height="28">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
  </button>

</li>`).join('');
}

function createBuyLinksMarkup(buyLinks) {
    return buyLinks.slice(0, 2).map((buyLink) => {
      let sellerLogo = null;
      let cssClass = null;
      switch (buyLink.name) {
        case 'Amazon': {
          cssClass = "social-icon-amazon"
          sellerLogo = '../images/amazon_logo.svg';
          break;
        }
        case 'Apple Books': {
          sellerLogo = '../images/apple_books.svg';
          cssClass = "social-icon-book";
          break;
        }
        // case 'Barnes and Nobel': {
        //   sellerLogo = '';
        //   break;
        // }
        // case 'Books-A-Million': {
        //   sellerLogo = '';
        //   break;
        // }
        // case 'BookShop': {
        //   sellerLogo = '';
        //   break;
        // }
        // case 'Indie Bound': {
        //   sellerLogo = '';
        //   break;
        // }
        default: {
          sellerLogo = '../images/book.jpg';
          cssClass = "social-icon-book";
        }
      }
      return `<li class = "book-icon">
      <a
        class=${cssClass}
        href=${buyLink.url}
        target="_blank"
      rel="nofollow noopener noreferree"
        aria-label="Book icon"
      >
      <img src=${sellerLogo} alt="${buyLink.name}" width ='32px' height='32px'/>
      </a>
  </li>`}
  ).join('');
}

function updateShoppingCart() {
  books = JSON.parse(localStorage.getItem(BOOKS_KEY)) ?? [];
  if (books.length) {
    elements.booksImg.style.display = 'none';
    elements.message.style.display = 'none';
    elements.container.innerHTML = createMarkup(books);

  } else {
    elements.container.innerHTML = "";
    elements.booksImg.style.display = "block";
    elements.message.style.display = 'block';
    elements.booksImg.style.visibility = 'visible';
    elements.message.style.visibility = 'visible';
  }
}

function handlerRemoveSingleBook(idToDelete) {
  const updatedBooksList = books.filter(book => book._id !== idToDelete);
  if (updatedBooksList.length == 0)
    localStorage.removeItem(BOOKS_KEY);
  else
    localStorage.setItem(BOOKS_KEY, JSON.stringify(updatedBooksList));
  //window.location.href = "./index.html";
  updateShoppingCart();

}

function handlerClearBasket(evt) {
  localStorage.removeItem(BOOKS_KEY);
  window.location.href = "./index.html";
}


