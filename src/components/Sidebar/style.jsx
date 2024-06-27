import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  border: 1px solid #ddd;
  height: 100vh;

  @media (max-width: 768px) {
    position: absolute;
    background-color: #fff;
    width: fit-content;
    z-index: 10;
  }
  
  ${({isVisible}) => {
    if(isVisible){
      return css`
        left: 0px;
        z-index: 10;
      `
    }
    return css`
        left: -415px;
        z-index: 10;
      `
  }}
`