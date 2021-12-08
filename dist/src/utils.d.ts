import PQueue from "p-queue";
import pino from "pino";
export declare const baseUrl = "https://api.jikan.moe/v3";
export declare const queue: PQueue<import("p-queue/dist/priority-queue").default, import("p-queue/dist").DefaultAddOptions>;
export declare const api: <T = any>(url: string) => Promise<{
    body: T;
}>;
export declare const Logger: pino.Logger;
