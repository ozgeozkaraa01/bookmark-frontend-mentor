import React, { useState } from "react";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <article className="py-4 border-t border-slate-300 last:border-b last:border-slate-300">
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="font-medium text-lg hover:text-red-400">{question}</h2>
          <button>
            {showAnswer ? (
              <img
                src="/assets/icon-arrow.svg"
                alt="photo"
                className="transform rotate-180"
              />
            ) : (
              <img src="/assets/icon-arrow.svg" alt="" />
            )}
          </button>
        </div>
        {showAnswer && <p className="text-[#9194a1]">{answer}</p>}
      </article>
    </>
  );
};

export default Question;
