import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  id: string;
  t: any;
  bgColor?: string;
}

const MiddleBlock = ({ title, content, t, id, bgColor }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection bgColor={bgColor}>
      <Slide direction="up">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
