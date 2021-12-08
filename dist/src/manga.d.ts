import { Characters } from "./interfaces/manga/Characters";
import { News } from "./interfaces/manga/News";
import { Reviews } from "./interfaces/manga/Reviews";
import { Stats } from "./interfaces/manga/Stats";
import { UserUpdates } from "./interfaces/manga/UserUpdates";
declare const _default: {
    characters: (id: number) => Promise<Characters | undefined>;
    forum: (id: number) => Promise<any>;
    moreInfo: (id: number) => Promise<any>;
    news: (id: number) => Promise<News | undefined>;
    pictures: (id: number) => Promise<any>;
    recommendations: (id: number) => Promise<any>;
    reviews: (id: number, page?: number) => Promise<Reviews | undefined>;
    stats: (id: number) => Promise<Stats | undefined>;
    userUpdates: (id: number, page?: number) => Promise<UserUpdates | undefined>;
};
export default _default;
