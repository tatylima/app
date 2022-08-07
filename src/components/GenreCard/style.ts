import styled, { css } from "styled-components";

export const GenreBox = styled.div`
  ${({ theme }) => css`
    width: 10rem;
	  height:10rem;
    background-color: gray;
    display:flex;
    align-items: center;
    justify-content: center;
  `}
`;