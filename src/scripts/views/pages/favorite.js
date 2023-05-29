import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h1 class="explore__label">Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</p>';
    }

    restaurants.forEach((restaurant) => {
      // restaurantsContainer.innerHTML = '';

      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;
