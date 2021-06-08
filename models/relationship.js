const dbConnection = require("../config/db");
const User = require("./User");
const Portfolio = require("./Portfolio");
const Crypto = require("./Crypto");

const loadModels = () => {
  User.hasMany(Portfolio, {
    foreignKey: {
      allowNull: false,
    },
  });

  ////////////////////////////////

  Portfolio.belongsTo(User);
  Portfolio.hasMany(Crypto, {
     foreignKey: {
      allowNull: false,
    },
   });

   Crypto.belongsTo(Portfolio);

  dbConnection.sync().then(() => console.log("All models loaded"));
};

module.exports = loadModels;
