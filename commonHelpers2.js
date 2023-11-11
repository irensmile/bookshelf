import"./assets/popup-e28d92fa.js";const s=[{_id:"642fd89ac8cf5ee957f122da",list_name:"Paperback Nonfiction",date:"2023-04-07T08:46:57.000Z",age_group:"",amazon_product_url:"http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20",article_chapter_link:"",author:"Bessel van der Kolk",book_image:"https://storage.googleapis.com/du-prd/books/images/9780670785933.jpg",book_image_width:128,book_image_height:193,book_review_link:"https://www.nytimes.com/2018/10/18/books/review/how-to-rewire-your-traumatized-brain.html",book_uri:"nyt://book/e3e33e9d-0e67-5fec-b0d2-2ecddc38ce0e",contributor:"by Bessel van der Kolk",contributor_note:"",created_date:"2023-04-05 22:05:27",description:"How trauma affects the body and mind, and innovative treatments for recovery.",first_chapter_link:"",price:"0.00",primary_isbn10:"0143127748",primary_isbn13:"9780143127741",publisher:"Penguin",rank:1,rank_last_week:1,sunday_review_link:"",title:"THE BODY KEEPS THE SCORE",updated_date:"2023-04-05 22:10:17",weeks_on_list:232,buy_links:[{name:"Amazon",url:"http://www.amazon.com/The-Body-Keeps-Score-Healing/dp/0670785938?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9780143127741?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143127741"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252FBessel%252Bvan%252Bder%252BKolk%252F9780143127741&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBODY%252BKEEPS%252BTHE%252BSCORE%252BBessel%252Bvan%252Bder%252BKolk"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780143127741&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780143127741%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBODY%2BKEEPS%2BTHE%2BSCORE%2BBessel%2Bvan%2Bder%2BKolk%26aff%3DNYT"}],__v:0}],e={container:document.querySelector(".js-list"),totalQuantity:document.querySelector(".js-quantity"),clearBtn:document.querySelector(".js-close"),pageName:document.querySelector(".js-title")},n="shoppinglist",t=JSON.parse(localStorage.getItem(n))??[];e.container.insertAdjacentHTML("afterbegin",o(t));function o(r){return r.map(({id:i,book_image:l,title:a,list_name:c,description:p,author:d})=>`
<li data-id='${i}' class='card-item'>
  <img src='${l}' alt ='${a}' class='img'>
  <div class="info">
  <h2 class='shopping_title'>${a}</h2>
  <p class='list_name'>${c}</p>
  <h3 class='desc overflow-ellipsis'>${p}</h3>
  <p class= 'shopping_author>${d}'</p>
  </div>
  <button type="button" class="js-close">Close</button>
   <ul class="socials_list">
   <li>
     <a
       class="social-icon"
       href="https://www.amazon.com/"
       target="_blank"
       rel="nofollow noopener noreferrer"
       aria-label="Amazon icon"
     >
       <svg class="" width="32" height="11">
         <use href="./images/icons.svg#amazon"></use>
       </svg>
     </a>
   </li>
   <li>
     <a
       class="social-icon"
       href=""
       target="_blank"
     rel="nofollow noopener noreferree"
       aria-label="Book icon"
     >
       <svg class="" width="16" height="16">
         <use href="./images/icons.svg#library"></use>
       </svg>
     </a>
 </li>
<ul/>
</li>`).join("")}e.container.insertAdjacentHTML("afterbegin",o(s));t.length?(e.container.insertAdjacentHTML("afterbegin",o(t)),e.clearBtn.addEventListener(click,u)):e.totalQuantity.textContent="This page is empty, add some books and proceed to order.";function u(){localStorage.removeItem(n)}console.log(o(s));new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250,close:!1,enableKeyboard:!0,captionPosition:"bottom"});
//# sourceMappingURL=commonHelpers2.js.map
