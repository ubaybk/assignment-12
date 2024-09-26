const Footer = () => {
  return (
    <>
      <div className="bg-black flex flex-col gap-4 px-8 md:mt-20">
        <div className="md:flex md:items-center md:gap-80">
          <div className="text-white flex justify-center items-center py-5">
            <img src="./img/footer/Icon.png" alt="" />
            <h1 className="text-[24px]">Positivus</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-white md:flex-row gap-5 mb-5">
            <a href="" className="animation-hover-footer">About us</a>
            <a href="" className="animation-hover-footer">Services</a>
            <a href="" className="animation-hover-footer">Use Cases</a>
            <a href="" className="animation-hover-footer">Pricing</a>
          </div>
        </div>

        <div className="md:flex md:justify-between md:items-center ">
          <div>
            <div className="flex justify-center mb-5 md:justify-start">
              <button className="bg-primary p-1 rounded-xl">
                Contact us:
              </button>
            </div>
            <div className="text-white flex flex-col text-center gap-3 md:text-left">
              <h1>Email: info@positivus.com</h1>
              <h1>Phone: 555-567-8901</h1>
              <h1>
                Address: 1234 Main St Moonstone City, Stardust State 12345
              </h1>
            </div>
          </div>

          <div className="bg-gray-800 p-3 rounded-xl md:p-9 mb-5">
            <div className="flex flex-col mx-6 gap-3 justify-center md:flex-row">
              <input
                type="text"
                placeholder="Email"
                className="border-white rounded-xl bg-black text-white md:w-60"
              />
              <button className="bg-primary p-1 rounded-xl md:w-60">Subscribe</button>
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
