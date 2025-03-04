import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dolphinProductions from "../../Assets/Projects/dolphinproductions.png";
import starCore from "../../Assets/Projects/starcore.png";
import cubeNodes from "../../Assets/Projects/cubenodes.png";
import lolameStudio from "../../Assets/Projects/lolamestudio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dolphinProductions}
              isBlog={false}
              title="Dolphin Productions™"
              description="Dolphin Productions™ is my current company, specializing in organizing immersive and dynamic events within Minecraft Java Edition. We design and develop custom experiences, leveraging advanced plugins and mods to create unique gameplay scenarios. Our goal is to push the boundaries of creativity and innovation, delivering high-quality events that engage and entertain the community."
              ghLink="https://github.com/DolphProdTM"
              demoLink="https://discord.gg/qKvB4jsbqx"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starCore}
              isBlog={false}
              title="StarCore™"
              description="StarCore™ is my personal brand, used as a technology and development label across various projects. It serves as the backbone for innovative solutions, including tools and systems that enhance experiences in Minecraft Java Edition and beyond. StarCore™ is often featured in Dolphin Productions™ events, providing advanced technology to power immersive and dynamic gameplay."
              ghLink="https://github.com/StarCoreTM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cubeNodes}
              isBlog={false}
              title="CubeNodes | Closed"
              description="CubeNodes was a hosting company where I worked as both CEO and developer. We specialized in providing high-performance server hosting for a variety of applications, all fully compatible with Pterodactyl Panel. Our services ranged from game servers to web hosting, ensuring reliability and scalability for our clients. Although CubeNodes is no longer active, it was a valuable experience in managing infrastructure, optimizing performance, and delivering quality hosting solutions."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lolameStudio}
              isBlog={false}
              title="L0LAME Studio"
              description="L0LAME Studio is a creative team focused on developing unique and engaging experiences, primarily within Minecraft Java Edition. While less formal than Dolphin Productions™, the studio brings innovative ideas to life through custom mods, plugins, and event development. As the Head Developer, I lead technical projects, ensuring smooth implementation and high-quality gameplay experiences."
              ghLink="https://github.com/L0LAME-Studio"
              demoLink="https://discord.gg/jyk7BCvDqA"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
