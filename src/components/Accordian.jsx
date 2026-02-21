const Accordian = ({ faq, index, isOpen, toggleClicked }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2 items-start">
        <button
          className="text-lg font-medium text-neutral-900 item-start"
          onClick={() => toggleClicked(index)}
        >
          {faq.question}
        </button>
        {isOpen && (
          <p className="text-base font-normal text-neutral-600">{faq.answer}</p>
        )}
      </div>
      <div> {isOpen ? "-" : "+"} </div>
    </div>
  );
};

export default Accordian;
