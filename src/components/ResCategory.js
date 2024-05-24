const ResCategory = ({data} ) => {
    // console.log(data);   
    return (
        <div className="m-auto my-4 p-2 w-6/12 flex justify-between bg-slate-100 rounded-lg shadow-md">
            <span className="text-lg font-bold">{data.title}</span>
            <span className="text-3xl font-bold">⌄</span>
        </div>
    )
}

export default ResCategory;