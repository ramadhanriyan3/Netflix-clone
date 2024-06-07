import Image from "next/image";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogCancel,
} from "./ui/alert-dialog";
import { BsFillPlayFill } from "react-icons/bs";
import FavButton from "./favButton";
import { useContext } from "react";
import { MovieInfoContext, MovieDispatchContext } from "@/lib/movieContext";
import { RiCloseCircleLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const ModalInfo = () => {
  const movieInfo = useContext(MovieInfoContext);
  const dispatch = useContext(MovieDispatchContext);
  const navigate = useRouter();
  const handleClose = () => {
    const closeInfo = { type: "CLOSE", payload: movieInfo };

    dispatch(closeInfo);
  };

  return (
    <AlertDialog open={movieInfo.isOpen}>
      <AlertDialogContent className=" bg-neutral-800 border-none px-0 pt-0 my-auto mx-auto">
        <Image
          src={movieInfo.thumbnailUrl}
          alt="thumbnail"
          objectFit="cover"
          layout="responsive"
          width={16}
          height={9}
          className="cursor-pointer transition duration shadow-xl rounded-t-md w-full h-[12vw]"
        />
        <AlertDialogCancel
          className="absolute mt-0 top-1 right-1 bg-transparent p-2 border-none hover:bg-transparent"
          onClick={handleClose}
        >
          <RiCloseCircleLine size={25} />
        </AlertDialogCancel>
        <div className="px-3">
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
              onClick={() => navigate.push(`/watch/${movieInfo.id}`)}
            >
              <BsFillPlayFill size={25} />
            </div>
            <FavButton movieId={movieInfo.id} />
          </div>
          <p className="text-green-400 font-semibold text-sm mt-2 lg:mt-3">
            New <span className="text-white">{movieInfo.title}</span>
          </p>
          <div className="flex flex-col mt-2 lg:mt-3 gap-2 justify-center">
            <p className="text-white text-[10px] lg:text-sm">
              {movieInfo.duration} Hours
            </p>
            <p className="text-white text-[10px] lg:text-sm font-semibold">
              {movieInfo.genre}
            </p>
            <p className="text-white text-[10px] lg:text-sm font-semibold text-justify">
              {movieInfo.description}
            </p>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalInfo;
