import styled from "styled-components";

interface StyledContainerProps {
  border?: boolean;
  fullWidth?: boolean;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  width: 100%;
  max-width: ${(p) => (p.fullWidth ? "100%" : "1200px")};
  margin-right: auto;
  margin-left: auto;
  padding: ${(p) => (p.fullWidth ? "0" : "0 60px")};
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: ${(p) => (p.fullWidth ? "100%" : "calc(100% - 68px)")};
    padding: ${(p) => (p.fullWidth ? "0" : "0 30px")};
  }

  @media only screen and (max-width: 768px) {
    max-width: ${(p) => (p.fullWidth ? "100%" : "calc(100% - 38px)")};
    padding: ${(p) => (p.fullWidth ? "0" : "0 18px")};
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: ${(p) => (p.fullWidth ? "0" : "0 18px")};
  }
`;
