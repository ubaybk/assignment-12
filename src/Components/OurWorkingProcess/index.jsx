import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
const OurWorkingProcess = ({ propsOurWork }) => {
  const [click, setClick] = useState(null);

  const handlerClick = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setClick(index);
    }
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center mb-5 md:justify-start md:flex-row md:mb-10 md:mt-16 md:gap-5">
          <h1 className="custom-title mb-5 md:mb-0">Our Working Process</h1>
          <p className="text-center">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        <div className="flex flex-col gap-3">

        {propsOurWork.map((item, index) => (
          <div key={index}>
            <div
              className={`py-5 px-5 rounded-3xl border border-black ${
                click === index ? "bg-primary" : "bg-secondary"
              } shadow-xl`}
            >
              <div className={`flex justify-between items-center `}>
                <div className="flex gap-5 items-center justify-center mr-[5px]">
                  <h1 className="text-[30px]">{item.id}</h1>
                  <p className="text-[18px]">{item.title}</p>
                </div>
                <div onClick={() => handlerClick(index)}>
                  {click === index ? (
                    <FaMinusCircle className="cursor-pointer text-[25px]" />
                  ) : (
                    <FaPlusCircle className="cursor-pointer text-[25px]" />
                  )}
                </div>
              </div>
              {click === index && (
                <div className="flex flex-col gap-4 text-[12px]">
                  <hr className="border-t-2 border-black" />
                  <h1>{item.desc}</h1>
                </div>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default OurWorkingProcess;
