import { StyledContainer } from "./styles";
import { ContainerProps } from "../types";

const Container = ({ border, fullWidth, children }: ContainerProps) => (
  <StyledContainer border={border} fullWidth={fullWidth}>
    {children}
  </StyledContainer>
);

export default Container;
