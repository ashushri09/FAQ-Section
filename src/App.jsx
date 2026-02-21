import faqData from "./data/faqData";
import Accordian from "./components/Accordian";

import "./App.css";
import { useState } from "react";

function App() {
  const [openIndex, setOpenIndex] = useState([]);

  const toggleClicked = (index) => {
    setOpenIndex((prev) =>
      openIndex.includes(index)
        ? openIndex.filter((item) => {
            return item != index;
          })
        : [...prev, index],
    );
  };

  return (
    <div className="flex bg-gray-300 p-4 min-h-screen">
      <div className="flex-1 bg-white flex flex-col px-4 py-12  rounded-sm shadow-sm md:rounded-md md:py-16 md:shadow-md lg:shadow-lg lg:p-[96px]">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-5 items-center">
            <p className="text-3xl font-semibold text-neutral-900 md:text-5xl">
              Frequently asked questions
            </p>
            <p className="text-lg font-normal text-neutral-600 md:text-xl">
              Get all your questions answered
            </p>
          </div>
          <div className="flex flex-col gap-7">
            {faqData.map((item, index) => {
              const isOpen = openIndex.includes(index);
              return (
                <div className="flex flex-col gap-7">
                  <Accordian
                    faq={item}
                    index={index}
                    isOpen={isOpen}
                    toggleClicked={toggleClicked}
                  />
                  <hr />
                </div>
              );
            })}
            <div className="flex flex-col gap-4 p-4 border border-neutral-200 rounded-lg shadow-md md:flex-row md:p-8 md:justify-between">
              <div className="flex flex-col gap-2 ">
                <p className="text-xl font-semibold text-neutral-900">
                  Can’t find the answer you’re looking for? Reach out to our
                  customer support team.
                </p>
                <p className="text-base font-normal text-neutral-600">
                  Reach out to our customer support team.
                </p>
              </div>
              <button className="px-5 py-3 rounded-sm text-base font-medium text-white bg-indigo-700">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
