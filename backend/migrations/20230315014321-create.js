'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('books', { 
        bookCode: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },

        title: {
          type: Sequelize.STRING
        },

        author:{
          type: Sequelize.STRING
        },

        publisher:{
          type: Sequelize.STRING
        },

        releaseYear:{
          type: Sequelize.INTEGER
        }

      });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('books');
  }
};
