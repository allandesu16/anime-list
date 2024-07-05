import Image from "next/image";
import { motionDiv } from "./motionDiv";
export interface AnimeProp {
    id: string;
    name: string;
    image: {
        original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
}

interface Prop {
    anime: AnimeProp;
    index: number;
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
function AnimeCard({ anime, index }: Prop) {
    return (
        <motionDiv
            variants={variants}
            transition={{
                delay: index * 0.15,
                ease: "easeInOut",
                duration: 0.5,
            }}
            viewport={{ amount: 0 }}
            initial="hidden"
            animate="visible"
            className="max-w-sm  relative w-full shadow-lg p-2 rounded-2xl hover:shadow-neutral-800"
        >
            <div className="relative w-full h-[35vh] rounded-2xl overflow-hidden">
                <Image
                    src={`https://shikimori.one${anime.image.original}`}
                    alt={anime.name}
                    fill
                />
            </div>
            <div className="py-4 flex flex-col gap-3">
                <div className="flex justify-between items-center gap-1">
                    <h2 className="font-semibold text-white text-lg line-clamp-1 w-full">
                        {anime.name}
                    </h2>
                    <div className="py-1 px-2 bg-[#161921] rounded-xl">
                        <p className="text-white text-sm font-bold capitalize">
                            {anime.kind}
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between px-2">
                    <div className="flex flex-row gap-2 items-center">
                        <Image
                            src="./episodes.svg"
                            alt="episodes"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <p className="text-sm text-white font-bold">
                            {anime.episodes || anime.episodes_aired} ep
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Image
                            src="./star.svg"
                            alt="star"
                            width={18}
                            height={18}
                            className="object-contain"
                        />
                        <p className="text-sm font-bold text-[#FFAD49]">
                            {anime.score}/10
                        </p>
                    </div>
                </div>
            </div>
        </motionDiv>
    );
}

export default AnimeCard;
