"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
async function routes(fastify, options) {
    fastify.get('/test', async (request, reply) => {
        return { ok: true };
    });
}
exports.routes = routes;
//# sourceMappingURL=routes.js.map