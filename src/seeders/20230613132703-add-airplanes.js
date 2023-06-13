'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  await queryInterface.bulkInsert('Airplanes', [
    {
    modelNumber :"Airbus A380-800",
    capacity :250,
    createdAt : new Date(), 
    updatedAt : new Date() 
    },
    {
    modelNumber :"Boeing 747-8",
    capacity :300,
    createdAt : new Date(), 
    updatedAt : new Date() 
    },
    {
    modelNumber :"Lockheed C-5 Galaxy",
    capacity :260,
    createdAt : new Date(), 
    updatedAt : new Date() 
    },
    {
    modelNumber :"Antonov An-124 Ruslan",
    capacity :190,
    createdAt : new Date(), 
    updatedAt : new Date() 
    },
], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
