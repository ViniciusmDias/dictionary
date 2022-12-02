import styled from "styled-components";

export const TextBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45vh;
  border: 2px solid ${(props) => props.theme["black"]};
  border-radius: 0.25rem;
  background: ${(props) => props.theme["pink"]};

  h3 {
    margin-bottom: 1.5rem;
  }
`;
