import React from "react";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import { BsFillCartDashFill } from "react-icons/bs";
import { TbArrowUpRight, TbBottle } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { Link } from "react-router-dom";
const WidgetOrderStats = ({ data }) => {
  return (
    <Link
      to={`/order-stat/${data.id}`}
      className="bg-white  cursor-pointer
   rounded-[2.5rem] p-6 flex flex-col gap-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-semibold  text-2xl text-black">{data.title}</h1>
        <div className="flex items-center gap-2">
          {data.title === "Revenue" ? (
            <>
              <RiArrowDownFill color="red" size={20} />
              <p className="font-semibold text-lg text-red-400">
                {data.percentage}
              </p>
            </>
          ) : data.title === "Orders" ? (
            <>
              <RiArrowUpFill color="green" size={20} />
              <p className="font-semibold text-lg text-green-800">
                {data.percentage}
              </p>
            </>
          ) : data.title === "Dine in" ? (
            <>
              <RiArrowUpFill color="green" size={20} />
              <p className="font-semibold text-lg text-green-800">
                {data.percentage}
              </p>
            </>
          ) : (
            <>
              <RiArrowDownFill color="red" size={20} />
              <p className="font-semibold text-lg text-red-400">
                {data.percentage}
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div
          className={`
            ${
              data.title === "Revenue"
                ? "bg-orange-400 "
                : data.title === "Orders"
                ? "bg-green-400"
                : data.title === "Dine in"
                ? "bg-red-400 "
                : "bg-yellow-400 "
            }
            p-2 rounded-full`}
        >
          {data.title === "Revenue" ? (
            <TbArrowUpRight size={20} color="white" />
          ) : data.title === "Orders" ? (
            <BsFillCartDashFill size={20} color="white" />
          ) : data.title === "Dine in" ? (
            <ImSpoonKnife size={20} color="white" />
          ) : (
            <TbBottle size={20} color="white" />
          )}
        </div>
        <h1 className="font-semibold text-[2rem] -mt-1 text-black">
          {data.title === "Revenue" ? `$${data.price}` : data.count}
        </h1>
      </div>
    </Link>
  );
};

export default WidgetOrderStats;
