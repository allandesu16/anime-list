"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
    const response = await fetch(
        `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
    );

    const data = await response.json();
    return data
};
