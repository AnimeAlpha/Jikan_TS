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
const anime = (genreId, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(genreId, ow_1.default.number.lessThanOrEqual(43));
        ow_1.default(genreId, ow_1.default.number.greaterThanOrEqual(1));
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/genre/anime/${genreId}/${page}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
const manga = (genreId, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(genreId, ow_1.default.number.lessThanOrEqual(43));
        ow_1.default(genreId, ow_1.default.number.greaterThanOrEqual(1));
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`/genre/manga/${genreId}/${page}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
exports.default = {
    anime,
    manga
};
