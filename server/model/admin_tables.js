"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Tax_admin = dbcon_1.sequelize.define('tax_admin', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    TAX_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    TAX_RATE: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },
    IS_ACTIVE: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'tax_admin',
    timestamps: false
});
exports.Tax_admin = Tax_admin;
