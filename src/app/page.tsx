"use client";

import { MouseTrailer } from "@/components/MouseTrailer";
import Hero from "@/components/Sections/Hero";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
