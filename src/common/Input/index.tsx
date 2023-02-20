import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";

interface InputProps {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  t?: any;
  error?: string;
}

const Input = ({ name, placeholder, onChange, t, error }: InputProps & { t: any }) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
