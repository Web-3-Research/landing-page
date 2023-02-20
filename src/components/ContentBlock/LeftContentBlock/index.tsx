import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Row, Col } from "antd";
import { SvgIcon } from "../../../common/SvgIcon";
import { LeftContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const LeftContentBlock: React.FC<LeftContentBlockProps> = ({
  icon,
  title,
  content,
  section,
  id,
  t,
}: LeftContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {Array.isArray(section) && section.length > 0 && (
                <ServiceWrapper>
                  {section.map((item: any, idx: number) => {
                    return (
                      <div key={idx}>
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </div>
                    );
                  }
                  )}
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};


export default LeftContentBlock
