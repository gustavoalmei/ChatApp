import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  border: 1px solid #ddd;
  height: 100vh;

  @media (max-width: 768px) {
    position: absolute;
    background-color: #fff;
    width: fit-content;
    left: ${props => ( props.$menuresponse? '0px': '-415px')};
    z-index: 10;
  }
`