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
const characters = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/characters`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const forum = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/forum`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const moreInfo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/moreinfo`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const news = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/news`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const pictures = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/pictures`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const recommendations = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/recommendations`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const reviews = (id, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        ow_1.default(page, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/reviews/${page}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const stats = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/stats`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const userUpdates = (id, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(id, ow_1.default.number.positive);
        ow_1.default(page, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/manga/${id}/userupdates/${page}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
exports.default = {
    characters,
    forum,
    moreInfo,
    news,
    pictures,
    recommendations,
    reviews,
    stats,
    userUpdates
};
