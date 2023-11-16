import { getTopBooks, getBooksByCategory } from "./books-api";
const list = document.querySelector('.books')
const categoryList = document.querySelector('.categories-list');
const booksCategoryName = document.querySelector("#books-category-name");

const loadScreenOptions = {
        backgroundColor: 'rgba(82,48,232, 0.85)',
        messageColor: 'rgba(234, 198, 67, 1)',
        svgColor: 'rgba(234, 198, 67, 1)'
    }
// Завантаження даних перенесено в books-api.js
// Ця функція буде викликана при початовому завантаженні сторінки для заповнення Top Books
loadOnStartup();

async function loadOnStartup() {
    Notiflix.Loading.circle("Loading...", loadScreenOptions);
    // Функція оголошена, як асинхронна, так як ми маємо дочекатися завантаження даних.
    const booksData = await getTopBooks();
    // після одержання даних викликаємо функцію, яка генерує html розмітка
    const markup = categoriesMarkup(booksData);
    list.insertAdjacentHTML('beforeend', markup);
    Notiflix.Loading.remove();
}

function categoriesMarkup(data) {
    // Функція створює розмітку для одержаних категорій
    // Далі для кожної категорії викликаємо функцію розмітки для книг (booksMarkup)
    return data.map((res) => {
        return singleCategoryMarkup(res.list_name, res.books, false)
    });
}

function singleCategoryMarkup(categoryName, books, isSingleCategory) {
    let markup = !isSingleCategory ? `
    <div class = "books-list-name" >${categoryName}</div>` : '';
    markup +=  `<ul class="books-container ${isSingleCategory ? 'books-container-multi': ''}">
                    ${booksMarkup(books)}
                </ul>`
    const buttonMarkup = !isSingleCategory ? `<button class = "books-btn" type = "button" id="${categoryName}"> SEE MORE </button>` : '';
    markup += buttonMarkup
    return markup;
}

function booksMarkup(books) {
    // Функція створює розмітку для списку книг
    return books.map((book) => {
        return `<li class="book-block-two">
                <div data-book=${book._id} class="book-block">
                    <img src="${book.book_image}" class="book-pic" width=120 heigh=240 />
                    <p class="book-name">${book.title}</p>
                    <p class="book-author">${book.author}</p>
                </div>
         </li>`
    }).join('');
}

// const httpRequest = new XMLHttpRequest();

// function newList() {
    
    
//     return `<div class = "books-list-name" ></div>
//     <ul class="books-container">
//     </ul>`
// }

// Наступний код треба видалити:
// 1. Він виконується тільки раз при завантаженні сторінки
// 2. У нас на даний момент немає виділеної категорії, яку треба завантажити
// 3. Ми використовуємо бібліотеку axios для http запитів
/*
httpRequest.onreadystatechange = newList;
httpRequest.open("GET", "https://books-backend.p.goit.global/books/category?category=selectedCategory", true);
httpRequest.setRequestHeader(
    "Content-Type",
    "application/json",
  );
httpRequest.send();
*/

// Так само, категорії ще не завантажені на цей час.
// Краще підписатися на клік батьківсьго елементу.
/*
const categoryItems = document.querySelectorAll('.categ-item');
categoryItems.forEach(function(category) {
    category.addEventListener("click", function() {
        const selectedCategory = categoryItems.value;
        const url = "https://books-backend.p.goit.global/books/category?category=" + selectedCategory;
        axios.get(url)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.error(error));

    })
})*/

// Обробник кліку на категорії - завантажуємо книги для категорії і виділяємо акитивну категорію
categoryList.addEventListener("click", async (e) => {
    e.preventDefault();
    
    if (e.target == categoryList) {
        // Натиснули на список, а не на елемент (між елементами), ігноруємо
        return;
    }
    const selectedCategory = e.target.innerHTML;
    reloadBooksForCategory(selectedCategory);
});

async function reloadBooksForCategory(selectedCategory) {
    Notiflix.Loading.circle("Loading...", loadScreenOptions);
    for (const child of categoryList.children)
        if (child.innerHTML != selectedCategory)
            child.classList.remove('is-active-item');
        else
            child.classList.add('is-active-item');
    
    let markup = null
    if (selectedCategory == "All categories") {
        populateCategoryHeader('Best Sellers Books');
        const data = await getTopBooks();
        markup = categoriesMarkup(data);
    }
    else {
        populateCategoryHeader(selectedCategory);
        const data = await getBooksByCategory(selectedCategory);  
        markup = singleCategoryMarkup(selectedCategory, data, true);
    }
    list.innerHTML = markup;
    Notiflix.Loading.remove();
    window.scrollTo({ top: 0, behavior: "smooth"})
}

function populateCategoryHeader(categoryName) {
    // Update categories header (h1) with selected category name
    const words = categoryName.split(" ")
    booksCategoryName.innerHTML = `<span class="dark-text">${words[0]}</span> ${words.slice(1).join(' ')}`;
}

// Це не працює - код виконується, коли кнопки ще не створені (або можуть бути перезавантажені)
// Як варіант, можна підписатися на onclick до батьківського div, який завжди існує і далі визначить, коли клік приходить від кнопки
// const buttonsForCateg = document.querySelectorAll(".books-btn");
// console.log('Batoni', buttonsForCateg);
// buttonsForCateg.forEach(function(button) {
//     button.addEventListener("click", function() {
//         const showList = categoryItems.map(url)
//     list.insertAdjacentHTML("beforeend", showList)
//     console.log(list)
//     });
// });

list.addEventListener('click', async (event) => {
    // Тільки коли клікнули на кнопці, завантажуємо книги цієї категорії
    if (event.target.classList.contains('books-btn')) {
        const selectedCategory = event.target.id;
        reloadBooksForCategory(selectedCategory);
    }
})
