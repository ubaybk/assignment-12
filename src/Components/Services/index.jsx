import { FaLocationArrow } from "react-icons/fa6";
const Services = ({ propsServices, propsTitleServices }) => {
  return (
    <>
      <div className="">
        {propsTitleServices.map((item, idx) => (
          <div key={idx} className="mb-5">
            <div className="flex flex-col justify-center items-center md:justify-start md:flex-row gap-5 md:mb-10 md:mt-8 ">
              <h1 className="custom-title">{item.title}</h1>
              <p className="text-center md:text-start md:w-[700px] md:text-[20px]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 mb-5 gap-4 md:gap-8 ">
          {propsServices.map((data, index) => (
            <div key={index}>
              <div
                className={`${data.color} border-2 border-black rounded-3xl p-8 h-72`}
              >
                <h1
                  className={`${data.textBgColor} w-max py-1 px-2 font-bold md:text-[30px] rounded-xl`}
                >
                  {data.subtitle1}
                </h1>
                <h1
                  className={`${data.textBgColor} w-max py-1 px-2 font-bold md:text-[30px] rounded-xl`}
                >
                  {data.subtitle2}
                </h1>

                <div className="flex justify-around items-end">
                  <a href="">
                    <div className="md:flex md:items-center md:gap-3 hover:scale-90">
                      <FaLocationArrow className="text-primary bg-black rounded-full p-1 w-8 h-8" />
                      <h1 className={`hidden md:block ${data.hover} `}>Learn More</h1>
                    </div>
                  </a>
                  <img src={data.img} className="md:mt-[-40px]" alt="gambar" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="border bg-secondary rounded-3xl p-8 flex flex-col gap-3">
          <h1 className="text-[27px]  font-semibold">
            Let’s make things happen
          </h1>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <div className="flex justify-center bg-black rounded-xl hover:scale-90 cursor-pointer">
            <button className=" text-white  py-3">Get your proposal</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
