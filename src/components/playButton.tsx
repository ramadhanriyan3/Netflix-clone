"use client";

import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

const PlayButton = ({ movieId }: { movieId: string }) => {
  const navigate = useRouter();

  return (
    <button
      onClick={() => navigate.push(`/watch/${movieId}`)}
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex items-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill className="mr-1 w-[15px] h-[15px] md:w-[25px] md:h-[25px]" />
      Play
    </button>
  );
};

export default PlayButton;
