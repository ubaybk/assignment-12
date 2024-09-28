import { Carousel } from "flowbite-react";
import { MdArrowOutward } from "react-icons/md";

const CarouselTestimoni = ({ propsCarouselTesti }) => {
  console.log(propsCarouselTesti);
  return (
    <>
      <div className="">
        
        <div className="h-80">
          <Carousel>
            {/* Slide dengan teks */}
            {propsCarouselTesti.map((data, index)=>(
              <div key={index}>
                
            <div
              className={`flex  flex-col justify-center bg-black  gap-5  rounded-2xl  md:px-36  text-white p-1`}
            >
              <div className="border-2 md:border-hidden border-green-500 text-center rounded-2xl p-8">
                <h1 className="text-[12px] md:text-[17px] font-bold mb-7">
                  {data.desc}
                </h1>
                <div className=" text-primary flex flex-col text-[12px] text-center">
                <h1 className=" text-primary">{data.name}</h1>
                <h1 className="text-white ">{data.position}</h1>
              </div>

              </div>
              
            </div>
              </div>
            ))}
          </Carousel>
        </div>

      
      </div>
    </>
  );
};
export default CarouselTestimoni;
