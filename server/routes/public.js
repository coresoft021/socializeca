"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbcon_1 = require("./dbcon");
const ad_min = require("../model/admin_table");
const subs_min = require("../model/feed_table");

const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;
const Op = dbcon_1.Sequelize.Op;


publicRouter.get("/build_a_m", (request, response) => {

ad_min.Ad_min.sync({ force: true }).then(() => {
        //Table created
        return ad_min.Ad_min.create({
            USER_NAME: 'green'
        });
    });
    return response.json({ success: true, msg: 'CREATED' });

})


publicRouter.get("/build_f_m", (request, response) => {

subs_min.Subs_req.sync({ force: true }).then(() => {
        //Table created
        return subs_min.Subs_req.create({
            SUBS_REQ_NO: 0
        });
    });
    return response.json({ success: true, msg: 'CREATED' });

})

publicRouter.get("/about", (request, response) => {
    response.json({
        Devoloper: "Premji Thankaji",
        Framework: "A7.0 + sequlize + nodejs",
    });
});

