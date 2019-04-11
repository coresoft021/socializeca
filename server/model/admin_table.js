"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tas_admin = dbcon_1.sequelize.define('tas_admin', {
       ID: {
      type: dbcon_1.Sequelize.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_NAME: {
      type: dbcon_1.Sequelize.STRING(25),
      allowNull: true
    },
      PASSWORD: {
      type: dbcon_1.Sequelize.STRING(25),
      allowNull: true
    },
    IS_ADMIN: {
      type: dbcon_1.Sequelize.Sequelize.BOOLEAN,
      allowNull: true
    },
  
  }, {
    tableName: 'tas_admin',
     timestamps: false
});
exports.Tas_admin = Tas_admin;
