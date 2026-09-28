(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.getElementById(`theme-toggle`),n=localStorage.getItem(`theme`)||`light`;document.documentElement.setAttribute(`data-theme`,n),t(e,n),e&&e.addEventListener(`click`,()=>{let n=document.documentElement.getAttribute(`data-theme`)===`dark`?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,n),localStorage.setItem(`theme`,n),t(e,n)})}function t(e,t){e&&(e.textContent=t===`dark`?`☀️`:`🌙`)}function n(){let e=document.getElementById(`burger-btn`),t=document.getElementById(`nav-menu`);if(!e||!t)return;function n(){e.classList.toggle(`active`),t.classList.toggle(`active`),document.body.classList.toggle(`no-scroll`)}function r(){e.classList.remove(`active`),t.classList.remove(`active`),document.body.classList.remove(`no-scroll`)}e.addEventListener(`click`,n),t.querySelectorAll(`.nav__link`).forEach(e=>{e.addEventListener(`click`,r)}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&t.classList.contains(`active`)&&r()})}function r(){let e=document.getElementById(`slider-track`),t=document.getElementById(`slider-prev`),n=document.getElementById(`slider-next`);if(!e||!t||!n)return;let r=0,i=e.children.length;function a(){e.style.transform=`translateX(-${r*100}%)`}n.addEventListener(`click`,()=>{r=(r+1)%i,a()}),t.addEventListener(`click`,()=>{r=(r-1+i)%i,a()})}var i=[{id:`1`,category:`web`,title:`Frontend Developer`,description:`HTML5, CSS3, JavaScript ES6+, and modern development workflow.`,fullDescription:`Master modern frontend development. Learn how to build interactive, responsive web applications using clean JavaScript and modern tools.`,price:450,image:`https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80`,options:{duration:[{name:`3 Months`,priceAdd:0},{name:`6 Months`,priceAdd:150}],format:[{name:`Self-paced`,priceAdd:0},{name:`With Mentor`,priceAdd:100}]}},{id:`2`,category:`qa`,title:`QA Engineer`,description:`Manual and automated software testing fundamentals and tools.`,fullDescription:`Become a certified QA Engineer. Learn software testing strategies, bug reporting, test automation, and API testing.`,price:380,image:`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80`,options:{duration:[{name:`2 Months`,priceAdd:0},{name:`4 Months`,priceAdd:100}],format:[{name:`Basic Track`,priceAdd:0},{name:`Intensive + Internship`,priceAdd:120}]}},{id:`3`,category:`ds`,title:`Python Data Analyst`,description:`Data analysis, visualization, Pandas, NumPy, and SQL basics.`,fullDescription:`Dive deep into data science. Learn data wrangling, visualization, statistical analysis, and database querying.`,price:500,image:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80`,options:{duration:[{name:`4 Months`,priceAdd:0},{name:`6 Months`,priceAdd:200}],format:[{name:`Standard Track`,priceAdd:0},{name:`Advanced ML`,priceAdd:150}]}}];function a(){let e=document.getElementById(`catalog-grid`),t=document.querySelectorAll(`.category-btn`),n=document.getElementById(`course-modal`),r=document.getElementById(`modal-content`);if(!e)return;function a(t=`all`){e.innerHTML=``;let n=t===`all`?i:i.filter(e=>e.category===t);if(n.length===0){e.innerHTML=`<p>No courses found in this category.</p>`;return}n.forEach(t=>{let n=document.createElement(`article`);n.className=`course-card`,n.innerHTML=`
        <img src="${t.image}" alt="${t.title}" class="course-card__img" />
        <div class="course-card__body">
          <span class="course-card__tag">${t.category}</span>
          <h3 class="course-card__title">${t.title}</h3>
          <p class="course-card__desc">${t.description}</p>
          <div class="course-card__footer">
            <span class="course-card__price">$${t.price}</span>
            <button class="btn btn--primary btn--sm open-modal-btn" data-id="${t.id}">Details</button>
          </div>
        </div>
      `,e.appendChild(n)}),o()}t.forEach(e=>{e.addEventListener(`click`,e=>{t.forEach(e=>e.classList.remove(`active`));let n=e.currentTarget;n.classList.add(`active`),a(n.getAttribute(`data-category`)||`all`)})});function o(){e.querySelectorAll(`.open-modal-btn`).forEach(e=>{e.addEventListener(`click`,e=>{s(e.currentTarget.getAttribute(`data-id`))})})}function s(e){let t=i.find(t=>t.id===e);if(!t||!n||!r)return;let a=0,o=0;function s(){let e=t.price+a+o;r.innerHTML=`
        <button class="modal__close" id="modal-close-btn">&times;</button>
        <div class="modal__body-wrapper">
          <img src="${t.image}" alt="${t.title}" class="modal__img" />
          <div class="modal__info">
            <h2>${t.title}</h2>
            <p>${t.fullDescription}</p>

            <div class="modal__options">
              <label>Duration:</label>
              <div class="option-group" id="duration-group">
                ${t.options.duration.map((e,t)=>`
                  <button class="option-btn ${t===0?`active`:``}" data-add="${e.priceAdd}">${e.name}</button>
                `).join(``)}
              </div>

              <label>Format:</label>
              <div class="option-group" id="format-group">
                ${t.options.format.map((e,t)=>`
                  <button class="option-btn ${t===0?`active`:``}" data-add="${e.priceAdd}">${e.name}</button>
                `).join(``)}
              </div>
            </div>

            <div class="modal__price-total">
              Total Price: <span>$${e}</span>
            </div>
          </div>
        </div>
      `;let n=document.getElementById(`modal-close-btn`);n&&n.addEventListener(`click`,c);let i=r.querySelectorAll(`#duration-group .option-btn`);i.forEach(e=>{e.addEventListener(`click`,e=>{i.forEach(e=>e.classList.remove(`active`)),e.currentTarget.classList.add(`active`),a=Number(e.currentTarget.getAttribute(`data-add`))||0,l()})});let s=r.querySelectorAll(`#format-group .option-btn`);s.forEach(e=>{e.addEventListener(`click`,e=>{s.forEach(e=>e.classList.remove(`active`)),e.currentTarget.classList.add(`active`),o=Number(e.currentTarget.getAttribute(`data-add`))||0,l()})})}function l(){let e=r.querySelector(`.modal__price-total span`);e&&(e.textContent=`$${t.price+a+o}`)}s(),n.classList.add(`active`),document.body.classList.add(`no-scroll`)}function c(){n&&(n.classList.remove(`active`),document.body.classList.remove(`no-scroll`))}n&&n.addEventListener(`click`,e=>{e.target===n&&c()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&n&&n.classList.contains(`active`)&&c()}),a(`all`)}document.addEventListener(`DOMContentLoaded`,()=>{e(),n(),r(),a()});
//# sourceMappingURL=main-DxSlQo2O.js.map