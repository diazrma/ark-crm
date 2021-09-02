'use strict'

module.exports = (sequelize, DataTypes) => {
      const Customer = sequelize.define('Customer', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    });    

    return Customer;
  }