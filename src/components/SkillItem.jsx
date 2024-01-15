const SkillItem = ({name, imgUrl}) => {
  return (
    <div className="overflow-hidden m-2 lg:w-1/6 md:w-1/4 w-1/3">
      <img
        src={imgUrl}
        alt={`${name} logo`}
        className="w-64px h-20 md:h-24 object-cover cursor-pointer mx-auto"
      />
      <div className="w-full p-4">
        <h4 className="text-md md:text-lg dark:text-white mb-2 md:mb-3 font-semibold">{name}</h4>
      </div>
    </div>
  )
}

export default SkillItem