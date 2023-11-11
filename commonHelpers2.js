import"./assets/popup-d2375c9e.js";const t={container:document.querySelector(".js-list"),totalQuantity:document.querySelector(".js-quantity"),clearBtn:document.querySelector(".js-close"),pageName:document.querySelector(".js-title")},c="shoppinglist",e=JSON.parse(localStorage.getItem(c))??[];t.container.insertAdjacentHTML("afterbegin",s(e));console.log(e);function s(n){return n.map(({img:a,titlle:o,category:r,desc:l,author:i})=>`
<li class='card-item' class='book-img'>
  <img src='${a}' alt ='${o}'>
  <h2>${o}</h2>
  <p>${r}</p>
  <h3>${l}</h3>
  <p>${i}</p>
</li>
<button type="button" class="js-close">Close</button>`).join("")}if(e.length){const n=e.reduce((a,{qty:o})=>a+o,0);t.totalQuantity.textContent=n,t.container.insertAdjacentHTML("afterbegin",s(e)),t.clearBtn.addEventListener(click,u)}else t.totalQuantity.textContent="This page is empty, add some books and proceed to order.";function u(){localStorage.removeItem(c)}
//# sourceMappingURL=commonHelpers2.js.map
