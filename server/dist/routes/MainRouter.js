"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MailRouter_1 = __importDefault(require("./MailRouter"));
var MainRouter = express_1.default.Router();
// it needs to have use not get when chainging
MainRouter.use('/mail', MailRouter_1.default);
exports.default = MainRouter;
//# sourceMappingURL=MainRouter.js.map