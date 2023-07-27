import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: "Simple Bookmarking",
    image: "/assets/illustration-features-tab-1.svg",
  },
  {
    id: 2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    image: "/assets/illustration-features-tab-2.svg",
  },
  {
    id: 3,
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    image: "/assets/illustration-features-tab-3.svg",
  },
];

const Feature = () => {
  const [tabs] = useState(data);
  const [value, setValue] = useState(0);

  const { image, title, desc, link } = tabs[value];
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-20">
        <article className="text-center">
          <h2 className="text-3xl text-[#252b46] font-medium mb-6 md:mb-8 lg:text-4xl">
            Features
          </h2>
          <p className="max-w-[550px] mx-auto text-[#9194a1]">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </article>

        <div>
          <ul className="flex justify-center flex-col text-center my-10 md:flex-row">
            {tabs.map((tab, index) => (
              <li
                key={tab.id}
                className="border-t border-gray-400 last:border-b md:border-t-0 md:border-b"
              >
                <button
                  onClick={() => setValue(index)}
                  className={`py-3 md:px-6 hover:text-red-500 ${
                    index === value && "border-b-2 border-red-400"
                  }`}
                >
                  {tab.button}
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:flex items-center justify-center lg:gap-16 pt-10 max-w-7xl mx-auto">
            <article className="lg:flex-1 relative">
              <img
                src={image}
                alt="photo"
                className="block mx-auto w-full md:h-[416px] object-cover"
              />
            </article>

            <article className="text-center lg:text-left lg:flex-1">
              <h2 className="font-medium text-2xl mb-5 md:mb-0 text-[#252b46]">
                {title}
              </h2>
              <p className="mb-10 text-[#9194a1] max-w-[440px]">{desc}</p>
              <button className="bg-[#5368df] text-white py-2 px-4 rounded shadow-lg hover:bg-white hover:text-[#5368df] border-2 border-[#5368df] font-medium">
                {link}
              </button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
