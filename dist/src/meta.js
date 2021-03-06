"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ow_1 = __importDefault(require("ow"));
const utils_1 = require("./utils");
const requests = (type = "anime", period = "monthly", offset = 1000) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(offset, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/meta/requests/${type}/${period}/${offset}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const status = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api("/meta/status"); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
exports.default = {
    requests,
    status
};
