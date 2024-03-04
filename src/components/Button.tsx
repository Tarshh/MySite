import styled from "@emotion/styled";
import React, { ReactNode } from "react";

type Props = {
  type: "normal" | "transparant";
  children: ReactNode;
};

export function Button({ type, children }: Props) {
  switch (type) {
    case "normal":
      return <NormalButton>{children}</NormalButton>;
    case "transparant":
      return <TransparantButton>{children}</TransparantButton>;
  }
}

const StyledButton = styled.button`
  width: 100%;
  padding: 0 1rem;
  border-radius: 0.25rem;
  padding: 1rem;
  transition-duration: 0.3s;
  pointer-events: all;
`;

const NormalButton = styled(StyledButton)`
  border-color: black;
  background-color: black;
  color: white;
  &:hover {
    -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

const TransparantButton = styled(StyledButton)`
  border: 1px solid;
  border-color: #f9b1ab;
  &:hover {
    -webkit-box-shadow: 0px 0px 5px 5px rgba(243, 100, 88, 0.2);
    -moz-box-shadow: 0px 0px 5px 5px rgba(243, 100, 88, 0.2);
    box-shadow: 0px 0px 5px 5px rgba(243, 100, 88, 0.2);
  }
`;
