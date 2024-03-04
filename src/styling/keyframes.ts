import { keyframes } from "@emotion/react";

export const backgroundSlide = keyframes`
    from {
      background-position: 100% 0;
    }
    to {
      background-position: 0 0;
    }
`;

export const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;
