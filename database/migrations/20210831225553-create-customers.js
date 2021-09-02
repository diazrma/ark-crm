'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: 0
      }
    });
  },

  down: async (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Customers');
  }
};

