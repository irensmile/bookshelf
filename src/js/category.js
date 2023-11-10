import axios from 'axios';
import Notiflix from 'notiflix'; 

const BASE_URL = 'https://books-backend.p.goit.global/books/';
const endpointList = 'category-list';

async function fetchCategories() {
    try {
      const response = await axios.get(BASE_URL + endpointList);
    
      if (response.status === 200) {
        console.log(response.data);
        const categories = response.data; 
        const categoriesList = document.querySelector('.categories-list');

        categories.map(category => {
          const li = document.createElement('li');
          li.textContent = category.name;
          categoriesList.appendChild(li);
        });
      } else {
        Notiflix.Notify.failure(`Request execution error. Status code: ${response.status}`);
      }
    } catch (error) {
        Notiflix.Notify.failure('An error occurred while sending the request.');
        console.error('An error occurred while sending the request:', error);
    }
  }
  
  fetchCategories();
  
  
  
  
  
  
  
  
  
  
  
  

// const list = document.querySelector('.categories-list');

// function fetchCategories() {
//   return fetch("https://books-backend.p.goit.global/books/category-list")
//     .then(resp => {
//         if (!resp.ok) {
//             throw new Error;
//         }
//         return resp.json();
//     })
// }

// function foo() {
//     fetchCategories()
//         .then(categories => {
//             markupCateg(categories)
//         })
//         .catch(err => {
//             console.log(err)
//         });
// }

// function markupCateg(categories) {
//     const markup = categories.map((category) => {
//         return `<li class="categ-item">${category.list_name}</li>`
//     }).join('');
//     list.insertAdjacentHTML('beforeend', markup)
// }

// foo()