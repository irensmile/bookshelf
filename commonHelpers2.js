import"./assets/scroll-up-7b06196d.js";const d="/project-ScriptMasters14/assets/icons-3746b069.svg",u="/project-ScriptMasters14/assets/amazon_logo-da5e1962.svg",m="/project-ScriptMasters14/assets/apple_books-2f3ab6e1.svg",b="/project-ScriptMasters14/assets/books1-x-com-92ca4e24.png",t={container:document.querySelector(".js-list"),totalQuantity:document.querySelector(".js-quantity"),clearBtn:document.querySelector(".js-clear"),pageName:document.querySelector(".js-title"),message:document.querySelector(".js-message"),booksImg:document.querySelector(".js-books")},l="booksInList";var i=null;n();t.container.addEventListener("click",s=>{var e=null;s.target.classList.contains("icon-delete")?e=s.target.parentNode:s.target.parentNode.classList.contains("icon-delete")?e=s.target.parentNode.parentNode:s.target.classList.contains("btn-delete")&&(e=s.target),e&&y(e.dataset.id)});function h(s){return s.map(({_id:e,book_image:o,title:a,list_name:c,description:r,author:p,buy_links:g})=>`
<li data-id='${e}' class='shopping-card-item'>
    <img src='${o}' alt ='${a}' class='shopping-img'>
    <div class="shopping-info">
      <h2 class='shopping_title description-title'>${a}</h2>
      <p class='shopping-list_name'>${c}</p>
      <h3 class='shopping-text description'>${r}</h3>
      <div class='shopping-socials'>
        <p class= 'shopping_author'>${p}</p>
        <ul class="socials_list">
          ${k(g)}
        </ul>
      </div>
    </div>

  <button type="button" class="js-clear btn-delete", data-id=${e}>
    <svg class="icon-delete" width="28" height="28">
      <use href="${d}#icon-trash"></use>
    </svg>
  </button>

</li>`).join("")}function k(s){return s.slice(0,2).map(e=>{let o=null,a=null;switch(e.name){case"Amazon":{a="social-icon-amazon",o=`${u}`;break}case"Apple Books":{o=`${m}`,a="social-icon-book";break}default:o=`${b}`,a="social-icon-book"}return`<li class = "book-icon">
      <a
        class=${a}
        href=${e.url}
        target="_blank"
      rel="nofollow noopener noreferree"
        aria-label="Book icon"
      >
      <img src=${o} alt="${e.name}" width ='32px' height='32px'/>
      </a>
  </li>`}).join("")}function n(){i=JSON.parse(localStorage.getItem(l))??[],i.length?(t.booksImg.style.display="none",t.message.style.display="none",t.container.innerHTML=h(i)):(t.container.innerHTML="",t.booksImg.style.display="block",t.message.style.display="block",t.booksImg.style.visibility="visible",t.message.style.visibility="visible")}function y(s){const e=i.filter(o=>o._id!==s);e.length==0?localStorage.removeItem(l):localStorage.setItem(l,JSON.stringify(e)),n()}
//# sourceMappingURL=commonHelpers2.js.map
