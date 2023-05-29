import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async exploreRestaurants() {
    console.log(API_ENDPOINT.EXPLORE_RESTAURANTS);
    const response = await fetch(API_ENDPOINT.EXPLORE_RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseData = await response.json();
    return responseData.restaurant;
  }
}

export default RestaurantSource;
