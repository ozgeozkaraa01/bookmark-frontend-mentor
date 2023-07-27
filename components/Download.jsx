import React from "react";

const Download = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <article className="text-center mb-10">
          <h2 className="text-3xl text-[#252b46] font-medium mb-6 md:mb-8 lg:text-4xl">
            Download the extension
          </h2>
          <p className="text-[#9194a1] mx-auto md:max-w-[550px]">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </article>

        <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-2xl text-center p-8 rounded">
            <img
              src="/assets/logo-chrome.svg"
              alt="photo"
              className="block mx-auto mb-4"
            />
            <h3 className="mt-9 text-xl font-medium text-[#252b46]">
              Add to Chrome
            </h3>
            <p className="text-sm text-[#9194a1] mt-3">Minimum version 62</p>
            <img
              src="/assets/bg-dots.svg"
              alt="photo"
              className="block mx-auto my-4"
            />
            <button className="bg-[#5368df] text-white py-2 px-4 rounded shadow-lg hover:bg-white hover:text-[#5368df] border-2 border-[#5368df] font-medium">
              Add & Install Extension
            </button>
          </div>

          <div className="bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-10">
            <img
              src="/assets/logo-firefox.svg"
              alt="photo"
              className="block mx-auto mb-4"
            />
            <h3 className="mt-9 text-xl font-medium text-[#252b46]">
              Add to Firefox
            </h3>
            <p className="text-sm text-[#9194a1] mt-3">Minimum version 55</p>
            <img
              src="/assets/bg-dots.svg"
              alt="photo"
              className="block mx-auto my-4"
            />
            <button className="bg-[#5368df] text-white py-2 px-4 rounded shadow-lg hover:bg-white hover:text-[#5368df] border-2 border-[#5368df] font-medium">
              Add & Install Extension
            </button>
          </div>

          <div className="bg-white shadow-2xl text-center p-8 rounded lg:transform lg:translate-y-20">
            <img
              src="/assets/logo-opera.svg"
              alt="photo"
              className="block mx-auto mb-4"
            />
            <h3 className="mt-9 text-xl font-medium text-[#252b46]">
              Add to Opera
            </h3>
            <p className="text-sm text-[#9194a1] mt-3">Minimum version 46</p>
            <img
              src="/assets/bg-dots.svg"
              alt="photo"
              className="block mx-auto my-4"
            />
            <button className="bg-[#5368df] text-white py-2 px-4 rounded shadow-lg hover:bg-white hover:text-[#5368df] border-2 border-[#5368df] font-medium">
              Add & Install Extension
            </button>
          </div>
        </article>
      </section>
    </>
  );
};

export default Download;
