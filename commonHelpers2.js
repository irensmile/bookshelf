import{a as d,b as m}from"./assets/scroll-up-d75a4643.js";const u="/project-ScriptMasters14/assets/icons-3746b069.svg",h="/project-ScriptMasters14/assets/books1-x-com-daafd4eb.jpg",s={container:document.querySelector(".js-list"),totalQuantity:document.querySelector(".js-quantity"),clearBtn:document.querySelector(".js-clear"),pageName:document.querySelector(".js-title"),message:document.querySelector(".js-message"),booksImg:document.querySelector(".js-books")},l="booksInList";var i=null;n();s.container.addEventListener("click",o=>{o.target.classList.contains("icon-delete")&&y(o.target.parentNode.dataset.id)});function b(o){return o.map(({_id:e,book_image:t,title:a,list_name:c,description:r,author:p,buy_links:g})=>`
<li data-id='${e}' class='shopping-card-item'>
    <img src='${t}' alt ='${a}' class='shopping-img'>
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
      <use href="${u}#icon-trash"></use>
    </svg>
  </button>

</li>`).join("")}function k(o){return o.slice(0,2).map(e=>{let t=null,a=null;switch(e.name){case"Amazon":{a="social-icon-amazon",t=`${m}`;break}case"Apple Books":{t=`${d}`,a="social-icon-book";break}default:t=`${h}`,a="social-icon-book"}return`<li class = "book-icon">
      <a
        class=${a}
        href=${e.url}
        target="_blank"
      rel="nofollow noopener noreferree"
        aria-label="Book icon"
      >
      <img src=${t} alt="${e.name}" width ='32px' height='32px'/>
      </a>
  </li>`}).join("")}function n(){i=JSON.parse(localStorage.getItem(l))??[],i.length?(s.booksImg.style.display="none",s.message.style.display="none",s.container.innerHTML=b(i)):(s.container.innerHTML="",s.booksImg.style.display="block",s.message.style.display="block",s.booksImg.style.visibility="visible",s.message.style.visibility="visible")}function y(o){const e=i.filter(t=>t._id!==o);e.length==0?localStorage.removeItem(l):localStorage.setItem(l,JSON.stringify(e)),n()}
//# sourceMappingURL=commonHelpers2.js.map
