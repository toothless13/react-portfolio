import skills from "../data/skills";
import SkillItem from "./SkillItem";
import Title from "./Title";
import { v4 as uuidv4} from "uuid";

const Skills = ({ theme }) => {
  return (
    <>
      <Title>Skills</Title>
      <div className="flex flex-col md:flex-row items-center justify-center my-5">
        <div className="flex flex-wrap flex-row justify-evenly">
          {skills.map(skill => (
            <SkillItem 
              name={skill.name}
              imgUrl={skill.imgUrl}
              imgUrlLight={skill.imgUrlLight}
              key={uuidv4()}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills