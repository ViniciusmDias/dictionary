import { useWord } from "../../contexts/word";
import { FavoriteContainer } from "./styles";
import { FiStar } from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";

export function Favorite() {
  const { setFavoriteWords, selectWord, favoriteWords } = useWord();
  const [isFavorite, setIsFavorite] = useState(false);

  const removeWordFromFavorite = (newWord: string) => {
    const newFavoriteWords = favoriteWords.filter((word) => word !== newWord);

    setFavoriteWords(newFavoriteWords);
  };

  const setFavoriteInfo = useCallback(
    (newWord: string) => {
      const wordIsFavorite = !!favoriteWords.includes(newWord);

      setIsFavorite(wordIsFavorite);
    },
    [favoriteWords]
  );

  useEffect(() => {
    setFavoriteInfo(selectWord);
  }, [selectWord, favoriteWords]);

  return (
    <FavoriteContainer>
      {isFavorite ? (
        <button onClick={() => removeWordFromFavorite(selectWord)}>
          <FiStar /> UnFavorite
        </button>
      ) : (
        <button
          onClick={() =>
            setFavoriteWords((favoriteWords) => [...favoriteWords, selectWord])
          }
        >
          <FiStar /> Favorite
        </button>
      )}
    </FavoriteContainer>
  );
}
