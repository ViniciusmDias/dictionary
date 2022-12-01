import { useCallback, useEffect, useState } from "react";
import { useWord } from "../../contexts/word";
import { dictionaryApi } from "../../services/dictionaryApi";
import { getWords } from "../../services/getWords";
import * as S from "./styles";

export function WordList() {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState<string[]>([]);

  const { setSelectedWord, setPhonetic, setAudio, setMeanings } = useWord();

  const setWordInfo = useCallback(async (word: string) => {
    try {
      const response = await dictionaryApi.get(word);
      const firstWord: Word = response.data[0];

      const wordMeanings = firstWord.meanings.map((meaning: Meaning) => {
        const firstDefinition = meaning.definitions[0];

        const definition = `${meaning.partOfSpeech} - ${firstDefinition.definition}`;
        meaning.partOfSpeech;

        return definition;
      });

      const newAudio = firstWord.phonetics
        .map((phonetic) => phonetic.audio)
        .filter(Boolean)[0];

      console.log(firstWord);
      console.log(newAudio);

      const newPhonetic = firstWord.phonetic;

      const newWord = firstWord.word;

      if (newWord) {
        setSelectedWord(newWord);
      }

      if (newPhonetic) {
        setPhonetic(newPhonetic);
      }

      if (newAudio !== null) {
        setAudio(newAudio);
      }

      if (wordMeanings.length > 0) {
        setMeanings(wordMeanings);
      }
    } catch (error) {}
  }, []);

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
            words.map((word) => (
              <button key={word} onClick={() => setWordInfo(word)}>
                {word}
              </button>
            ))
          )}
        </S.List>
      </S.WordListContent>
    </S.WordListContainer>
  );
}
