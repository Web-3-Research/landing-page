import React, { useState } from "react";
import { Row, Col } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";
import LegalPopup from "../Legal/LegalPopup";
import {
  FooterSection,
  Para,
  Large,
  Chat,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  LegalLink,
  Copyright,
} from "./styles";

interface Props extends WithTranslation {
  children?: React.ReactNode;
}

const Footer: React.FC<Props & WithTranslation> = ({ t }: Props & WithTranslation) => {
  const [isLegalPopupVisible, setIsLegalPopupVisible] = useState(false);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const handleLegalPopupOpen = () => {
    setIsLegalPopupVisible(true);
  };

  const handleLegalPopupClose = () => {
    setIsLegalPopupVisible(false);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <LegalLink onClick={handleLegalPopupOpen}>{t("Legal")}</LegalLink>
              <LegalPopup onClose={handleLegalPopupClose} isVisible={isLegalPopupVisible} />

            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
              {/* <Label htmlFor="select-lang">{t("Language")}</Label> */}
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
                <LanguageSwitch onClick={() => handleChange("kr")}>
                  <SvgIcon
                    src="kr.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
              <Col lg={4} md={4} sm={12} xs={12}>
              
            </Col>

            </Col>
          </Row>
        </Container>
        <Copyright>{t("Web3 Research Limited © 2023. All rights reserved.")}</Copyright>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
