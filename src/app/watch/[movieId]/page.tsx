"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useMovie from "../../../hooks/useMovie";

const Watch = ({ params }: { params: { movieId: string } }) => {
  const navigate = useRouter();
  const movieId = params.movieId;
  const { data } = useMovie(movieId);

  return (
    <div className="w-screen h-screen bg-black ">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineArrowLeft
          onClick={() => navigate.push("/home")}
          className="text-white cursor-pointer"
          size={40}
        />
        <p className="text-white text-xl md:text-3xl font-semibold">
          <span className="font-light">Watching:</span> {data?.title}
        </p>
      </nav>
      <video
        className="h-full w-full"
        autoPlay
        controls
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
