import"./assets/scroll-up-2f72e7b4.js";const s={container:document.querySelector(".js-list"),totalQuantity:document.querySelector(".js-quantity"),clearBtn:document.querySelector(".js-clear"),pageName:document.querySelector(".js-title"),message:document.querySelector(".js-message"),booksImg:document.querySelector(".js-books")},i="booksInList";var l=null;n();s.container.addEventListener("click",o=>{o.target.classList.contains("icon-delete")&&d(o.target.parentNode.dataset.id)});function p(o){return o.map(({_id:e,book_image:t,title:a,list_name:c,description:r,author:g,buy_links:m})=>`
<li data-id='${e}' class='card-item'>
    <img src='${t}' alt ='${a}' class='img'>
    <div class="info">
      <h2 class='shopping_title'>${a}</h2>
      <p class='list_name'>${c}</p>
      <h3 class='desc overflow-ellipsis'>${r}</h3>
      <div class='info-author-socials'>
        <p class= 'shopping_author'>${g}</p>
        <ul class="socials_list">
          ${u(m)}
        </ul>
      </div>
    </div>

  <button type="button" class="js-clear btn-delete", data-id=${e}>
    <svg class="icon-delete" width="28" height="28">
      <use href="./images/icons.svg#icon-trash"></use>
    </svg>
  </button>
  
</li>`).join("")}function u(o){return o.slice(0,4).map(e=>{let t=null,a=null;switch(e.name){case"Amazon":{a="social-icon-amazon",t="../images/amazon_logo.jpg";break}case"Apple Books":{t="../images/apple_books.jpg",a="social-icon-book";break}default:t="../images/book.jpg",a="social-icon-book"}return`<li class = "book-icon">
      <a
        class=${a}
        href=${e.url}
        target="_blank"
      rel="nofollow noopener noreferree"
        aria-label="Book icon"
      >
      <img src=${t} alt="${e.name}" width ='32px' height='32px'/>
      </a>
  </li>`}).join("")}function n(){l=JSON.parse(localStorage.getItem(i))??[],l.length?(s.booksImg.style.display="none",s.message.style.display="none",s.container.innerHTML=p(l)):(s.container.innerHTML="",s.booksImg.style.display="block",s.message.style.display="block",s.booksImg.style.visibility="visible",s.message.style.visibility="visible")}function d(o){const e=l.filter(t=>t._id!==o);e.length==0?localStorage.removeItem(i):localStorage.setItem(i,JSON.stringify(e)),n()}
//# sourceMappingURL=commonHelpers2.js.map
