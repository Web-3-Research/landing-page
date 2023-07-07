import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import InfographicContent from "../../content/Infographic.json";
import MissionContent from "../../content/MissionContent.json";
import Infographic from "../../components/Infographic/Infographic";
import EmailSignup from "../../components/Email/EmailSignup";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

interface InfographicBlockProps {
  id: string;
  heading: string;
  text: string;
  position: {
    top: string;
    left: string;
  };
}

const Home = () => {
  const infographicBlocks = InfographicContent.blocks.map((block) => ({
    id: block.position.id, // Fix the id location
    heading: block.heading,
    text: block.text,
    position: {
      top: block.position.top,
      left: block.position.left,
    },
  }));

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
        <div id="product"></div>
      {/* <Infographic id="product" title={InfographicContent.title} blocks={infographicBlocks} /> */}

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