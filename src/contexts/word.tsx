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
};

export const WordContext = createContext({} as WordContextData);

type WordContextProviderProps = {
  children: ReactNode;
};

export const WordProvider: React.FC<WordContextProviderProps> = ({
  children,
}: WordContextProviderProps) => {
  const [selectWord, setSelectedWord] = useState("Hello");
  const [phonetic, setPhonetic] = useState("");
  const [audio, setAudio] = useState("");
  const [meanings, setMeanings] = useState<string[]>([]);

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
      }}
    >
      {children}
    </WordContext.Provider>
  );
};

export const useWord = (): WordContextData => {
  return useContext(WordContext);
};
