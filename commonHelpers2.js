import"./assets/scroll-up-8775bb2b.js";const s={container:document.querySelector(".js-list"),totalQuantity:document.querySelector(".js-quantity"),clearBtn:document.querySelector(".js-clear"),pageName:document.querySelector(".js-title"),message:document.querySelector(".js-message"),booksImg:document.querySelector(".js-books")},l="booksInList";var a=null;n();s.container.addEventListener("click",o=>{o.target.classList.contains("icon-delete")&&d(o.target.parentNode.dataset.id)});function m(o){return o.map(({_id:e,book_image:t,title:i,list_name:c,description:r,author:p,buy_links:g})=>`
<li data-id='${e}' class='shopping-card-item'>
    <img src='${t}' alt ='${i}' class='shopping-img'>
    <div class="shopping-info">
      <h2 class='shopping_title description-title'>${i}</h2>
      <p class='shopping-list_name'>${c}</p>
      <h3 class='shopping-text description'>${r}</h3>
      <div class='shopping-socials'>
        <p class= 'shopping_author'>${p}</p>
        <ul class="socials_list">
          ${u(g)}
        </ul>
      </div>
    </div>

  <button type="button" class="js-clear btn-delete", data-id=${e}>
    <svg class="icon-delete" width="28" height="28">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
  </button>

</li>`).join("")}function u(o){return o.slice(0,2).map(e=>{let t=null,i=null;switch(e.name){case"Amazon":{i="social-icon-amazon",t="../images/amazon_logo.svg";break}case"Apple Books":{t="../images/apple_books.svg",i="social-icon-book";break}default:t="../images/book.jpg",i="social-icon-book"}return`<li class = "book-icon">
      <a
        class=${i}
        href=${e.url}
        target="_blank"
      rel="nofollow noopener noreferree"
        aria-label="Book icon"
      >
      <img src=${t} alt="${e.name}" width ='32px' height='32px'/>
      </a>
  </li>`}).join("")}function n(){a=JSON.parse(localStorage.getItem(l))??[],a.length?(s.booksImg.style.display="none",s.message.style.display="none",s.container.innerHTML=m(a)):(s.container.innerHTML="",s.booksImg.style.display="block",s.message.style.display="block",s.booksImg.style.visibility="visible",s.message.style.visibility="visible")}function d(o){const e=a.filter(t=>t._id!==o);e.length==0?localStorage.removeItem(l):localStorage.setItem(l,JSON.stringify(e)),n()}
//# sourceMappingURL=commonHelpers2.js.map
