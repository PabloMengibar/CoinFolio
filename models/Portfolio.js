const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Portfolio = dbConnection.define("Portfolio", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.ENUM(["USER","PREMIUM"]),
  },
});

module.exports = Portfolio;
