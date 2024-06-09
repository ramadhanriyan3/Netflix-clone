import useBillboard from "../hooks/useBilboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./playButton";
import { useContext } from "react";
import { MovieDispatchContext } from "@/context/context";

const Billboard = () => {
  const { data } = useBillboard();

  const dispatch = useContext(MovieDispatchContext);
  const handleOpenModal = () => {
    console.log(data);
    const movieInfoState = {
      type: "UPDATE_MOVIE_INFO",
      payload: data,
    };

    dispatch(movieInfoState);
  };
  return (
    <div className="relative h-[56.25vw]">
      <video
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[30%] md:top-[30%] ml-4 md:ml-12">
        <p className="text-white text-md md:text-4xl h-full w-6/12 lg:text-5xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-[8px] lg:text-lg md:text-base mt-2 md:mt-8 w-[90%] md:w-[80%] lg:w-6/12 drop-shadow-xl text-justify overflow-hidden">
          {data?.description}
        </p>
        <div className="flex items-center mt-3 md:mt-4 gap-2 ">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className=" text-white text-xs flex items-center gap-2 bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-fit lg:text-lg hover:bg-opacity-20 transition "
          >
            <AiOutlineInfoCircle className="w-[15px] h-[15px] md:w-[25px] md:h-[25px]" />{" "}
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
