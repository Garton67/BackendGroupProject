'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      accessorry: {
        type: Sequelize.BOOLEAN
      },
      sex: {
        type: Sequelize.STRING
      },
      urlimage: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      sku: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Inventories');
  }
};