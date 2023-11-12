import"./assets/scroll-up-760bcafc.js";import{a as n,N as l}from"./assets/vendor-77e6b4aa.js";const u="https://books-backend.p.goit.global/books/",d="category-list";async function b(){try{const t=await n.get(u+d);if(t.status===200){console.log(t.data);const e=t.data,o=document.querySelector(".categories-list");e.map(s=>{const r=document.createElement("li");r.textContent=s.list_name,r.classList.add("categ-item"),o.appendChild(r)})}else l.Notify.failure(`Request execution error. Status code: ${t.status}`)}catch(t){l.Notify.failure("An error occurred while sending the request."),console.error("An error occurred while sending the request:",t)}}b();n.defaults.baseURL="https://books-backend.p.goit.global/";n.defaults.headers.post["Content-Type"]="application/json";n.get("/books/top-books").then(t=>g(t.data));const a=document.querySelector(".books");function g(t){const e=t.map(o=>`<div class = "books-list-name" >${o.list_name}</div>
                <ul class="books-container">
                    ${p(o.books)}
                </ul>
                
                <button class = "books-btn" type = "button" id = "${o.list_name}"> SEE MORE </button>
                `);a.insertAdjacentHTML("beforeend",e),console.log(a)}function p(t){return t.map(e=>`<li class = "book-block">
            <img src="${e.book_image}" class="book-pic" width=120 heigh=240 />
            <p class="book-name">${e.title}</p>
            <p class="book-author">${e.author}</p>
        </li>`).join("")}const c=new XMLHttpRequest;function k(){return`<div class = "books-list-name" ></div>
    <ul class="books-container">
    </ul>`}c.onreadystatechange=k;c.open("GET","https://books-backend.p.goit.global/books/category?category=selectedCategory",!0);c.setRequestHeader("Content-Type","application/json");c.send();const i=document.querySelectorAll(".categ-item");i.forEach(function(t){t.addEventListener("click",function(){const o="https://books-backend.p.goit.global/books/category?category="+i.value;n.get(o).then(s=>{console.log(s.data)}).catch(s=>console.error(s))})});const h=document.querySelectorAll(".books-btn");h.forEach(function(t){t.addEventListener("click",function(){const e=i.map(url);a.insertAdjacentHTML("beforeend",e),console.log(a)})});
//# sourceMappingURL=commonHelpers.js.map
