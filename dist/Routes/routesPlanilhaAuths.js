"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlanilhaRoutes_1 = require("./PlanilhaRoutes");
const express_1 = require("express");
const routesPlanilhas = (0, express_1.Router)();
routesPlanilhas.get('/', (req, res) => {
    return res.json(PlanilhaRoutes_1.PlanilhaEstoque);
});
exports.default = routesPlanilhas;
//# sourceMappingURL=routesPlanilhaAuths.js.map