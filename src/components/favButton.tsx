import useFavorites from "../../hooks/useFavorites";
import useCurrentUser from "../../hooks/useCurrentUser";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import { useMemo, useCallback } from "react";
import axios from "axios";

const FavButton = ({ movieId }: { movieId: string }) => {
  const { mutate: mutateFavorites } = useFavorites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorites = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;
    if (isFavorites) {
      response = await axios.delete("/api/favorites", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorites", { movieId });
    }

    const updateFavoritesIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoritesIds: updateFavoritesIds,
    });
    mutateFavorites();
  }, [isFavorites, mutate, currentUser, mutateFavorites, movieId]);

  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      {isFavorites ? (
        <AiOutlineCheck className="text-white" size={25} />
      ) : (
        <AiOutlinePlus className="text-white" size={25} />
      )}
    </div>
  );
};

export default FavButton;
