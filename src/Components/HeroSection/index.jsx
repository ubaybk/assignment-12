const HeroSection = ({ propsHeroSection }) => {
  return (
    <>
      <div className="font-semibold mt-[-25px]">
        {propsHeroSection.map((data, index) => (
          <div key={index}>
            <div className="md:flex md:justify-between md:items-center">
              <div className="md:w-[40%] md:flex md:flex-col md:gap-5">
                <h1 className="text-[38px] md:text-[50px]">{data.title}</h1>
                <div className="md:w-[50%] md:hidden md:items-center md:justify-center">
                  <img src={data.img} alt="" />
                </div>
                <p>{data.desc}</p>
                <button className="bg-black text-white p-3 w-full rounded-2xl mt-5 md:w-max">
                  Book a consultation
                </button>
              </div>
              {/* img md */}
              <div className="md:w-[60%] md:flex md:items-center md:justify-center hidden">
                <img src={data.img} alt="" className="md:w-[950px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default HeroSection;
