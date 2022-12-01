import styled from "styled-components";

export const AudioContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  .player {
    width: 100%;

    &.inactive {
      opacity: 0.2;
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  p {
    font-size: 0.75rem;
    font-weight: bold;
  }
`;
