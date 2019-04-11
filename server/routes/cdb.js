"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = require("../model/admin_tables");
const dbcon_1 = require("./dbcon");
const cdbRouter = express_1.Router();
exports.cdbRouter = cdbRouter;



publicRouter.get("/all", (request, response) => {
    admin_1.Tas_admin.sync({ force: true }).then(() => {
        // Table created
        return admin_1.Tas_admin.create({
            USER_NAME: 'Hancock'
        });
    });
    return response.json({ success: true, msg: 'found' });
});

publicRouter.get('/list_admin', (request, response) => {
    admin_1.Tas_admin.findAll({
       
    }).then(res => {
        if (res) {
            response.send(res);
        }
        else {
            return response.json({ success: false, msg: 'Nothing found' });
        }
    });
});
publicRouter.get("/about", (request, response) => {
    response.json({
        Devoloper: "Premji Thankaji",
        Framework: "A6.0 + sequlize + nodejs",
    });
});
publicRouter.get("/server", (request, response) => {
    response.json({ Status: "Running"
    });
});
