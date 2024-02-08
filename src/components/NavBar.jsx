import { v4 as uuidv4 } from "uuid";

const NavBar = () => {

  const navItems = ["Home", "Projects", "Skills", "Contact"];

  return (
    <div className="flex items-center justify-center text-center pt-5 pb-6">
      <nav className="flex justify-between w-1/4 mx-auto">
        {navItems.map(navItem => {
          const link = `#${navItem.toLowerCase()}`
          return <a href={link} key={uuidv4()} className="px-5">{navItem}</a>
        })}
      </nav>
    </div>
  )
}

export default NavBar