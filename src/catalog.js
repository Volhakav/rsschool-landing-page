import { coursesData } from './data.js';

export function initCatalog() {
  const catalogContainer = document.getElementById('catalog-grid');
  const filterBtns = document.querySelectorAll('.category-btn');
  const modal = document.getElementById('course-modal');
  const modalContent = document.getElementById('modal-content');

  if (!catalogContainer) return;

  function renderCards(category = 'all') {
    catalogContainer.innerHTML = '';
    
    const filtered = category === 'all' 
      ? coursesData 
      : coursesData.filter(item => item.category === category);

    if (filtered.length === 0) {
      catalogContainer.innerHTML = '<p>No courses found in this category.</p>';
      return;
    }

    filtered.forEach(course => {
      const card = document.createElement('article');
      card.className = 'course-card';
      card.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="course-card__img" />
        <div class="course-card__body">
          <span class="course-card__tag">${course.category}</span>
          <h3 class="course-card__title">${course.title}</h3>
          <p class="course-card__desc">${course.description}</p>
          <div class="course-card__footer">
            <span class="course-card__price">$${course.price}</span>
            <button class="btn btn--primary btn--sm open-modal-btn" data-id="${course.id}">Details</button>
          </div>
        </div>
      `;
      catalogContainer.appendChild(card);
    });

    attachModalEvents();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active');
      
      const category = targetBtn.getAttribute('data-category') || 'all';
      renderCards(category);
    });
  });

  function attachModalEvents() {
    const modalBtns = catalogContainer.querySelectorAll('.open-modal-btn');
    modalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openModal(id);
      });
    });
  }

  function openModal(id) {
    const course = coursesData.find(item => item.id === id);
    if (!course || !modal || !modalContent) return;

    let selectedDurationAdd = 0;
    let selectedFormatAdd = 0;

    function renderModalBody() {
      const totalPrice = course.price + selectedDurationAdd + selectedFormatAdd;

      modalContent.innerHTML = `
        <button class="modal__close" id="modal-close-btn">&times;</button>
        <div class="modal__body-wrapper">
          <img src="${course.image}" alt="${course.title}" class="modal__img" />
          <div class="modal__info">
            <h2>${course.title}</h2>
            <p>${course.fullDescription}</p>

            <div class="modal__options">
              <label>Duration:</label>
              <div class="option-group" id="duration-group">
                ${course.options.duration.map((opt, i) => `
                  <button class="option-btn ${i === 0 ? 'active' : ''}" data-add="${opt.priceAdd}">${opt.name}</button>
                `).join('')}
              </div>

              <label>Format:</label>
              <div class="option-group" id="format-group">
                ${course.options.format.map((opt, i) => `
                  <button class="option-btn ${i === 0 ? 'active' : ''}" data-add="${opt.priceAdd}">${opt.name}</button>
                `).join('')}
              </div>
            </div>

            <div class="modal__price-total">
              Total Price: <span>$${totalPrice}</span>
            </div>
          </div>
        </div>
      `;

      const closeBtn = document.getElementById('modal-close-btn');
      if (closeBtn) closeBtn.addEventListener('click', closeModal);

      const durationBtns = modalContent.querySelectorAll('#duration-group .option-btn');
      durationBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          durationBtns.forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          selectedDurationAdd = Number(e.currentTarget.getAttribute('data-add')) || 0;
          updatePrice();
        });
      });

      const formatBtns = modalContent.querySelectorAll('#format-group .option-btn');
      formatBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          formatBtns.forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          selectedFormatAdd = Number(e.currentTarget.getAttribute('data-add')) || 0;
          updatePrice();
        });
      });
    }

    function updatePrice() {
      const priceSpan = modalContent.querySelector('.modal__price-total span');
      if (priceSpan) {
        priceSpan.textContent = `$${course.price + selectedDurationAdd + selectedFormatAdd}`;
      }
    }

    renderModalBody();
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  renderCards('all');
}