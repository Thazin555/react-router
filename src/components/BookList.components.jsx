import React from "react";

const BookListComponents = ({ data }) => {
  //   console.log(data);
  return (
    <div className="flex basis-1/2 h-[250px] p-6 shadow-lg rounded-md bg-white">
      <img src={data.img} alt="" className="w-[140px]" />
      <div className="ps-6 overflow-hidden">
        <h1 className="text-lg font-bold text-cyan-700 mb-1">{data.title}</h1>
        <h2 className="text-xs text-cyan-700/80 font-semibold mb-3">
          {data.author}
        </h2>
        <p className="text-sm text-orange-500 line-clamp-4 mb-3">
          {data.description}
        </p>
        <button className="border border-orange-600 px-4 py-1 text-sm font-semibold rounded-lg text-orange-600 hover:bg-orange-600 hover:text-white duration-300 flex items-center gap-1">
          Detail
        </button>
      </div>
    </div>
  );
};

export default BookListComponents;
