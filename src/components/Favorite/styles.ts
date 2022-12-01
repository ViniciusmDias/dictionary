import styled from "styled-components";

export const FavoriteContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0;
    border: 1px solid;
    background: ${(props) => props.theme["white"]};

    svg {
      margin-right: 0.5rem;
    }
  }
`;
