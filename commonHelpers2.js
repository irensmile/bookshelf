import"./assets/scroll-up-2f72e7b4.js";const a={container:document.querySelector(".js-list"),totalQuantity:document.querySelector(".js-quantity"),clearBtn:document.querySelector(".js-clear"),pageName:document.querySelector(".js-title"),message:document.querySelector(".js-message"),booksImg:document.querySelector(".js-books")},l="booksInList",i=JSON.parse(localStorage.getItem(l))??[];a.container.addEventListener("click",s=>{s.target.classList.contains("icon-delete")&&u(s.target.parentNode.dataset.id)});function m(s){return s.map(({_id:e,book_image:o,title:t,list_name:n,description:c,author:r,buy_links:g})=>`
<li data-id='${e}' class='card-item'>
    <img src='${o}' alt ='${t}' class='img'>
    <div class="info">
      <h2 class='shopping_title'>${t}</h2>
      <p class='list_name'>${n}</p>
      <h3 class='desc overflow-ellipsis'>${c}</h3>
      <div class='info-author-socials'>
        <p class= 'shopping_author'>${r}</p>
        <ul class="socials_list">
          ${d(g)}
        </ul>
      </div>
    </div>

  <button type="button" class="js-clear btn-delete", data-id=${e}>
    <svg class="icon-delete" width="28" height="28">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
  </button>
  
</li>`).join("")}function d(s){return s.map(e=>{let o=null,t=null;switch(e.name){case"Amazon":{t="social-icon-amazon",o="../images/amazon_logo.jpg";break}case"Apple Books":{o="../images/apple_books.jpg",t="social-icon-book";break}default:o="../images/book.jpg",t="social-icon-book"}return`<li class = "book-icon">
      <a
        class=${t}
        href=${e.url}
        target="_blank"
      rel="nofollow noopener noreferree"
        aria-label="Book icon"
      >
      <img src=${o} alt="${e.name}" width ='32px' height='32px'/>
      </a>
  </li>`}).join("")}i.length?(a.booksImg.style.display="none",a.message.style.display="none",a.container.insertAdjacentHTML("afterbegin",m(i))):(a.booksImg.style.visibility="visible",a.message.style.visibility="visible");function u(s){const e=i.filter(o=>o._id!==s);e.length==0?localStorage.removeItem(l):localStorage.setItem(l,JSON.stringify(e)),window.location.href="./index.html"}
//# sourceMappingURL=commonHelpers2.js.map
