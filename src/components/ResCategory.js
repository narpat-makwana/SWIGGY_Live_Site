import CategoryList from "./CategoryList";
import { useState } from "react";

const ResCategory = ({ data,isOpen,setShowIndex }) => {
  // const [isOpen, setIsOpen] = useState(false); // Initial state: CategoryList visible

  const handleClick = () => {
    // setIsOpen(!isOpen); // Toggle visibility on click
    setShowIndex();
  };

  // console.log(data);
  return (
    <>
      <div
        className={`m-auto my-4 p-2 w-6/12 bg-slate-100 rounded-lg shadow-md cursor-pointer hover:bg-slate-200`}
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {data.title} ({data.title.length})
          </span>
          <span className="text-3xl font-bold">{isOpen ? "⌄" : "⌃"}</span>
        </div>
      </div>
      <div className="mx-36 px-12">
          {isOpen && <CategoryList list={data.itemCards} />}
      </div>
    </>
  );
};

export default ResCategory;