"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fetchAnime } from "@/app/action";
import AnimeCard, { AnimeProp } from "./AnimeCard";
let page = 2;

function LoadMore() {
    const { ref, inView } = useInView({});
    const [data, setdata] = useState<AnimeProp[]>([]);
    useEffect(() => {
        if (inView) {
            fetchAnime(page).then((res) => {
                setdata([...data, ...res]);
                page++;
            });
        }
    }, [inView, data]);
    return (
        <>
            <section className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
                {data.map((item: AnimeProp, index: number) => (
                    <AnimeCard key={item.id} anime={item} index={index} />
                ))}
            </section>
            <section className="flex justify-center items-center w-full">
                <div ref={ref}>
                    <Image
                        src="./spinner.svg"
                        alt="spinner"
                        width={56}
                        height={56}
                        className="object-contain"
                    />
                </div>
            </section>
        </>
    );
}

export default LoadMore;
