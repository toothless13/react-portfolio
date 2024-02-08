import { v4 as uuidv4 } from "uuid";

const NavBar = () => {

  const navItems = ["Projects", "Skills", "Contact"];

  return (
    <div className="flex items-center text-center pt-5 pb-6">
                {/* {theme === 'dark' ? <img src="/assets/timCodes_logo_dark.png" className="w-1/6 fixed p-1 z-10 left-20 top-1"/> : <img src="/assets/timCodes_logo_light.png" className="w-1/4"/>} */}
      <nav className="flex justify-between w-1/4 mx-auto items-center">
        {navItems.map(navItem => {
          const link = `#${navItem.toLowerCase()}`
          return <a href={link} key={uuidv4()} className="px-5 text-lg font-bold">{navItem}</a>
        })}
      </nav>
    </div>
  )
}

export default NavBar