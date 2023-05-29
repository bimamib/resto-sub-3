import ExploreRestaurants from '../views/pages/explore-restaurant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ExploreRestaurants, // default page
  '/home': ExploreRestaurants,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
