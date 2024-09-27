import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { data } from "autoprefixer";
const Navbar = ({ propsMenu }) => {
  console.log(propsMenu)
  const [hamburger, setHamburger] = useState(false);

  const handlerHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-between mt-4  items-center md:mt-4">
          <div className="flex items-center font-bold text-[30px] md:text-[30px] gap-2">
            <img src="/img/logo.png" alt="Logo Ku" className="w-6 md:w-12" />
            <h1>Positivus</h1>
          </div>

          <div >
            {propsMenu.map((data, index) => (
              <div key={index} className="hidden gap-8 lg:flex md:mr-[5px] md:text-[18px] lg:text[30px]">
                <a href="" className="animation-hover">
                  {data.aboutUs}
                </a>
                <a href="#services" className="animation-hover">
                  {data.services}
                </a>
                <a href="#caseStudies" className="animation-hover">
                  {data.useCase}
                </a>
                <a href="#ourWorkingProcess" className="animation-hover">
                  {data.process}
                </a>
                <a href="#team" className="animation-hover">
                  {data.team}
                </a>
                <a href="#testimonials" className="animation-hover">
                  {data.testimonials}
                </a>
                <a href="#contactUs" className="animation-hover">
                  {data.contactUs}
                </a>
              </div>
            ))}
          </div>

          <div onClick={handlerHamburger} className="relative lg:hidden">
            {!hamburger && <GiHamburgerMenu />}
            <div className="absolute right-0">
              {hamburger && <Sidebar propsClose={handlerHamburger} propsSideMenu={propsMenu} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
