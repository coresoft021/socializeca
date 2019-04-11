"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbcon_1 = require("../routes/dbcon");
const Sub_req_ = dbcon_1.sequelize.define('sub_req_', {
    ID: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

       SUBS_REQ_NO: {
        type: dbcon_1.Sequelize.INTEGER,
        allowNull: true
    },

    FIRST_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    LAST_NAME: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
    EMAIL: {
        type: dbcon_1.Sequelize.STRING,
        allowNull: true
    },
}, {
    tableName: 'so_subs_request',
    timestamps: false
});
exports.Subs_req = Sub_req_;
