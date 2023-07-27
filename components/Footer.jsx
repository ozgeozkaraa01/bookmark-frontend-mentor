import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "hsl(229, 31%, 21%)",
        }}
        className="py-10 px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-col text-center md:flex-row md:justify-between">
          <div className="md:flex md:items-center md:gap-6 lg:gap-10">
            <img src="/assets/logo-bookmark.svg" alt="logo" />

            <ul className="mt-6 md:mt-0 md:flex md:gap-6 lg:gap-10">
              <li>
                <button className="text-white uppercase text-sm tracking-wide">
                  Features
                </button>
              </li>
              <li className="my-4 md:my-0">
                <button className="text-white uppercase text-sm tracking-wide">
                  Pricing
                </button>
              </li>
              <li>
                <button className="text-white uppercase text-sm tracking-wide">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <ul className="flex items-center gap-4 lg:gap-10">
            <li>
              <button>
                <img src="/assets/icon-facebook.svg" alt="photo" />
              </button>
            </li>
            <li>
              <button>
                <img src="/assets/icon-twitter.svg" alt="photo" />
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
