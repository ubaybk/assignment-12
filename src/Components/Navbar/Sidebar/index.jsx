import { FaWindowClose } from "react-icons/fa";
const Sidebar = ({handlerHamburger}) => {
  return (
    <>
    <div onClick={handlerHamburger} className="flex justify-end pr-1">
      <FaWindowClose />
    </div>
      <div className="flex flex-col items-end bg-green-500 p-2 w-24 rounded-xl">
        <a href="">About Us</a>
        <a href="#services">Services</a>
        <a href="#caseStudies">Use Case</a>
        <a href="">Pricing</a>
        <a href="">Blog</a>
      </div>
    </>
  );
};
export default Sidebar;
