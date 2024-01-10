import { v4 as uuidv4 } from "uuid";

const ProjectItem = ({ title, imgUrl, techStack, link}) => {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="project image"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {techStack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md" key={uuidv4()}>
              {item}
            </span>
          ))}
        </p>
        <a href={link}>{link}</a>
      </div>
    </div>
  )
}

export default ProjectItem