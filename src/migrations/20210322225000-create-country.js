'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Countries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Countries');
  }
};