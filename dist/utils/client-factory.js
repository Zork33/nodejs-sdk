"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientFactory = void 0;
const nice_grpc_1 = require("nice-grpc");
const nice_grpc_client_middleware_deadline_1 = require("nice-grpc-client-middleware-deadline");
const retry_1 = require("../middleware/retry");
exports.clientFactory = (0, nice_grpc_1.createClientFactory)()
    .use(retry_1.retryMiddleware)
    .use(nice_grpc_client_middleware_deadline_1.deadlineMiddleware);
