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
const animeList = (username, type = "all", page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(page, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/user/${username}/animelist/${type}/${page}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const friends = (username, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(page, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/user/${username}/friends/${page}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const history = (username, type = "both") => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (type === "anime") {
            const anime = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/user/${username}/history/anime`); }));
            return anime.body;
        }
        if (type === "both") {
            const both = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/user/${username}/history`); }));
            return both.body;
        }
        if (type === "manga") {
            const manga = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/user/${username}/history/manga`); }));
            return manga.body;
        }
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const mangaList = (username, type = "all", page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(page, ow_1.default.number.positive);
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/user/${username}/mangalist/${type}/${page}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const profile = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/user/${username}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
exports.default = {
    animeList,
    friends,
    history,
    mangaList,
    profile
};
