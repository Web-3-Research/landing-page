import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";
import {
  FooterSection,
  Title,
  Para,
  Large,
  Chat,
  Empty,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";


const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
          </Row>
          <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Feel free to reach out!")}</Large>
              <Para>
              </Para>
              <a id="contact" href="mailto:contact@web3r.tech">
                <Chat>{t(`contact@web3r.tech`)}</Chat>
              </a>
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="gb.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("cn")}>
                  <SvgIcon
                    src="hk.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      
    </>
  );
};

export default withTranslation()(Footer);
