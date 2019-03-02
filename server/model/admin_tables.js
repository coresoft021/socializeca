"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_greeting = dbcon_1.sequelize.define('tas_greeting', {
       ID: {
      type: dbcon_1.Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    GREETTING: {
      type: dbcon_1.Sequelize.STRING(140),
      allowNull: true
    },
    DEFAULT: {
      type: dbcon_1.Sequelize.Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_greeting',
     timestamps: false
});
exports.Tas_greeting = Tas_greeting;
