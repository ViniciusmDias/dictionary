import * as S from "./styles";
import { TextBox } from "../../components/TextBox";
import { Audio } from "../../components/Audio";
import { Meanings } from "../../components/Meanings";
import { WordList } from "../../components/WordList";

export function Dictionary() {
  return (
    <S.Container>
      <S.WordSection>
        <TextBox />
        <Audio />
        <Meanings />
        <S.ButtonsContainer>
          <button>Voltar</button>
          <button>Próximo</button>
        </S.ButtonsContainer>
      </S.WordSection>
      <S.WordListSection>
        <WordList />
      </S.WordListSection>
    </S.Container>
  );
}
