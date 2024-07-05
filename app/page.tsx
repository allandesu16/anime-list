import Image from "next/image";
import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import LoadMore from "@/components/LoadMore";
import { fetchAnime } from "./action";

export default async function Home() {
    const data = await fetchAnime(1);
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h2 className="text-2xl text-white font-bold">Explore Anime</h2>

            <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
                {data.map((item: AnimeProp, index: number) => (
                    <AnimeCard key={item.id} anime={item} index={index} />
                ))}
            </section>
            <LoadMore />
        </main>
    );
}
