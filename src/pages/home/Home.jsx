import React from "react";
import WidgetOrderStats from "../../components/order/WidgetOrderStats";
import { data } from "../../data/data";
const Home = () => {
  return (
    <div
      className="grid  md:grid-cols-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
     bg-gray-100 items-center gap-4 justify-center w-full
      min-h-screen md:px-20 px-6 py-6 sm:py-10 md:py-20  sm:px-10"
    >
      {data.map((elem) => (
        <WidgetOrderStats key={elem.id} data={elem} />
      ))}
    </div>
  );
};

export default Home;
