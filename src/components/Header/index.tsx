import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const Header = () => {
  const [open, setVisibility] = useState(false);
  const { t } = useTranslation();
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const showDrawer = () => {
    setVisibility(!open);
  };

  const onClose = () => {
    setVisibility(!open);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>

        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Product")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button onClick={() => scrollTo("middleBlock")}>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
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
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="55" height="55" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer
  width={window.innerWidth > 576 ? '50%' : '100%'}
  closable={false}
  open={open}
  onClose={onClose}
  placement="right"
  zIndex={999}
>
  <Col style={{ marginBottom: "2.5rem" }}>
    <Label onClick={onClose}>
      <Col span={12}>
        <Menu>{t("Menu")}</Menu>
      </Col>
      <Col span={12}>
        <Outline />
      </Col>
    </Label>
  </Col>
  <MenuItem />
</Drawer>

      </Container>
    </HeaderSection>
  );
};
export default Header;