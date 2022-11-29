import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  display: none;
  background: ${(props) => props.theme["blue-700"]};

  @media (min-width: 768px) {
    display: flex;
  }
`;
