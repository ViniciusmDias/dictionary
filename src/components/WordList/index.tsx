import { useCallback, useEffect, useState } from "react";
import { useWord } from "../../contexts/word";
import { dictionaryApi } from "../../services/dictionaryApi";
import { getWords } from "../../services/getWords";
import { wordsData } from "../../../database/words";
import * as S from "./styles";
import api from "../../services/api";

export function WordList() {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState<string[]>([]);
  const [historicWords, setHistoricWords] = useState<string[]>([]);

  const [tab, setTab] = useState("wordlist");

  const { setSelectedWord, setPhonetic, setAudio, setMeanings, favoriteWords } =
    useWord();

  const setWordInfo = useCallback(async (word: string, historic: string[]) => {
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

      historic.push(firstWord.word);

      localStorage.setItem("@dictionary:historic", JSON.stringify(historic));
      setHistoricWords(historic);
    } catch (error) {
      alert("This word was not found in our vocabulary, try another word 😥");
    }
  }, []);

  const setWordListInfo = useCallback(async (newLimit: number) => {
    setLoading(true);
    try {
      const newWords = await api.get(`/words?_limit=${newLimit}`);

      if (newWords) {
        setWords(newWords.data);
      }
    } catch {
      const newWords = wordsData;

      setWords(newWords);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (historicWords.length === 0) {
      const historic = window.localStorage.getItem("@dictionary:historic");

      if (historic) {
        setHistoricWords(JSON.parse(historic));
      }
    }
  }, []);

  useEffect(() => {
    setWordListInfo(200);
  }, [setWordListInfo]);
  return (
    <S.WordListContainer>
      <S.WordListHeader>
        <button onClick={() => setTab("wordlist")}>Word list</button>
        <button onClick={() => setTab("historic")}>History</button>
        <button onClick={() => setTab("favorites")}>Favorites</button>
      </S.WordListHeader>
      <S.WordListContent>
        <h5>Word list</h5>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <>
            <S.List>
              {tab === "wordlist" &&
                words.map((word) => (
                  <button
                    key={word}
                    onClick={() => setWordInfo(word, historicWords)}
                  >
                    {word}
                  </button>
                ))}
              {tab === "historic" &&
                historicWords.map((word) => (
                  <button
                    key={word}
                    onClick={() => setWordInfo(word, historicWords)}
                  >
                    {word}
                  </button>
                ))}
              {tab === "favorites" &&
                favoriteWords.map((word) => (
                  <button
                    key={word}
                    onClick={() => setWordInfo(word, historicWords)}
                  >
                    {word}
                  </button>
                ))}
            </S.List>
          </>
        )}
      </S.WordListContent>
    </S.WordListContainer>
  );
}
