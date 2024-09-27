import { Carousel } from "flowbite-react";
import { MdArrowOutward } from "react-icons/md";

function MyCarousel({ propsCarousel }) {
  console.log("ini props newcarousel", propsCarousel);
  return (
    <div className="h-80 mt-[-20px]">
      <Carousel>
        {propsCarousel.map((data, index) => (
          <div key={index}>
            {/* Slide dengan teks */}
            <div className={`flex  flex-col justify-center ${data.color} gap-5 h-60 rounded-2xl md:items-center  text-white p-8`}>
              <h1 className="text-[16px] font-bold ">{data.konten1}</h1>
              <div className="text-primary font-semibold flex  items-center gap-4">
                <h1>Learn more</h1>
                <MdArrowOutward />
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Teks berjalan di bawah Carousel */}
      {/* <div className="overflow-hidden whitespace-nowrap mt-4">
        <p className="inline-block text-white bg-blue-500 px-10 py-3 animate-marquee">
          Ini adalah teks berjalan menggunakan Tailwind CSS!
        </p>
      </div> */}
    </div>
  );
}

export default MyCarousel;
