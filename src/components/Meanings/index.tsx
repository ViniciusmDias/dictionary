import { useWord } from "../../contexts/word";
import { MeaningsContainer } from "./styles";

export function Meanings() {
  const { meanings } = useWord();

  return (
    <MeaningsContainer>
      <h1>Meanings</h1>
      {meanings.map((meaning) => (
        <h4 key={meaning}>{meaning}</h4>
      ))}
    </MeaningsContainer>
  );
}
