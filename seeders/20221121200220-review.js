'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    'reviews',
    [
      {
        content: 'This product is great wow',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
        product_id: 2
      },
      {
        content: 'This product is Ok',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2,
        product_id: 3
      },
      {
        content: 'This product is FANTASTIC!',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 3,
        product_id: 4
      },
      {
        content: 'This product is Horrible',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 4,
        product_id: 5
      },
    ]
   )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('reviews', null, {})
  }
};
