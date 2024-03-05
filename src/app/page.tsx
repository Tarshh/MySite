"use client";

import { MouseTrailer } from "@/components/MouseTrailer";
import Hero from "@/components/Sections/Hero";
import styled from "@emotion/styled";
import { useState, MouseEvent } from "react";

export default function Home() {
  const [showTrailer, setShowTrailer] = useState(false);
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
  const handleMouseLeave = () => setShowTrailer(true);

  return (
    <Container
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <Hero />
      <MouseTrailer mousePosition={mouseposition} showTrailer={showTrailer} />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
