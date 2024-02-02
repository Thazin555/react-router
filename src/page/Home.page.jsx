import React, { useContext } from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponents } from "../components";
import { Link } from "react-router-dom";
import { ApiContext } from "../store/ApiContext";

const HomePage = () => {
  // const { loading, data, error } = useFetch(GetBookData, "book");

  const { data, error, loading } = useContext(ApiContext);

  return (
    <div className="">
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          {data ? (
            <div className="grid grid-cols-3 gap-5 py-8">
              {data.map((el) => (
                // <Link key={el.id} to={`/detail/${el.id}`}>
                //   <BookListComponents data={el} />
                // </Link>
                <Link key={el.id} to={`/detail/${el.slug}`}>
                  <BookListComponents data={el} />
                </Link>
              ))}
            </div>
          ) : (
            <h1>{error}</h1>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
