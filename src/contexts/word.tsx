import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type WordContextData = {
  selectWord: string;
  setSelectedWord: Dispatch<SetStateAction<string>>;
  phonetic: string;
  setPhonetic: Dispatch<SetStateAction<string>>;
  audio: string;
  setAudio: Dispatch<SetStateAction<string>>;
  meanings: string[];
  setMeanings: Dispatch<SetStateAction<string[]>>;
  favoriteWords: string[];
  setFavoriteWords: Dispatch<SetStateAction<string[]>>;
};

export const WordContext = createContext({} as WordContextData);

type WordContextProviderProps = {
  children: ReactNode;
};

export const WordProvider: React.FC<WordContextProviderProps> = ({
  children,
}: WordContextProviderProps) => {
  const [selectWord, setSelectedWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [audio, setAudio] = useState("");
  const [meanings, setMeanings] = useState<string[]>([]);
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);

  return (
    <WordContext.Provider
      value={{
        selectWord,
        setSelectedWord,
        phonetic,
        setPhonetic,
        audio,
        setAudio,
        meanings,
        setMeanings,
        favoriteWords,
        setFavoriteWords,
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWord = (): WordContextData => {
  return useContext(WordContext);
};
