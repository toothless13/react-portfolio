import projects from "../data/projects";
import ProjectItem from "./ProjectItem";
import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectItem 
            imgUrl={project.imgUrl}
            title={project.title}
            techStack={project.techStack}
            link={project.link}
            key={uuidv4()}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects