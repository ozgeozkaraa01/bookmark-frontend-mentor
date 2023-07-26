import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 mx-auto">
        {/* <!-- Content --> */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-[#252b46] text-4xl md:text-4 lg:text-5xl font-medium text-center lg:text-left mb-6">
            A Simple Bookmark Manager
          </h2>
          <p className="text-[#9194a1] text-base text-center lg:text-left mb-6">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <button
              type="button"
              className="hover:bg-white bg-[#5368df] text-white font-medium h-12 px-6 rounded-md border-2 border-[#5368df] hover:text-[#5368df]"
            >
              Get it on Chrome
            </button>
            <button
              type="button"
              className="bg-gray-100 text-[#252b46] border-gray-100 border-2 font-medium h-12 px-6 rounded-md shadow-sm hover:border-[#252b46]"
            >
              Get it on Firefox
            </button>
          </div>
        </div>
        {/* <!-- Image --> */}
        <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src="https://bookmark-fem-chalange.netlify.app/images/illustration-hero.svg"
            alt="bg-photo"
          />
        </div>
      </div>
      {/* <!-- Rounded Rectangle --> */}
      <div className="hidden md:block overflow-hidden bg-[#5368df] rounded-l-full absolute h-80 w-2/4 top-32 right-0 lg:-bottom-28 lg:-right-36"></div>
    </section>
  );
};

export default HeroSection;
