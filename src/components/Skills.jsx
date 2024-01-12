import skills from "../data/skills";
import SkillItem from "./SkillItem";
import Title from "./Title";
import { v4 as uuidv4} from "uuid";

const Skills = () => {
  return (
    <>
      {/* <h2 className="font-bold text-center m-8 text-4xl lg:text-4xl">Skills</h2> */}
      <Title>Skills</Title>
      <div className="flex flex-col md:flex-row items-center justify-center my-5">
        <div className="flex flex-wrap flex-row justify-evenly">
          {skills.map(skill => (
            <SkillItem 
              name={skill.name}
              imgUrl={skill.imgUrl}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills