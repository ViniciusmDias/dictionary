import { useWord } from "../../contexts/word";
import { TextBoxContainer } from "./styles";

export function TextBox() {
  const { selectWord, phonetic } = useWord();

  return (
    <TextBoxContainer>
      <h3>{selectWord}</h3>
      <h4>{phonetic}</h4>
    </TextBoxContainer>
  );
}
