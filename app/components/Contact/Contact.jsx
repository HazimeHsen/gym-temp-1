import React from "react";

const Contact = () => {
  return (
    <section className="text-gray-600 md:mb-0 my-10 body-font relative">
      <div className="mb-5">
        <h1 className="text-4xl font-extrabold text-primary text-center w-full">
          Contact Us
        </h1>
        <div className="flex justify-center">
          <span className="bg-primary w-[80px] h-[3px] flex justify-center mb-5 md:mb-0 mt-3"></span>
        </div>
      </div>
      <div className="flex items-center md:flex-row px-5 flex-col">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          className="mt-5 md:w-[50%] w-280px  h-[250px] md:h-[500px]"
          src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=lebanon,Beirut,Rawcheh Rocks+(Ruby)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
        <div className="z-10 w-full px-5 md:w-[50%] flex">
          <div className="bg-white rounded-lg md:p-8 md:mt-0 mt-5 flex flex-col md:ml-auto w-full relative md:shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="py-2 px-4 rounded-lg bg-primary/80 text-customColor1 hover:bg-primary/70 transition-all duration-300 ">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
