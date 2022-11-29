import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WordSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 768px) {
    width: 40vw;
    margin-right: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;

  button {
    background: ${(props) => props.theme["white"]};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    flex: 1;
    border-radius: 0;
    border: 1px solid;
    padding: 0.25rem 0;

    & + button {
      margin-left: 0.5rem;
    }
  }
`;

export const WordListSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1rem 0;
`;
