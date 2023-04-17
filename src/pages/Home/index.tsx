import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import Team from "../../components/Team";
import Infographic from "../../components/Infographic/Infographic";
import Infographic2 from "../../components/Infographic2/Infographic2";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <Container>
        <ScrollToTop />
        <ContentBlock
          type="center"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          icon="BigLogo.svg"
          id="intro"
        />
        <ContentBlock
          type="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="complex1.png"
          id="mission"
        />
        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          icon="logo.svg"
          id="about"
        />
      </Container>
      <Container fullWidth>

        <Infographic />
        <MiddleBlock 
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          id = "middleBlock"
          bgColor="#D1E2DD"
        />
        <Infographic2 />
      </Container>
    </>
  );
};

export default Home;
