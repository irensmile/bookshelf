// =====================Логика открыть/закрыть модалку===========================

import axios from 'axios';
import { throttle } from 'lodash';
import { getbookDetais } from './books-api';

const elements = {
  coverModal: document.querySelector('.cover-modal'),
  modalCoverContent: document.querySelector('.modal-cover-content'),
  closeBtn: document.querySelector('.modal-btn-close'),
  body: document.querySelector('body'),
  //====================Добавление товара в корзину================
  addBtn: document.querySelector('.add'),
  removeBtn: document.querySelector('.remove'),
  openListBtn: document.querySelector('.open-list'),
  modalText: document.querySelector('.modal-add-text'),
  booksListElement: document.querySelector('.books'),
};

elements.booksListElement.addEventListener('click', event => {
  let cardBookId = null;
  if (event.target.classList.contains('book-block'))
    cardBookId = event.target.dataset.book;
  else if (event.target.parentNode.classList.contains('book-block'))
    cardBookId = event.target.parentNode.dataset.book;
  else return;

  getBookInfo(cardBookId);
});


async function getBookInfo(id) {
  try {
    
    const bookData = await getbookDetais(id);
    // Записуємо id книжки в data tag, щоб знати, яка книга виділена
    elements.modalCoverContent.dataset.selectedBookId = bookData._id
    markupModal(bookData);
    openModl();
    changeTextBtn(bookData._id);

  } catch (error) {
    console.log(error);
  }
}

elements.removeBtn.addEventListener('click', () => {
  const selectedBookId = elements.modalCoverContent.dataset.selectedBookId;
  if (selectedBookId)
    removeBookFromList(selectedBookId);
});

elements.addBtn.addEventListener('click', async () => {
  const selectedBookId = elements.modalCoverContent.dataset.selectedBookId;
  if (selectedBookId) {
    // Нераціонально ще раз завантажувати інформацію про книгу тут
    // Треба переробити логіку, щоб в local storage зберігати тільки id книги, а не всю інформацію
    const bookData = await getbookDetais(selectedBookId);
    addBookToList(bookData);
  }
});


function markupModal(data) {
  const content = `
                <img src="${data.book_image}" alt="book cover" class="modal-img">

                <div class="modal-contant-box">
                    <h2 class="modal-title">${data.title}</h2>
                    <h3 class="modal-book-author">${data.author}</h3>
                    <p class="modal-text">${data.description}</p>
                    <ul class="modal-list">
                        ${markupBuyLinks(data.buy_links)}
                    </ul>
                </div>`;

  elements.modalCoverContent.innerHTML = content;
}

function markupBuyLinks(buyLinks) {
  return buyLinks.map((buyLink) => {
    let sellerLogo = null;
    switch (buyLink.name) {
      case 'Amazon': {
        sellerLogo = '../images/amazon_logo.jpg';
        break;
      }
      case 'Apple Books': {
        sellerLogo = '../images/apple_books.jpg';
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
      }
    }
    return `<li class="modal-item">
              <a href="${buyLink.url}" target="_blank" rel="noopener noreferrer nofollow" class="modal-link">
              <img src=${sellerLogo} alt=${buyLink.name} class="modal-icon amazone-js"></a>
    </li>`}
  ).join('');
}


function openModl() {
  elements.coverModal.classList.add('visible-element');

  elements.body.classList.add('no-scroll');

  document.addEventListener('keydown', throttle(escCloseModal, 500));
}

elements.coverModal.addEventListener('click', e => {
  if (
    e.target.classList.contains('cover-modal') ||
    e.target.classList.contains('modal-btn-close')
  ) {
    elements.coverModal.classList.remove('visible-element');
    elements.body.classList.remove('no-scroll');
    document.removeEventListener('keydown', escCloseModal);
  }
});

function escCloseModal(e) {
  if (e.key === 'Escape') {
    elements.coverModal.classList.remove('visible-element');
    document.removeEventListener('keydown', escCloseModal);
  }
}

//====================Добавление товара в корзину================

// function addBookToList(book) {
//   // console.log(book);
//   const booksInList = getBooksInList();
//   booksInList[book._id] = book;

//   saveBooksInList(booksInList);
//   changeTextBtn(book._id);
// }

// function removeBookFromList(book) {
//   const booksInList = getBooksInList();
//   // console.log(booksInList);
//   if (booksInList[book._id]) {
//     delete booksInList[book._id];
//     saveBooksInList(booksInList);
//   }
//   changeTextBtn(book._id);
// }

function addBookToList(book) {
  const booksInList = getBooksInList();
  const isBookInList = booksInList.some(
    existingBook => existingBook._id === book._id
  );
  if (!isBookInList) {
    booksInList.push(book);
    saveBooksInList(booksInList);
  }

  changeTextBtn(book._id);
}

function getBooksInList() {
  return JSON.parse(localStorage.getItem('booksInList')) ?? [];
}

function saveBooksInList(booksInList) {
  localStorage.setItem('booksInList', JSON.stringify(booksInList));
}

function changeTextBtn(id) {
  const booksInList = getBooksInList();
  const isBookInList = booksInList.some(book => book._id === id);

  if (isBookInList) {
    elements.addBtn.style.display = 'none';
    elements.removeBtn.style.display = 'block';
    elements.modalText.style.display = 'block';
  } else {
    elements.addBtn.style.display = 'block';
    elements.removeBtn.style.display = 'none';
    elements.modalText.style.display = 'none';
  }
}

function removeBookFromList(id) {
  const booksInList = getBooksInList();
  const updatedBooksList = booksInList.filter(book => book._id !== id);
  saveBooksInList(updatedBooksList);

  changeTextBtn(id);
}
