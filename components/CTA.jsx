import React from "react";

const CTA = () => {
  return (
    <>
      <section className="bg-[#5368df] px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white font-medium text-sm uppercase tracking-widest mb-8 text-center">
            35,000+ already joined
          </h3>
          <h2 className="text-white text-3xl mb-8 lg:text-4xl text-center font-medium lg:w-96 lg:mx-auto">
            Stay up to date with what we're doing
          </h2>

          <form className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:max-w-xl md:mx-auto">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
              className="w-full py-3 px-4 rounded shadow-lg text-sm"
            />
            <button
              type="submit"
              className="bg-red-500 text-white py-3 px-4 rounded shadow-lg md:w-40 text-sm hover:bg-white hover:text-red-500 border-2 border-red-500"
            >
              Contact Us
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default CTA;
