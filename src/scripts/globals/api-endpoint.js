import CONFIG from './config';

const API_ENDPOINT = {
  EXPLORE_RESTAURANTS: `${CONFIG.BASE_URL}/list`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  SEARCH_RESTAURANT: `${CONFIG.BASE_URL}/search?q=<query>`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
