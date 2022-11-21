'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    'products',
    [
      {
        name: 'snowboard',
        description: 'a good snowboard',
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date ()
      },
      {
        name: 'skis',
        description: 'a good ski',
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date ()
      },
      {
        name: 'boots',
        description: 'a good boot',
        price: 10,
        createdAt: new Date(),
        updatedAt: new Date ()
      },
      {
        name: 'socks',
        description: 'a good wool sock',
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date ()
      }
    ]
    
   )
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete ('products', null, {})
  }
};
