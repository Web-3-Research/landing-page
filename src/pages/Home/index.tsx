import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import Infographic from "../../components/Infographic/Infographic";
// import Infographic2 from "../../components/Infographic2/Infographic2";
import EmailSignup from "../../components/Email/EmailSignup";
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <Container fullWidth>
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
          id="about"
        />
        <ContentBlock
          type="left"
          title={AboutContent.title}
          content={AboutContent.text}
          icon="logo.svg"
          id="mission"
        />
      </Container>
      <Container fullWidth>

        <Infographic />
        <MiddleBlock 
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          id = "middleBlock"
          bgColor="#ffffff"
        />
      <EmailSignup />
      </Container>
    </>
  );
};

export default Home;
