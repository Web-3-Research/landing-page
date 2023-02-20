import React from "react";
import { Container, StyledInput } from "./styles";
import { Label } from "./styles";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, placeholder, onChange }) => (
  <Container>
    <Label htmlFor={name}>{name}</Label>
    <StyledInput placeholder={placeholder} name={name} id={name} onChange={onChange} />
  </Container>
);

export default Input;
