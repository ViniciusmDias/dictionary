import * as S from "./styles";
import { TextBox } from "../../components/TextBox";
import { Audio } from "../../components/Audio";
import { Meanings } from "../../components/Meanings";
import { WordList } from "../../components/WordList";
import { Favorite } from "../../components/Favorite";

export function Dictionary() {
  return (
    <S.Container>
      <S.WordSection>
        <Favorite />
        <TextBox />
        <Audio />
        <Meanings />
        <S.ButtonsContainer className="disable">
          <button>Voltar</button>
          <button>Próximo</button>
        </S.ButtonsContainer>
        <p>We don't have this functionality yet. 😥 </p>
      </S.WordSection>
      <S.WordListSection>
        <WordList />
      </S.WordListSection>
    </S.Container>
  );
}
