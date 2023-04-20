import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) => (
  <StyledButton
    color={color}
    fixedWidth={fixedWidth}
    onClick={onClick}
    type={type}
    disabled={disabled} 
  >
    {children}
  </StyledButton>
);
