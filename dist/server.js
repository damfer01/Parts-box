"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cors = require("cors");
const routes_1 = require("./Routes/routes");
const PlanilhaRoutes_1 = require("./Routes/PlanilhaRoutes");
const routesPlanilhaAuths_1 = require("./Routes/routesPlanilhaAuths");
const express = require("express");
const app = express();
const server = require('http').Server(app);
mongoose_1.default.connect("mongodb+srv://kaua:283186@cluster0.9m3dc2c.mongodb.net/?retryWrites=true&w=majority");
mongoose_1.default.connection
    .once('open', () => console.log('ate agora deu certo !!!'))
    .on('error', (error) => {
    console.log('error:', error);
});
app.use(cors());
app.use(routes_1.routes);
app.use(express.json());
app.use(routesPlanilhaAuths_1.default);
server.listen(3333);
console.log(new PlanilhaRoutes_1.PlanilhaEstoque());
//# sourceMappingURL=server.js.map