"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MailController_1 = __importDefault(require("../contollers/MailController"));
var MailRouter = express_1.default.Router();
MailRouter.get('/test', MailController_1.default.sendTestMail);
exports.default = MailRouter;
//# sourceMappingURL=MailRouter.js.map