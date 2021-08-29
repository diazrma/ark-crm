'use strict'

const { post } = require("../routes/user-route");

module.exports = (sequelize, DataTypes) => {
     const User = sequelize.define('User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      token: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    });    
    return User;
  }