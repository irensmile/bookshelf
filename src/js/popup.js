// =====================Логика открыть/закрыть модалку===========================

const elements = {
  // должна замениться на ссылку книиги
  //   startBtn: document.querySelector('.btn-js'),
  modal: document.querySelector('.cover-modal'),
  closeBtn: document.querySelector('.modal-btn-close'),
};

elements.startBtn.addEventListener('click', () => {
  elements.modal.classList.add('visible-element');

  // проверка для отрисовки кнопок если книга в корзине
  changeTextBtn();

  document.addEventListener('keydown', escCloseModal);
});

elements.modal.addEventListener('click', e => {
  if (
    e.target.classList.contains('cover-modal') ||
    e.target.classList.contains('modal-btn-close')
  ) {
    elements.modal.classList.remove('visible-element');
    document.removeEventListener('keydown', escCloseModal);
  }
});

function escCloseModal(e) {
  if (e.key === 'Escape') {
    elements.modal.classList.remove('visible-element');
    document.removeEventListener('keydown', escCloseModal);
  }
}
// // ==================================================

//====================Добавление товара в корзину================

const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');
// --------добавил от себя єту кнопку, мне показалась она умесной (в html тоже)
const openListBtn = document.querySelector('.open-list');
const modalText = document.querySelector('.modal-add-text');

addBtn.addEventListener('click', addBookToList);
removeBtn.addEventListener('click', removeBookFromList);

// При нажатии на книгу(ссылку) по логике оно должно отправлять запрос для полной информации о книге и от этого отрисовывать модальное
// окно. при нажатии кнопки добавить в єту функцию аргументом должен приходить обект которій и запишеться в localStorage.

function addBookToList(book) {
  try {
    localStorage.setItem(`${book._id}`, JSON.stringify(book));

    changeTextBtn(`${book._id}`);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function changeTextBtn(id) {
  const bookInList = localStorage.getItem(id);

  if (bookInList === null) {
    return;
  }
  addBtn.style.display = 'none';
  removeBtn.style.display = 'block';
  openListBtn.style.display = 'flex';
  modalText.style.display = 'block';
}

// Эту надо будет подправить при подклучении основного функционала

// function removeBookFromList() {
//   localStorage.removeItem(`${book._id}`);

//   addBtn.style.display = 'block';
//   removeBtn.style.display = 'none';
//   openListBtn.style.display = 'none';
//   modalText.style.display = 'none';
// }

// ===========================================
