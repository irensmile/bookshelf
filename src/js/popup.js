// =====================Логика открыть/закрыть модалку===========================

import axios from 'axios';
import { throttle } from 'lodash';

const elements = {
  coverModal: document.querySelector('.cover-modal'),
  modalCoverContant: document.querySelector('.modal-cover-contant'),
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
  const BASE_URL = 'https://books-backend.p.goit.global/books/';
  try {
    const respons = await axios(BASE_URL + id);
    const bookData = respons.data;

    marcapModal(bookData);

    elements.addBtn.addEventListener('click', () => addBookToList(bookData));

    openModl();

    changeTextBtn(bookData._id);

    elements.removeBtn.addEventListener('click', () =>
      removeBookFromList(bookData._id)
    );
  } catch (error) {
    console.log(error);
  }
}

function marcapModal(data) {
  const content = `
                <img src="${data.book_image}" alt="book cover" class="modal-img">

                <div class="modal-contant-box">
                    <h2 class="modal-title">${data.title}</h2>
                    <h3 class="modal-book-author">${data.author}</h3>
                    <p class="modal-text">In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark past
                        resurfaces
                        as
                        he gets to the know
                        the family
                        of his college sweetheart.</p>
                    <ul class="modal-list">
                        <li class="modal-item"><a href="${data.buy_links[0].url}" target="_blank" rel="noopener noreferrer nofollow"
                                class="modal-link">
                                <img src="../images/amazon_logo.jpg" alt="" class="modal-icon amazone-js">
                            </a></li>
                        <li class="modal-item"><a href="${data.buy_links[1].url}" target="_blank" rel="noopener noreferrer nofollow"
                                class="modal-link">
                                <img src="../images/apple_books.jpg" alt="" class="modal-icon">

                            </a></li>
                    </ul>
                </div>
    `;

  elements.modalCoverContant.innerHTML = content;
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

function addBookToList(book) {
  console.log(book);
  const booksInList = getBooksInList();
  const isBookInList = booksInList.some(
    existingBook => existingBook._id === book._id
  );
  console.log(booksInList);
  if (!isBookInList) {
    booksInList.push(book);
    console.log(booksInList);
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
  console.log(updatedBooksList);
  saveBooksInList(updatedBooksList);

  changeTextBtn(id);
}
