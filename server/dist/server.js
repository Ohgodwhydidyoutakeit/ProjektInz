"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send({
        message: "Works Great"
    });
});
app.listen(process.env.PORT || 3000, function () {
    console.log("Server listens on http://localhost:".concat(process.env.PORT || 3000));
});
//# sourceMappingURL=server.js.map