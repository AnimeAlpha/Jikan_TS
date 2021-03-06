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
const search = (query, type, page = 1, filters) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        ow_1.default(page, ow_1.default.number.positive);
        ow_1.default(query, ow_1.default.string.minLength(3));
        const url = new URL(`/search/${type}?q=${query}&page=${page}`, utils_1.baseUrl);
        if (filters) {
            if (filters.end_date) {
                filters.end_date = new Date(filters.end_date).toISOString();
            }
            if (filters.genre) {
                ow_1.default(filters.genre, ow_1.default.number.lessThanOrEqual(44));
                ow_1.default(filters.genre, ow_1.default.number.greaterThanOrEqual(1));
            }
            if (filters.limit) {
                ow_1.default(filters.limit, ow_1.default.number.positive);
            }
            if (filters.score) {
                ow_1.default(filters.score, ow_1.default.number.positive);
            }
            if (filters.start_date) {
                filters.start_date = new Date(filters.start_date).toISOString();
            }
            Object.entries(filters).forEach(([key, value]) => {
                url.searchParams.append(key, value);
            });
        }
        const { body } = yield utils_1.queue.add(() => __awaiter(void 0, void 0, void 0, function* () { return yield utils_1.api(`${url.pathname}${url.search}`); }));
        return body;
    }
    catch (error) {
        utils_1.Logger.error(error);
    }
});
exports.default = {
    search
};
