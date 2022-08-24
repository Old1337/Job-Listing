import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: relative;
  padding: 1.5rem;
  width: 100%;
  border-radius: 0.4rem;
  background-color: white;
  box-shadow: 0px 10px 40px hsl(180deg 29% 50% / 48%);
  border-left: ${(props) =>
    props.featured === "true" ? "5px solid hsl(180, 29%, 50%)" : ""};

  &:nth-child(1) {
    margin-top: 5rem;
  }

  @media (min-width: 767px) {
    & {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
  }
`;
const LeftContainer = styled.div`
  @media (min-width: 767px) {
    & {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }
  }
`;
const CompanyImage = styled.img`
  border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  width: 3.5rem;
  top: calc(0px - 1.75rem);

  @media (min-width: 767px) {
    & {
      display: none;
    }
  }
`;

const CompanyImageDesktop = styled.img`
  display: none;
  width: 5rem;
  @media (min-width: 767px) {
    & {
      display: block;
    }
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;
const InfoTop = styled.div`
  display: flex;
  gap: 1rem;
`;
const Company = styled.span`
  color: hsl(180, 29%, 50%);
  text-transform: capitalize;
  font-weight: bold;
`;
const Badge = styled.span`
  border-radius: 1rem;
  color: white;
  font-weight: bold;
  background-color: ${(props) =>
    props.featured ? "hsl(180, 14%, 20%)" : "hsl(180, 29%,50%)"};
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
`;
const JobTitle = styled.span`
  font-weight: bold;
  text-transform: capitalize;
  transition: 0.3s;

  &:hover {
    color: hsl(180, 29%, 50%);
    cursor: pointer;
  }
`;
const InfoBot = styled.div`
  position: relative;
  display: flex;
  gap: 0.6rem;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    background-color: hsl(180, 8%, 52%);
    bottom: -1rem;
  }

  @media (min-width: 767px) {
    &::before {
      display: none;
    }
  }
`;
const Details = styled.span`
  font-weight: 500;
  color: hsl(180, 8%, 52%);
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 767px) {
    & {
      justify-content: flex-end;
    }
  }
`;

const Skill = styled.span`
  color: hsl(180, 29%, 50%);
  font-weight: bold;
  background-color: hsl(180, 31%, 95%);
  padding: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: white;
  }
`;
export default function Job({ info, addFilter, filterList }) {
  const {
    logo,
    company,
    featured,
    position,
    postedAt,
    contract,
    location,
    skills,
  } = info;

  // if every skill inside the filterlist is in the skills array returns true and show the element otherwise hide it

  const found = filterList.every((skill) => skills.includes(skill));
  return (
    <>
      {found && (
        <Box
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ y: -20 }}
          featured={featured ? "true" : "false"}
        >
          <CompanyImage src={logo} alt="" />
          <LeftContainer>
            <CompanyImageDesktop src={logo} alt="" />
            <Info>
              <InfoTop>
                <Company>{company}</Company>
                {info.new && <Badge>new!</Badge>}
                {featured && <Badge featured>featured</Badge>}
              </InfoTop>
              <JobTitle>{position}</JobTitle>
              <InfoBot>
                <Details>{postedAt}</Details>
                <Details>{contract}</Details>
                <Details>{location}</Details>
              </InfoBot>
            </Info>
          </LeftContainer>
          <Skills>
            {skills.map((skill) => {
              return (
                <Skill onClick={() => addFilter(skill)} key={skill}>
                  {skill}
                </Skill>
              );
            })}
          </Skills>
        </Box>
      )}
    </>
  );
}
