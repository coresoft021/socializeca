"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");

const dbcon_1 = require("./dbcon");
const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;






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
