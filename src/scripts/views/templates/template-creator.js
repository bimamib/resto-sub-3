import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_name">${restaurant.name}</h2>
    <img class="restaurant__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3>Information</h3>
      <div class = content_like>
        <div class = address>
          <h4>Alamat</h4>
          <p>${restaurant.address}</p>
        </div>
        <div id ="likeButtonContainer"></div>
      </div>
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
      <div id="menu">
        <div class="food">
          <h4>Menu Makanan</h4>
          <p>${restaurant.menus.foods.map((food) => `- ${food.name}`).join('<br>')}</p>
        </div>
        <div class="drink">
          <h4>Menu Minuman</h4>
          <p>${restaurant.menus.drinks.map((drink) => `- ${drink.name}`).join('<br>')}</p>
        </div>
      </div>
      <h4>Costumer Reviews</h4>
      <div class="review-list">
            ${restaurant.customerReviews.map((review) => `
              <div class="review-item">
                <div class="review-item_bold">
                  <p class="review-item__date">${review.date}</p>
                  <p class="review-item__name">${review.name}</p>
                </div>
                <p class="review-item__review">${review.review}</p>
              </div>
            `).join('')}
      </div>
      <h4>Description</h4>
        <p>${restaurant.description}</p>
    </div>
`;

const createRestaurantListTemplate = (restaurant) => `
  <div id="restaurant-item" class="restaurant-item">
    <div class="restaurant-list__header">
      <img class="restaurant-list__header__image" alt="${restaurant.name}"
           src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-list__header__rating">
        <h2>⭐️<span class="restaurant-list__header__rating__score">${restaurant.rating}</span></h2>
      </div>
    </div>
    <div class="restaurant-list__content">
      <a href="/#/detail/${restaurant.id}">
        <h3>${restaurant.name}</h3>
      </a>
      <p>${`${restaurant.description.slice(0, 250)} ...`}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="Add to favorite" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="Remove from favorite" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
