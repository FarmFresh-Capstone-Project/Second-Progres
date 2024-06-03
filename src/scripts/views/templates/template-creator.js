const createVegetableItemTemplate = (vegetable) => `
          <div class="vegetable-item">
            <div class="vegetable-item__header">
              <img class="vegetable-item__header__image" alt="${vegetable.name}"
                src="${vegetable.image}">
              <div class="vegetable-item__content__store">${vegetable.category}</div>
              <div class="vegetable-item__header__rating">
                <p>⭐️<span class="vegetable-item__header__rating__score">${vegetable.rate}</span></p>
              </div>
            </div>
            <div class="vegetable-item__content">
              <h3><a href="./detailPage.html">${vegetable.name}</a></h3>
              <p class="vegetable-item__content__description">${vegetable.description}</p>
            </div>
          </div>
        `;

export {
  // eslint-disable-next-line import/prefer-default-export
  createVegetableItemTemplate,
};

/*  <a href="/#/detail/${vegetable.id}"> */
