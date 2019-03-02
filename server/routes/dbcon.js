"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.Sequelize = sequelize_1.Sequelize;
var sequelize = new sequelize_1.Sequelize('postgres://eabenglqnnlxii:3895dc322b94f951b9e3eddc203744d5fcfa9c228c504b489cd1a96f875c74cd@ec2-54-235-193-34.compute-1.amazonaws.com:5432/d50eu6rmqqbp5r');
exports.sequelize = sequelize;
