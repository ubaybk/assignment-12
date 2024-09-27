const Footer = ({ propsFooter, propsAddress }) => {
  return (
    <>
      <div className="bg-black flex flex-col gap-4 px-8 py-5 md:mt-20">
        <div className="md:flex md:justify-between md:gap-60">
          <div className="text-white flex justify-center items-center py-5">
            <img src="./img/footer/Icon.png" alt="" />
            <h1 className="text-[24px]">Positivus</h1>
          </div>
          <div>
            {propsFooter.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-white  md:grid md:grid-cols-4  md:mr-6  gap-5 mb-5"
              >
                <a href="" className="animation-hover-footer">
                  {item.aboutUs}
                </a>
                <a href="#services" className="animation-hover-footer">
                  {item.services}
                </a>
                <a href="#caseStudies" className="animation-hover-footer">
                  {item.useCase}
                </a>
                <a href="#ourWorkingProcess" className="animation-hover-footer">
                  {item.process}
                </a>
                <a href="#team" className="animation-hover-footer">
                  {item.team}
                </a>
                <a href="#testimonials" className="animation-hover-footer">
                  {item.testimonials}
                </a>
                <a href="#contactUs" className="animation-hover-footer">
                  {item.contactUs}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-start text-black">
              <button className="bg-primary p-1 rounded-xl">Contact us:</button>
            </div>

        <div className="md:flex md:justify-between md:items-center ">
          <div className="text-white flex flex-col text-center gap-3 md:text-left">
            
            {propsAddress.map((data, index) => (
              <div key={index}>
                <h1>{data.email}</h1>
                <h1>{data.phone}</h1>
                <h1>{data.address}</h1>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 p-3 rounded-xl md:px-2 mb-5">
            <div className="flex flex-col mx-6 gap-3 justify-center md:flex-row">
              <input
                type="text"
                placeholder="Email"
                className="border-white rounded-xl bg-black text-white md:w-60"
              />
              <button className="bg-primary p-1 rounded-xl md:w-60">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <hr className="bg-white h-1" />
        </div>

        <div className="text-white mb-9 text-[12px] flex flex-col items-center md:flex-row md:text-[14px] md:gap-60">
          <h1>© 2023 Ubay. All Rights Reserved. </h1>
          <h1>Privacy Policy</h1>
        </div>
      </div>
    </>
  );
};
export default Footer;
