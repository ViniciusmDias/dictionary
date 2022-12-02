import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 3.5rem);
  max-height: 100vh;
  position: fixed;
  overflow-y: auto;
  top: 4rem;
  left: 3.5rem;
  bottom: 0;
  transition: 0.5s;

  @media (max-width: 500px) {
    left: 0;
  }
`;
