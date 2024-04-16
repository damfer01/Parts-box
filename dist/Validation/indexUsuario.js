"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const express_validator_1 = require("express-validator");
const store = async function (request, response, next) {
    try {
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        next();
    }
    catch (error) {
        console.log(error);
    }
    ;
};
exports.store = store;
//# sourceMappingURL=indexUsuario.js.map