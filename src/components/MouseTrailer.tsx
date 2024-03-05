import styled from "@emotion/styled";

type Props = {
  mousePosition: {
    xPosition: number;
    yPosition: number;
  };
  showTrailer: boolean;
  buttonHovered: boolean;
};

export function MouseTrailer({
  mousePosition,
  showTrailer,
  buttonHovered,
}: Props) {
  return (
    <Trailer
      mousePosition={mousePosition}
      showTrailer={showTrailer}
      buttonHovered={buttonHovered}
    />
  );
}

const Trailer = styled.div<Props>`
  left: ${(props) => props.mousePosition.xPosition}px;
  top: ${(props) => props.mousePosition.yPosition}px;
  height: 12rem;
  width: 12rem;
  background-color: #b0edf3;
  border-radius: 50%;
  position: fixed;
  opacity: 0;
  cursor: none;
  opacity: ${(props) => (props.showTrailer ? 1 : 0)};
  transform: ${(props) => (props.buttonHovered ? "scale(0.5)" : "scale(1)")};
  transition: ${(props) =>
    props.buttonHovered
      ? "transform 0.3s ease-out"
      : "transform 0.3s ease-out"};
`;
