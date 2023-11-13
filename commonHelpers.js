import"./assets/scroll-up-bc22121b.js";import{a,N as c}from"./assets/vendor-77e6b4aa.js";a.defaults.headers.post["Content-Type"]="application/json";a.defaults.baseURL="https://books-backend.p.goit.global/";async function u(){return(await a.get("/books/top-books")).data}async function b(t){return(await a.get(`books/category?category=${t}`)).data}const g="https://books-backend.p.goit.global/books/",m="category-list";async function f(){try{const t=await a.get(g+m);if(t.status===200){const o=t.data,e=document.querySelector(".categories-list");o.map(s=>{const n=document.createElement("li");n.textContent=s.list_name,n.classList.add("categ-item"),e.appendChild(n)})}else c.Notify.failure(`Request execution error. Status code: ${t.status}`)}catch(t){c.Notify.failure("An error occurred while sending the request."),console.error("An error occurred while sending the request:",t)}}f();const i=document.querySelector(".books"),r=document.querySelector(".categories-list"),y=document.querySelector("#books-category-name");h();async function h(){const t=await u(),o=d(t);i.insertAdjacentHTML("beforeend",o)}function d(t){return t.map(o=>p(o.list_name,o.books,!1))}function p(t,o,e){let s=e?"":`<div class = "books-list-name" >${t}</div>`;s+=`<ul class="books-container ${e?"books-container-multi":""}">
                    ${L(o)}
                </ul>`;const n=e?"":`<button class = "books-btn" type = "button" id="${t}"> SEE MORE </button>`;return s+=n,s}function L(t){return t.map(o=>`<li>
                <div data-book=${o._id} class="book-block">
                    <img src="${o.book_image}" class="book-pic" width=120 heigh=240 />
                    <p class="book-name">${o.title}</p>
                    <p class="book-author">${o.author}</p>
                </div>
         </li>`).join("")}r.addEventListener("click",async t=>{if(t.preventDefault(),t.target==r)return;const o=t.target.innerHTML;k(o)});async function k(t){for(const e of r.children)e.innerHTML!=t?e.classList.remove("is-active-item"):e.classList.add("is-active-item");let o=null;if(t=="All categories"){l("Best Sellers Books");const e=await u();o=d(e)}else{l(t);const e=await b(t);o=p(t,e,!0)}i.innerHTML=o,window.scrollTo({top:0,behavior:"smooth"})}function l(t){const o=t.split(" ");y.innerHTML=`<span class="dark-text">${o[0]}</span> ${o.slice(1).join(" ")}`}i.addEventListener("click",async t=>{if(t.target.classList.contains("books-btn")){console.log("here");const o=t.target.id;k(o)}});
//# sourceMappingURL=commonHelpers.js.map
