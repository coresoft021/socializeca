
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Ad_min_ = dbcon_1.sequelize.define('admin', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    USER_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    PASSWORD: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    IS_ADMIN: {
        type: dbcon_1.Sequelize.BOOLEAN,
        allowNull: true
    },
}, {
    tableName: 'so_admin',
    timestamps: false
});
exports.Ad_min = Ad_min_;
