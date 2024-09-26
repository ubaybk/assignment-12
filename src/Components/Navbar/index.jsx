import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handlerHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between  items-center">
          <div className="flex items-center font-bold text-[30px] gap-2">
            <img src="/img/logo.png" alt="Logo Ku" className="w-6" />
            <h1>Positivus</h1>
          </div>

          <div className="hidden gap-8 md:flex md:mr-10">
            <a href="" className="animation-hover">About Us</a>
            <a href="#services" className="animation-hover">Services</a>
            <a href="#caseStudies" className="animation-hover">Use Case</a>
            <a href="" className="animation-hover">Pricing</a>
            <a href="" className="animation-hover">Blog</a>
          </div>

          <div onClick={handlerHamburger} className="relative md:hidden">
            {!hamburger && <GiHamburgerMenu />}
            <div className="absolute right-0">{hamburger && <Sidebar propsClose={handlerHamburger} />}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
