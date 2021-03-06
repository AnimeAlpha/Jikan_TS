declare const _default: {
    Anime: {
        byId: (id: number) => Promise<import("./interfaces/anime/ById").AnimeById | undefined>;
        charactersStaff: (id: number) => Promise<import("./interfaces/anime/CharactersStaff").CharactersStaff | undefined>;
        episodes: (id: number, page?: number) => Promise<import("./interfaces/anime/Episodes").Episodes | undefined>;
        forum: (id: number) => Promise<import("./interfaces/anime/Forum").Forum | undefined>;
        moreInfo: (id: number) => Promise<import("./interfaces/anime/MoreInfo").MoreInfo | undefined>;
        news: (id: number) => Promise<import("./interfaces/anime/News").News | undefined>;
        pictures: (id: number) => Promise<any>;
        recommendations: (id: number) => Promise<import("./interfaces/anime/Recommendations").Recommendations | undefined>;
        reviews: (id: number, page?: number) => Promise<import("./interfaces/anime/Reviews").Reviews | undefined>;
        stats: (id: number) => Promise<import("./interfaces/anime/Stats").Stats | undefined>;
        userUpdates: (id: number, page?: number) => Promise<import("./interfaces/anime/UserUpdates").UserUpdates | undefined>;
        videos: (id: number) => Promise<import("./interfaces/anime/Videos").Videos | undefined>;
    };
    Character: {
        pictures: (id: number) => Promise<import("./interfaces/character/Pictures").Pictures | undefined>;
    };
    Club: {
        info: (id: number) => Promise<import("./interfaces/club/Club").Info | undefined>;
        members: (id: number, page?: number) => Promise<import("./interfaces/club/Club").Members | undefined>;
    };
    Genre: {
        anime: (genreId: number, page?: number) => Promise<import("./interfaces/genre/Genre").Anime | undefined>;
        manga: (genreId: number, page?: number) => Promise<import("./interfaces/genre/Genre").Manga | undefined>;
    };
    Magazine: {
        get: (id: number, page?: number) => Promise<import("./interfaces/magazine/Magazine").Magazine | undefined>;
    };
    Manga: {
        characters: (id: number) => Promise<import("./interfaces/manga/Characters").Characters | undefined>;
        forum: (id: number) => Promise<any>;
        moreInfo: (id: number) => Promise<any>;
        news: (id: number) => Promise<import("./interfaces/manga/News").News | undefined>;
        pictures: (id: number) => Promise<any>;
        recommendations: (id: number) => Promise<any>;
        reviews: (id: number, page?: number) => Promise<import("./interfaces/manga/Reviews").Reviews | undefined>;
        stats: (id: number) => Promise<import("./interfaces/manga/Stats").Stats | undefined>;
        userUpdates: (id: number, page?: number) => Promise<import("./interfaces/manga/UserUpdates").UserUpdates | undefined>;
    };
    Meta: {
        requests: (type?: import("./interfaces/meta/Meta").Types, period?: import("./interfaces/meta/Meta").Periods, offset?: number) => Promise<any>;
        status: () => Promise<import("./interfaces/meta/Meta").Status | undefined>;
    };
    Person: {
        pictures: (id: number) => Promise<any>;
    };
    Producer: {
        get: (id: number, page?: number) => Promise<import("./interfaces/producer/Producer").Producer | undefined>;
    };
    Schedule: {
        anime: (day?: import("./interfaces/schedule/Schedule").Days) => Promise<import("./interfaces/schedule/Schedule").Schedule | undefined>;
    };
    Search: {
        search: (query: string, type: import("./interfaces/search/Search").SearchTypes, page?: number, filters?: import("./interfaces/search/Search").Filters | undefined) => Promise<import("./interfaces/search/Search").Search | undefined>;
    };
    Season: {
        anime: (year: number, season: import("./interfaces/season/Season").Seasons) => Promise<import("./interfaces/season/Season").Season | undefined>;
        archive: () => Promise<import("./interfaces/season/SeasonArchive").SeasonArchive | undefined>;
        later: () => Promise<import("./interfaces/season/SeasonLater").SeasonLater | undefined>;
    };
    Top: {
        items: (type?: import("./interfaces/top/Top").Types, page?: number, subType?: "manga" | "airing" | "upcoming" | "doujin" | "manhua" | "manhwa" | "movie" | "ova" | "special" | "tv" | "bypopularity" | "favorite" | "novels" | "oneshots" | undefined) => Promise<import("./interfaces/top/Top").Result | undefined>;
    };
    User: {
        animeList: (username: string, type?: import("./interfaces/user/AnimeList").AnimeListTypes, page?: number) => Promise<import("./interfaces/user/AnimeList").AnimeList | undefined>;
        friends: (username: string, page?: number) => Promise<import("./interfaces/user/Friends").Friends | undefined>;
        history: (username: string, type?: import("./interfaces/user/History").Types) => Promise<import("./interfaces/user/History").History | undefined>;
        mangaList: (username: string, type?: import("./interfaces/user/MangaList").MangaListTypes, page?: number) => Promise<import("./interfaces/user/MangaList").MangaList | undefined>;
        profile: (username: string) => Promise<import("./interfaces/user/Profile").Profile | undefined>;
    };
};
export default _default;
