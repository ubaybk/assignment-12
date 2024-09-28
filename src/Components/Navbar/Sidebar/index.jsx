import { FaWindowClose } from "react-icons/fa";
const Sidebar = ({ handlerHamburger, propsSideMenu }) => {
  console.log("ini menuItem", propsSideMenu);
  return (
    <>
      <div onClick={handlerHamburger} className="flex justify-end pr-1">
        <FaWindowClose />
      </div>
      <div>
        {propsSideMenu.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-end bg-primary font-semibold p-3 w-30 rounded-xl"
          >
            <a href="#about" className="animation-hover">
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
    </>
  );
};
export default Sidebar;
