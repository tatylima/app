import styled, { css } from "styled-components";

export const GameBox = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: 15rem;
    height: 17rem;
    background-color: gray;
    transition: box-shadow 0.3s;
    :hover {
      box-shadow: 0px 0px 9px 4px #a6dfff;
    }
    img {
      max-width:100%;
      max-height:100%;
    }
  `}
`;