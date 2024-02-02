import React, { useEffect, useState } from "react";
import { api } from "./service/baseurl";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { Routes, Route } from "react-router-dom";
import {
  AdminPage,
  BlogPage,
  DashboardPage,
  DetailBookPage,
  HomePage,
  InventoryPage,
  RegisterPage,
  UserPage,
} from "./page";
import { NavComponents } from "./components";
import NotFound from "../NotFound";

const App = () => {
  // const [fetch, setFetch] = useState({
  //   loading: true,
  //   data: null,
  //   error: null,
  // });
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await GetBookData("book");
  //       // console.log(data);
  //       setFetch((pre) => {
  //         return {
  //           loading: false,
  //           data: data,
  //           error: null,
  //         };
  //       });
  //     } catch (e) {
  //       setFetch((pre) => {
  //         return {
  //           loading: false,
  //           data: null,
  //           error: e.message,
  //         };
  //       });
  //     }
  //   })();
  // }, []);

  // const { loading, data, error } = useFetch(GetBookData, "book");
  // console.log(data);

  return (
    <div className="">
      <div className="wrapper">
        <NavComponents />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
          <Route path="/detail/:slug" element={<DetailBookPage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<InventoryPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="user" element={<UserPage />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <>{data ? <div>{JSON.stringify(data)}</div> : <h1>{error}</h1>}</>
//       )}
//     </div>
//   );
// };

// custom hook
// => build in hook => useState, useEffect, useRef, useContext, useReducer, useLayoutEffect, useId, useTransition, useCallback, useMemo, etc...
// => lib provide hook => useNavigate, useParams, useLocation
// useFetch
