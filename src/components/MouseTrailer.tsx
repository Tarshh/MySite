import styled from "@emotion/styled";

type Props = {
  mousePosition: {
    xPosition: number;
    yPosition: number;
  };
  showTrailer: boolean;
};

export function MouseTrailer({ mousePosition, showTrailer }: Props) {
  return <Trailer mousePosition={mousePosition} showTrailer={showTrailer} />;
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
`;
