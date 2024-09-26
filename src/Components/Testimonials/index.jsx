import CarouselTestimoni from "./CarouselTestimoni";
const Testimonials = ({ propsTestimoni }) => {
  return (
    <>
      {propsTestimoni.map((item, index) => (
        <div key={index}>
          <div>
            {item.titleTestimoni.map((data, idx) => (
              <div key={idx}>
                <div className="flex flex-col justify-center items-center gap-5">
                  <h1 className="custom-title">{data.title}</h1>
                  <p className="text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}

            <div>
              <CarouselTestimoni propsCarouselTesti={item.dataTestimoni} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Testimonials;
