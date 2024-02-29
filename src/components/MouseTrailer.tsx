import { useState, MouseEvent } from "react";
import styled from "styled-components";

export function MouseTrailer() {
  const [mouseposition, setMousePosition] = useState({ x: 0, y: 0 });
  const circleOffset = 96;

  function handleMouseMove(e: MouseEvent) {
    setMousePosition({
      x: e.clientX - circleOffset,
      y: e.clientY - circleOffset,
    });
  }

  return (
    <StyledContainer onMouseMove={handleMouseMove}>
      <Trailer mousePosition={mouseposition} />
    </StyledContainer>
  );
}

const Trailer = styled.div.attrs<{ mousePosition: { x: number; y: number } }>(
  (props) => ({
    style: {
      left: `${props.mousePosition.x}px`,
      top: `${props.mousePosition.y}px`,
    },
  })
)`
  height: 12rem;
  width: 12rem;
  background-color: #b0edf3;
  border-radius: 50%;
  position: fixed;
  opacity: 0;
  cursor: none;
`;

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 0;
  &:hover ${Trailer} {
    opacity: 1;é
  }
`;
