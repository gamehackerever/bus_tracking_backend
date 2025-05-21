const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const driverModel = sequelize.define('Driver', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {  // hash before saving!
    type: DataTypes.STRING,
    allowNull: false,
  },
  busId: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'drivers',
  timestamps: true,
});

module.exports = driverModel;
