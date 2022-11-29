import styled from "styled-components";

export const WordListContainer = styled.header`
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 1.25rem;
    font-weight: 400;

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const WordListHeader = styled.header`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-radius: 0;
    border: 1px solid ${(props) => props.theme["black"]};
    background-color: ${(props) => props.theme["white"]};
    padding: 0.5rem 0;

    @media (min-width: 768px) {
      margin: 0 0.5rem;
      border-bottom: 0;
    }

    &:focus {
      background-color: ${(props) => props.theme["gray"]};
    }
  }
`;

export const WordListContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 35vh;

  @media (min-width: 768px) {
    height: 65vh;
    padding: 0.5rem;
    border: 1px solid ${(props) => props.theme["black"]};
  }
`;

export const List = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme["black"]};
  border-top: none;
  border-right: none;
  overflow: auto;

  @media (min-width: 768px) {
    margin-top: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    border: 1px solid ${(props) => props.theme["black"]};
    background-color: ${(props) => props.theme["white"]};
    padding: 0.75rem 0.5rem;

    &:focus {
      background-color: ${(props) => props.theme["gray"]};
    }
  }

  button:first-child {
    border-left: none;
    border-bottom: none;
  }
  button + button {
    border-left: none;
    border-bottom: none;
  }
`;
