import React, { useEffect, useState } from "react";
import { RiArrowDownFill, RiArrowUpFill } from "react-icons/ri";
import { BsFillCartDashFill } from "react-icons/bs";
import { TbArrowUpRight, TbBottle } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { data } from "../../data/data";
const OrderStat = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const elem = data.filter((elem) => parseInt(id) === elem.id);
    setItem(elem[0]);
  }, [id]);
  return (
    item !== {} && (
      <div className="w-screen  min-h-screen bg-gray-100 justify-center flex items-center ">
        <div className="sm:w-8/12  flex flex-col gap-6 md:w-6/12 w-10/12">
          <div className="flex items-center gap-4">
            <Link to={"/"}>
              <BiArrowBack size={25} />
            </Link>
            <h1 className="font-semibold  text-2xl text-black">Go Back</h1>
          </div>
          <div className="bg-white w-full rounded-[2.5rem] p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold  text-2xl text-black">
                {item.title}
              </h1>
              <div className="flex items-center gap-2">
                {item.title === "Revenue" ? (
                  <>
                    <RiArrowDownFill color="red" size={20} />
                    <p className="font-semibold text-lg text-red-400">
                      {item.percentage}
                    </p>
                  </>
                ) : item.title === "Orders" ? (
                  <>
                    <RiArrowUpFill color="green" size={20} />
                    <p className="font-semibold text-lg text-green-800">
                      {item.percentage}
                    </p>
                  </>
                ) : item.title === "Dine in" ? (
                  <>
                    <RiArrowUpFill color="green" size={20} />
                    <p className="font-semibold text-lg text-green-800">
                      {item.percentage}
                    </p>
                  </>
                ) : (
                  <>
                    <RiArrowDownFill color="red" size={20} />
                    <p className="font-semibold text-lg text-red-400">
                      {item.percentage}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div
                className={`
      ${
        item.title === "Revenue"
          ? "bg-orange-400 "
          : item.title === "Orders"
          ? "bg-green-400"
          : item.title === "Dine in"
          ? "bg-red-400 "
          : "bg-yellow-400 "
      }
      p-2 rounded-full`}
              >
                {item.title === "Revenue" ? (
                  <TbArrowUpRight size={20} color="white" />
                ) : item.title === "Orders" ? (
                  <BsFillCartDashFill size={20} color="white" />
                ) : item.title === "Dine in" ? (
                  <ImSpoonKnife size={20} color="white" />
                ) : (
                  <TbBottle size={20} color="white" />
                )}
              </div>
              <h1 className="font-semibold text-[2rem] -mt-1 text-black">
                {item.title === "Revenue" ? `$${item.price}` : item.count}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default OrderStat;
