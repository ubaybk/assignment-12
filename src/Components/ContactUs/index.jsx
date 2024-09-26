const ContactUs = () => {
  return (
    <>
      <div>
        <div className=" flex flex-col justify-center items-center mt-[-8px]">
          <h1 className="custom-title mb-5">Contact Us</h1>
          <p className="text-center mb-5">
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 justify-center items-center md:bg-secondary md:rounded-2xl mb-5">
          <div className="bg-secondary md:w-[130%] rounded-xl flex flex-col px-4 py-6 ">
            <div className="flex justify-around">
              <div className="flex items-center mb-4">
                <input
                  id="radio2"
                  type="radio"
                  name="radio-group"
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="radio2"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Say Hi
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="radio2"
                  type="radio"
                  name="radio-group"
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="radio2"
                  className="ml-2 text-sm font-medium text-gray-900"
                >
                  Get a Quote
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="input-text"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="input-text"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="input-text"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="input-text"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="textarea"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message*
              </label>
              <textarea
                type="text"
                id="textarea"
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                placeholder="Message"
              />
            </div>
            <button className="bg-black text-white p-3 w-full rounded-2xl mt-5 ">
              Send Message
            </button>
          </div>
          <div className="hidden md:flex justify-end">
            <img className="w-60" src="./img/contactus/1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
