"use client";

import { MouseTrailer } from "@/components/MouseTrailer";
import Hero from "@/components/Sections/Hero";
import { Projects } from "@/components/Sections/Projects";
import { device } from "@/styling/breakpoints";
import styled from "@emotion/styled";
import { useState, MouseEvent } from "react";

export default function Home() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [mouseposition, setMousePosition] = useState({
    xPosition: 0,
    yPosition: 0,
  });

  function handleMouseMove(e: MouseEvent) {
    const circleOffset = 96;

    setMousePosition({
      xPosition: e.clientX - circleOffset,
      yPosition: e.clientY - circleOffset,
    });
  }

  const handleMouseOver = () => setShowTrailer(true);
  const handleMouseLeave = () => setShowTrailer(false);

  return (
    <>
      <HeroContainer
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Hero setButtonHovered={setButtonHovered} />
        <MouseTrailer
          buttonHovered={buttonHovered}
          mousePosition={mouseposition}
          showTrailer={showTrailer}
        />
      </HeroContainer>
      <ProjectsContainer>
        <Projects />
      </ProjectsContainer>
    </>
  );
}

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectsContainer = styled.section`
  position: relative;
  z-index: 1;
  background-color: #f6f6f8;
  padding: 2rem;
  margin: 0 auto;
  @media ${device.md} {
    padding: 8rem;
  }
`;
