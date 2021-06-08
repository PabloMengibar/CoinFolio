const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Crypto = dbConnection.define("Crypto", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.FLOAT,
  },
});

module.exports = Crypto;