type Meaning = {
  partOfSpeech: string;
  definitions: [
    {
      definition: string;
    }
  ];
};

type Phonetic = {
  audio: ?string;
};

interface Word {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
}
