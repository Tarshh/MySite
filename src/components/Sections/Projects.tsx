import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SamTrans from "../../../public/images/samtransScreen.png";
import Seatr from "../../../public/images/seatrScreen.png";
import Cwx from "../../../public/images/cwxScreen.png";
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
    image: Seatr,
    title: "Seatr",
    text: "Keeping track of who is coming in can be quite a challenge when in a flexible workspace, co-working office. With Seatr, a desk reservation app your employees or co-workers find the space that fits best within a few swipes. Seatr is also suited for 'hot desking'.",
    techStack: "NextJs | Styled-Components | Apollo | Nexus | GraphQL",
    link: "https://seatr.io/",
  },
  {
    image: Cwx,
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
    <ProjectsContainer>
      <div>
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
      </div>
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
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
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
  @media ${device.md} {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.lg} {
    flex-direction: row;
    gap: 7rem;
    align-items: flex-start;
  }
`;

const StyledImage = styled(Image)`
  max-width: 50rem;
  width: 100%;
  height: auto;
  object-fit: contain;
  @media ${device.lg} {
    width: 60%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 50rem;
`;

const ProjectTitle = styled.h2`
  font-size: 2.25rem;
  color: ${mainColor};
  margin: 0;
  @media ${device.lg} {
    font-size: 4.5rem;
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
