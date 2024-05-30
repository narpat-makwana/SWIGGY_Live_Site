import CategoryList from "./CategoryList";

const ResCategory = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="m-auto my-4 p-2 w-6/12 bg-slate-100 rounded-lg shadow-md">
        <div className="flex justify-between">
          <span className="text-lg font-bold">
            {data.title} ({data.title.length})
          </span>
          <span className="text-3xl font-bold">⌄</span>
        </div>
        <div className="">
          <CategoryList list={data.itemCards} />
        </div>
      </div>
    </>
  );
};

export default ResCategory;
