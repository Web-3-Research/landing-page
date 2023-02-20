import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({ placeholder, value, name, onChange, t }: InputProps & { t: any }) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledTextArea
      placeholder={t(placeholder)}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
    />
  </StyledContainer>
);

export default withTranslation()(TextArea);
