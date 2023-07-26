import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="container flex items-start py-4 mt-4 sm:mt-12 mx-auto">
        <div className="py-1">
          <img src="/assets/logo-bookmark.svg" alt="logo" />
        </div>
        <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-bookmark-blue uppercase text-base">
          <li className="cursor-pointer hover:text-red-500">Features</li>
          <li className="cursor-pointer hover:text-red-500">Pricing</li>
          <li className="cursor-pointer hover:text-red-500">Contact</li>
          <button
            type="button"
            className="bg-red-500 text-white rounded-md px-6 py-2 uppercase hover:bg-white hover:text-red-500 border-2 border-red-500"
          >
            Login
          </button>
        </ul>
        <div className="flex sm:hidden flex-1 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
