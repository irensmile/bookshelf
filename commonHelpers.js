import"./assets/scroll-up-bc22121b.js";import{a as n,N as c}from"./assets/vendor-77e6b4aa.js";n.defaults.headers.post["Content-Type"]="application/json";n.defaults.baseURL="https://books-backend.p.goit.global/";async function u(){return(await n.get("/books/top-books")).data}async function g(t){return(await n.get(`books/category?category=${t}`)).data}const k="https://books-backend.p.goit.global/books/",b="category-list";async function m(){try{const t=await n.get(k+b);if(t.status===200){const e=t.data,o=document.querySelector(".categories-list");e.map(s=>{const r=document.createElement("li");r.textContent=s.list_name,r.classList.add("categ-item"),o.appendChild(r)})}else c.Notify.failure(`Request execution error. Status code: ${t.status}`)}catch(t){c.Notify.failure("An error occurred while sending the request."),console.error("An error occurred while sending the request:",t)}}m();const a=document.querySelector(".books"),f=document.querySelector("#books-category-name");y();async function y(){const t=await u();d(t)}function d(t){const e=t.map(o=>p(o.list_name,o.books,!1));a.insertAdjacentHTML("beforeend",e)}function p(t,e,o){let s=o?"":`<div class = "books-list-name" >${t}</div>`;return s+=`<ul class="books-container ${o?"books-container-multi":""}">
                    ${h(e)}
                </ul>
                <button class = "books-btn" type = "button" id = "${t}"> SEE MORE </button>
                `,s}function h(t){return t.map(e=>`<li>
                <div data-book=${e._id} class="book-block">
                    <img src="${e.book_image}" class="book-pic" width=120 heigh=240 />
                    <p class="book-name">${e.title}</p>
                    <p class="book-author">${e.author}</p>
                </div>
         </li>`).join("")}const i=document.querySelector(".categories-list");i.addEventListener("click",async t=>{if(t.preventDefault(),t.target==i)return;const e=t.target.innerHTML;for(const s of t.currentTarget.children)console.log(s.classList.remove("is-active-item"));t.target.classList.add("is-active-item");let o=null;if(e=="All categories")l("Best Sellers Books"),await u(),o=d(e);else{l(e);const s=await g(e);o=p(e,s,!0)}a.innerHTML=o});function l(t){const e=t.split(" ");f.innerHTML=`<span class="dark-text">${e[0]}</span> ${e.slice(1).join(" ")}`}const L=document.querySelectorAll(".books-btn");L.forEach(function(t){t.addEventListener("click",function(){const e=categoryItems.map(url);a.insertAdjacentHTML("beforeend",e),console.log(a)})});
//# sourceMappingURL=commonHelpers.js.map
