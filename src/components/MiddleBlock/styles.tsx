import styled from "styled-components";

export const MiddleBlockSection = styled("section")<{ bgColor?: string }>`
  position: relative;
  padding: 3rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 1024px) {
    padding: 1rem 0 1rem;
  }
`;



export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
