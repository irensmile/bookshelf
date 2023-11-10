import axios from "axios";
import Notiflix from "notiflix";

const list = document.querySelector('.categories-list');

axios.defaults.baseURL = 'https://books-backend.p.goit.global/';

function fetchCategories() {
  return axios.get('/books/category-list').then(resp => {
        return resp.data;
    });
}

function foo() {
    fetchCategories()
        .then(categories => {
            markupCateg(categories)
        })
        .catch(err => {
            console.log(err)
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
        });
}

function markupCateg(categories) {
    const markup = categories.map((category) => {
        return `<li class="categ-item">${category.list_name}</li>`
    }).sort((a, b) => a.localeCompare(b)).join('');
    list.insertAdjacentHTML('beforeend', markup)
}

foo()