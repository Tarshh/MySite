import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import SamTrans from "../../../public/images/samtransScreen.png";
import rightArrow from "../../../public/icons/right-arrow.svg";
import { device } from "@/styling/breakpoints";

export function Projects() {
  return (
    <Container>
      <StyledImage src={SamTrans} alt="example" />
      <TextContainer>
        <ProjectTitle>Samtrans</ProjectTitle>
        <Text>
          Puma built a forward-looking tech stack that powers customer
          experience innovation—and gives content creators an experience they
          love using every day
        </Text>
        <TechStackText>Next.js | Tailwind</TechStackText>
        <StyledLink href="https://www.samtrans.be/" target="_blank">
          Go to project <Image src={rightArrow} alt="Arrow Right" />
        </StyledLink>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.5rem;
  @media ${device.md} {
    flex-direction: row;
    padding: 1rem;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  @media ${device.md} {
    max-width: 55rem;
    width: 60%;
    object-fit: contain;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 2.25rem;
  margin: 0;
  @media ${device.lg} {
    font-size: 4.5rem;
  }
`;

const TextContainer = styled.div`
  max-width: 55rem;
  max-height: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media ${device.xl} {
    gap: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  font-family: var(--font-PT-Serif);
  @media ${device.md} {
    font-size: 1.5rem;
  }
`;

const TechStackText = styled.code`
  font-size: 1.25rem;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    margin-left: 1rem;
  }
  transition: margin-left 0.5s ease;
`;
