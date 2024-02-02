import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../../store/ApiContext";

const DetailBookPage = () => {
  const nav = useNavigate();

  const { slug } = useParams();
  console.log(slug);
  const [item, setItem] = useState(null);
  const { data, error, loading } = useContext(ApiContext);

  useEffect(() => {
    const finder = data?.find((i) => i.slug === slug);
    console.log(finder);
    setItem(finder);
  }, [slug, data]);

  const handleBack = () => {
    nav(-1);
  };

  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div className="p-6 shadow-xl rounded-md max-w-xl mx-auto bg-gray-100">
              <img
                src={item?.img}
                alt=""
                className="w-full h-[400px] object-cover"
              />
              <div className="py-5">
                <h1 className="text-lg font-bold text-cyan-700 mb-1">
                  {item?.title}
                </h1>
                <h2 className="text-xs text-cyan-700/80 font-semibold mb-3">
                  {item?.author}
                </h2>
                <p className="text-sm text-gray-700 font-semibold mb-3">
                  {item?.description}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
