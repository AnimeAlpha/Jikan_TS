import { AnimeById } from "./interfaces/anime/ById";
import { CharactersStaff } from "./interfaces/anime/CharactersStaff";
import { Episodes } from "./interfaces/anime/Episodes";
import { Forum } from "./interfaces/anime/Forum";
import { MoreInfo } from "./interfaces/anime/MoreInfo";
import { News } from "./interfaces/anime/News";
import { Recommendations } from "./interfaces/anime/Recommendations";
import { Reviews } from "./interfaces/anime/Reviews";
import { Stats } from "./interfaces/anime/Stats";
import { UserUpdates } from "./interfaces/anime/UserUpdates";
import { Videos } from "./interfaces/anime/Videos";
declare const _default: {
    byId: (id: number) => Promise<AnimeById | undefined>;
    charactersStaff: (id: number) => Promise<CharactersStaff | undefined>;
    episodes: (id: number, page?: number) => Promise<Episodes | undefined>;
    forum: (id: number) => Promise<Forum | undefined>;
    moreInfo: (id: number) => Promise<MoreInfo | undefined>;
    news: (id: number) => Promise<News | undefined>;
    pictures: (id: number) => Promise<any>;
    recommendations: (id: number) => Promise<Recommendations | undefined>;
    reviews: (id: number, page?: number) => Promise<Reviews | undefined>;
    stats: (id: number) => Promise<Stats | undefined>;
    userUpdates: (id: number, page?: number) => Promise<UserUpdates | undefined>;
    videos: (id: number) => Promise<Videos | undefined>;
};
export default _default;