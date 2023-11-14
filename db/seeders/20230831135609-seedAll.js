'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Maps', [{
        title: 'Enjoy socks',
        latitude: 55.747540,
        longitude: 37.706840
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Maps', null, {});

  }
};
