"use client";

import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import FavButton from "./favButton";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MovieDispatchContext } from "@/context/context";

interface MovieProp {
  data: Record<string, any>;
}

const MovieCard = ({ data }: MovieProp) => {
  const navigate = useRouter();

  const dispatch = useContext(MovieDispatchContext);

  const handleModalInfo = (data: any) => {
    const movieInfoState = {
      type: "UPDATE_MOVIE_INFO",
      payload: data,
    };

    dispatch(movieInfoState);
  };

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <Image
        layout="fill"
        objectFit="cover"
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
        alt="thumbnail"
        src={data.thumbnailUrl}
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-200 w-full scale-0 group-hover:scale-[1.1] group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <Image
          alt="thumbnail"
          layout="responsive"
          src={data.thumbnailUrl}
          objectFit="cover"
          width={16}
          height={9}
          className="cursor-pointer transition object-cover duration shadow-xl rounded-t-md w-full h-[12vw]"
        />
        <div className="z-10 bg-zinc-900 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                onClick={() => navigate.push(`/watch/${data.id}`)}
              >
                <BsFillPlayFill size={25} />
              </div>
              <FavButton movieId={data.id} />
            </div>
            <AiOutlineInfoCircle
              size={15}
              className="text-white cursor-pointer"
              onClick={() => handleModalInfo(data)}
            />
          </div>
          <p className="text-green-400 font-semibold text-sm mt-2 lg:mt-3">
            New <span className="text-white">{data.title}</span>
          </p>
          <div className="flex flex-col mt-2 lg:mt-3 gap-2 justify-center">
            <p className="text-white text-[10px] lg:text-sm">
              {data.duration} Hours
            </p>
            <p className="text-white text-[10px] lg:text-sm font-semibold">
              {data.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
