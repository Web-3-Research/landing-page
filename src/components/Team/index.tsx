import React from "react";
import { Row, Col } from "antd";
import { Image, Text } from "./styles"; // Import styles for images and text
import { Slide } from "react-awesome-reveal";

const Team = () => {
  return (
    <>
    <Slide direction="up">
      <Row>
        <Col xs={24} sm={12} md={6}>
          <Image src="/../img/andyk1.png" alt="Andy Keh" />
          <Text>Andy Keh</Text>
          <Text>Engineer, Operations</Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Image src="/../img/med1.png" alt="Med" />
          <Text>Med</Text>
          <Text>Engineer, Data Scientist</Text>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Image src="/../img/jakub1.png" alt="Jakub" />
          <Text>Jakub</Text>
          <Text>Engineer, Solutions Architect</Text>
</Col>
<Col xs={24} sm={12} md={6}>
<Image src="/../img/john.jpg" alt="John Keh" />
<Text>John Keh</Text>
<Text>R&D, Operations</Text>
</Col>
</Row>
</Slide>
</>
);
};

export default Team;