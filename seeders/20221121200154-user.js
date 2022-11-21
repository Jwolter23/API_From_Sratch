'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'JordanW',
          password: 'Password',
          email: 'fake@fake.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'JackV',
          password: 'Password123',
          email: 'fake@fake11.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'BrandonC',
          password: 'Password123567',
          email: 'fake@fake1122.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'DevonJ',
          password: 'passwordLOL',
          email: 'fake@fake1122.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
     )
    },
  
    async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete ('users', null, {})
    }
  };
  