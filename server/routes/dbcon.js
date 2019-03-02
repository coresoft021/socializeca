"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.Sequelize = sequelize_1.Sequelize;
var sequelize = new sequelize_1.Sequelize('postgres://zsepyqdiizsggz:7ce949b91d72a8efbe4a12bf22b4f642318a56fb0434e38fb5dfe75043cd8703@ec2-54-83-17-151.compute-1.amazonaws.com:5432/deq4aoucdv22oo');
exports.sequelize = sequelize;
