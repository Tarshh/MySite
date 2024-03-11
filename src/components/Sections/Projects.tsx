import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SamTrans from "../../../public/images/samtransScreen.png";
import rightArrow from "../../../public/icons/right-arrow.svg";
import { device } from "@/styling/breakpoints";
import { mainColor } from "@/constants";
import { useState } from "react";

type Project = {
  image: StaticImageData;
  title: string;
  text: string;
  techStack: string;
  link: string;
};

const projects: Project[] = [
  {
    image: SamTrans,
    title: "Samtrans",
    text: "Puma built a forward-looking tech stack that powers customer experience innovation—and gives content creators an experience they love using every day",
    techStack: "NextJs | Tailwind",
    link: "https://www.samtrans.be/",
  },
  {
    image: SamTrans,
    title: "Seatr",
    text: "Keeping track of who is coming in can be quite a challenge when in a flexible workspace, co-working office. With Seatr, a desk reservation app your employees or co-workers find the space that fits best within a few swipes. Seatr is also suited for 'hot desking'.",
    techStack: "NextJs | Styled-Components | Apollo | Nexus | GraphQL",
    link: "https://seatr.io/",
  },
  {
    image: SamTrans,
    title: "Crossworx",
    text: "Puma built a forward-looking tech stack that powers customer experience innovation—and gives content creators an experience they love using every day",
    techStack: "Gatsby.js | Styled-Components | Sanity CMS",
    link: "https://www.crossworx.be/",
  },
];
export function Projects() {
  const [currentProject, setCurrenProject] = useState(0);
  const handleClick = (key: number) => setCurrenProject(key);
  return (
    <>
      <ProjectsNavbar>
        {projects.map((project, key) => {
          return (
            <ButtonLink
              isActive={key === currentProject}
              onClick={() => handleClick(key)}
              key={key}
            >
              {project.title}
            </ButtonLink>
          );
        })}
      </ProjectsNavbar>
      <Container>
        <StyledImage src={projects[currentProject].image} alt="example" />
        <TextContainer>
          <ProjectTitle>{projects[currentProject].title}</ProjectTitle>
          <Text>{projects[currentProject].text}</Text>
          <TechStackText>{projects[currentProject].techStack}</TechStackText>
          <StyledLink href={projects[currentProject].link} target="_blank">
            Go to project <Image src={rightArrow} alt="Arrow Right" />
          </StyledLink>
        </TextContainer>
      </Container>
    </>
  );
}

const ProjectsNavbar = styled.div`
  display: flex;
  margin-bottom: 3rem;
  @media ${device.lg} {
    justify-content: center;
  }
`;

const ButtonLink = styled.button<{ isActive: boolean }>`
  font-weight: bold;
  padding: 0.625rem 1rem;
  border-radius: 1.5rem;
  background-color: ${(props) => (props.isActive ? mainColor : "transparant")};
  color: ${(props) => (props.isActive ? "white" : "black")};
  &:hover {
    background-color: ${(props) => !props.isActive && "#e6e8ec"};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  gap: 1.5rem;
  @media ${device.lg} {
    flex-direction: row;
    gap: 10rem;
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
  color: ${mainColor};
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
