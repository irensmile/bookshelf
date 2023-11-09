const list = document.querySelector('.categories-list');

function fetchCategories() {
  return fetch("https://books-backend.p.goit.global/books/category-list")
    .then(resp => {
        if (!resp.ok) {
            throw new Error;
        }
        return resp.json();
    })
}

function foo() {
    fetchCategories()
        .then(categories => {
            markupCateg(categories)
        })
        .catch(err => {
            console.log(err)
        });
}

function markupCateg(categories) {
    const markup = categories.map((category) => {
        return `<li class="categ-item">${category.list_name}</li>`
    }).join('');
    list.insertAdjacentHTML('beforeend', markup)
}

foo()


