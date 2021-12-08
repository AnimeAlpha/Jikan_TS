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
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const p_memoize_1 = __importDefault(require("p-memoize"));
const p_queue_1 = __importDefault(require("p-queue"));
const pino_1 = __importDefault(require("pino"));
const quick_lru_1 = __importDefault(require("quick-lru"));
const package_json_1 = __importDefault(require("../package.json"));
exports.baseUrl = "https://api.jikan.moe/v3";
exports.queue = new p_queue_1.default({ concurrency: 2 });
function fetchJson(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = {
            headers: {
                "Content-Type": "application/json",
                "User-Agent": `${package_json_1.default.name} / ${package_json_1.default.version} (${package_json_1.default.repository.url})`
            },
            method: "GET",
            mode: "cors"
        };
        const response = yield cross_fetch_1.default(exports.baseUrl + url, request);
        const json = (yield response.json());
        return { body: json };
    });
}
exports.api = p_memoize_1.default(fetchJson, { cache: new quick_lru_1.default({ maxSize: 1000 }) });
exports.Logger = pino_1.default({
    name: "jikants",
    prettyPrint: true
});
