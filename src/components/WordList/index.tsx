import { useCallback, useEffect, useState } from "react";
import { getWords } from "../../services/getWords";
import * as S from "./styles";

export function WordList() {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState<string[]>([]);

  const setWordListInfo = useCallback(async () => {
    setLoading(true);
    const newWords = await getWords(100);
    if (newWords) {
      setWords(newWords);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    setWordListInfo();
  }, [setWordListInfo]);
  return (
    <S.WordListContainer>
      <S.WordListHeader>
        <button>Word list</button>
        <button>History</button>
        <button>Favorites</button>
      </S.WordListHeader>
      <S.WordListContent>
        <h5>Word list</h5>
        <S.List>
          {loading ? (
            <p>Carregando...</p>
          ) : (
            words.map((word) => <button key={word}>{word}</button>)
          )}
        </S.List>
      </S.WordListContent>
    </S.WordListContainer>
  );
}
