const AccordionHeader = ({ title, count, showItem, index, setShowIndex }) => {
  console.log("index: ", index);
  handleClick = () => {
    setShowIndex(index != -1 ? -1 : index);
  };
  return (
    <div
      className=" w-6/12 flex justify-between bg-slate-100 p-6 rounded-xl shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="text-xl">
        {title} ({count})
      </h1>
      <span>
        {showItem ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default AccordionHeader;
