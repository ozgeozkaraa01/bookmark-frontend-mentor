import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const FAQs = () => {
  const [items] = useState(questions);

  return (
    <>
      <section className="max-w-xl mx-auto px-8 py-20">
        <article className="text-center">
          <h2 className="text-3xl text-[#252b46] font-medium mb-6 md:mb-8 lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-[#9194a1]">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </article>

        <article>
          <div className="my-8">
            {items.map((item) => (
              <Question key={item.id} {...item} />
            ))}
          </div>

          <button className="bg-[#5368df] text-white px-5 py-4 rounded shadow-lg hover:opacity-75 block mx-auto">
            More Info
          </button>
        </article>
      </section>
    </>
  );
};

export default FAQs;
