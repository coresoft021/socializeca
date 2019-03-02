"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const greeting_1 = require("../models/admin_table");
const dbcon_1 = require("./dbcon");
const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;





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
//# sourceMappingURL=public.js.map
