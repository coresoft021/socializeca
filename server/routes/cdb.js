"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const greeting_1 = require("../model/admin_tables");
const dbcon_1 = require("./dbcon");
const cdbRouter = express_1.Router();
exports.cdbRouter = cdbRouter;



publicRouter.get("/all", (request, response) => {
    greeting_1.Tas_greeting.sync({ force: true }).then(() => {
        // Table created
        return third_party_1.Third_party.create({
            GREETTING: 'Hancock'
        });
    });
    return response.json({ success: true, msg: 'found' });
});

publicRouter.get('/list_greet', (request, response) => {
    greeting_1.Tas_greeting.findAll({
       
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
