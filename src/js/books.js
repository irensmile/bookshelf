import { getTopBooks, getBooksByCategory } from "./books-api";
const list = document.querySelector('.books')
const booksCategoryName = document.querySelector("#books-category-name");

// Завантаження даних перенесено в books-api.js
// Ця функція буде викликана при початовому завантаженні сторінки для заповнення Top Books
loadOnStartup();

async function loadOnStartup() {
    // Функція оголошена, як асинхронна, так як ми маємо дочекатися завантаження даних.
    const booksData = await getTopBooks();
    // після одержання даних викликаємо функцію, яка генерує html розмітка
    categoriesMarkup(booksData);
}

function categoriesMarkup(data) {
    // Функція створює розмітку для одержаних категорій
    // Далі для кожної категорії викликаємо функцію розмітки для книг (booksMarkup)
    const markup = data.map((res) => {
        return singleCategoryMarkup(res.list_name, res.books, false)
    });
    list.insertAdjacentHTML('beforeend', markup)
}

function singleCategoryMarkup(categoryName, books, isSingleCategory) {
    let markup = !isSingleCategory ? `<div class = "books-list-name" >${categoryName}</div>` : '';
    markup +=  `<ul class="books-container ${isSingleCategory ? 'books-container-multi': ''}">
                    ${booksMarkup(books)}
                </ul>
                <button class = "books-btn" type = "button" id = "${categoryName}"> SEE MORE </button>
                `
    return markup;
}

function booksMarkup(books) {
    // Функція створює розмітку для списку книг
    return books.map((book) => {
        return `<li>
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
const categoryList = document.querySelector('.categories-list');

// Обробник кліку на категорії - завантажуємо книги для категорії і виділяємо акитивну категорію
categoryList.addEventListener("click", async (e) => { 
    e.preventDefault();
    
    if (e.target == categoryList) {
        // Натиснули на список, а не на елемент (між елементами), ігноруємо
        return;
    }
    const selectedCategory = e.target.innerHTML;
    for (const child of e.currentTarget.children) {
        console.log(child.classList.remove('is-active-item'));
    }
    e.target.classList.add('is-active-item');
    
    let markup = null
    if (selectedCategory == "All categories") {
        populateCategoryHeader('Best Sellers Books');
        const data = await getTopBooks(); 
        markup = categoriesMarkup(selectedCategory, data, false);
    }
    else {
        populateCategoryHeader(selectedCategory);
        const data = await getBooksByCategory(selectedCategory);  
        markup = singleCategoryMarkup(selectedCategory, data, true);
    }
    list.innerHTML = markup;
})

function populateCategoryHeader(categoryName) {
    // Update categories header (h1) with selected category name
    const words = categoryName.split(" ")
    booksCategoryName.innerHTML = `<span class="dark-text">${words[0]}</span> ${words.slice(1).join(' ')}`;
}


const buttonsForCateg = document.querySelectorAll(".books-btn");

buttonsForCateg.forEach(function(button) {
    button.addEventListener("click", function() {
        const showList = categoryItems.map(url)
    list.insertAdjacentHTML("beforeend", showList)
    console.log(list)
    });
});

// categoryItems.addEventListener("click", function() { 
//     const selectedCategory = categoryItems.value;
//     const url = "https://books-backend.p.goit.global/books/category?category=" + selectedCategory;
//     axios.get(url)
//         .then(response) })
