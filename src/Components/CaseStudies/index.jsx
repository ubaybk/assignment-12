import { data } from "autoprefixer";
import MyCarousel from "./Carousel";

const CaseStudies = ({ propsCaseStudies }) => {
  console.log("ini case studies", propsCaseStudies);
  return (
    <>
      <div className="md:mt-8">
        {propsCaseStudies.map((data, item) => (
          <div key={item}>
            <div >
                {data.titleCaseStudies.map((isi, idx) => (
                  <div key={idx} className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-center  md:mb-10 md:mt-16 md:gap-5">
                    <h1 className="custom-title mb-5 md:mb-0">{isi.title}</h1>
                    <p className="text-center">{isi.desc}</p>
                  </div>
                ))}
              
            </div>
            <MyCarousel propsCarousel={data.carousel} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CaseStudies;
