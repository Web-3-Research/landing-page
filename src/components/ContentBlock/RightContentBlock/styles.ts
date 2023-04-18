import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  background-color: #F4F4F3; /* Add this line to set the background color */

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  padding-right: 2rem; /* Add this line to set right padding */

`;

export const ContentTitle = styled("h6")`
  margin-bottom: 1.5rem;
  padding-right: 2rem; /* Add this line to set right padding */
  padding-left: 2rem; /* Add this line to set left padding */
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  margin: 0 auto; /* Add this line to center the content */
   padding-left: 1rem; 
  
  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;



