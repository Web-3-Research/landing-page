import { Row, Col } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  CenterBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const CenterBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <CenterBlockContainer>
      <Fade direction="left">
        {React.createElement(
          Row,
          { justify: "center", align: "middle", id: id },
          <ContentWrapper>
            <SvgIcon src={icon} width="100%" height="100%" />
            <h6>{t(title)}</h6>
            <Content>{t(content)}</Content>
            <ButtonWrapper>
              {typeof button === "object" &&
                button.map((item: any, id: number) => {
                  return (
                    <Button
                      key={id}
                      color={item.color}
                      fixedWidth={true}
                      onClick={() => scrollTo("about")}
                    >
                      {t(item.title)}
                    </Button>
                  );
                })}
            </ButtonWrapper>
          </ContentWrapper>
        )}
      </Fade>
    </CenterBlockContainer>
  ) as React.ReactElement;
};

export default CenterBlock