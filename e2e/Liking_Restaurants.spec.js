const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  // I.seeElement('#query'); tidak memiliki id query
  // I.seeElement('.query'); Menyebabkan error
  I.waitForElement('.restaurant-item__not__found', 5);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 5);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  // pause();

  I.waitForElement('.restaurant-list__content a');
  I.seeElement('.restaurant-list__content a');

  const firstRestaurant = locate('.restaurant-list__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // I.click(locate('.restaurant-list__content a').first()); terjadi error jika menerapkan ini

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-list__content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
