const LabelRuning = ({ propsRunning }) => {
    console.log(propsRunning)
   
  return (
    <>
      <div className="overflow-hidden whitespace-nowrap mt-5 md:mt-0">
        {propsRunning.map((data, index) => (
          <div key={index}>
            <div className="flex gap-4 animate-marquee">
               {data.running1.map((logo1, logoIndex1) => (
                <img key={logoIndex1} src={logo1} alt="" />
               ))}
            </div>
            <div className="flex gap-4 animate-marquee ml-40">
               {data.running2.map((logo2, logoIndex2) => (
                <img key={logoIndex2} src={logo2} alt="" />
               ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default LabelRuning;
