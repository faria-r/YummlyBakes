import React, { useContext, useState } from "react";
import dollar from "../../assets/dollar.gif";
import { GiTwoCoins } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const PurchaseCoin = () => {
  const {payAmount,handlePayAmount} = useContext(AuthContext)
  const handlePay = (e)=>{
    handlePayAmount(e)
  }
  console.log(payAmount)
  return (
    <div className="mt-36 p-8 mb-36 shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90vw] mx-auto">
      <div className="border-[1px] rounded border-yellow-500 p-8 h-48 w-64 relative">
        <img src={dollar} className="w-16 mx-auto" alt="" />

        <div className="absolute top-4 -left-[7%]  text-sky-950 -rotate-[46deg] w-24 text-center">
          <p className="border-[1px] text-white bg-yellow-500 flex justify-center gap-2 text-xl font-semibold items-center">
            100 <GiTwoCoins className="text-white"></GiTwoCoins>
          </p>
        </div>

        <div className="text-end mt-8">
          <Link to="/payment">
            {" "}
            <button value={'1'} onClick={handlePay} className="btn bg-yellow-500 px-8 font-mono font-semibold text-xl">
              Pay $1
            </button>
          </Link>
        </div>
      </div>
      <div className="border-[1px] rounded border-yellow-500 p-8 h-48 w-64 relative">
        <img src={dollar} className="w-16 mx-auto" alt="" />

        <div className="absolute top-4 -left-[7%]  text-sky-950 -rotate-[46deg] w-24 text-center">
          <p className="border-[1px] text-white bg-yellow-500 flex justify-center gap-2 text-xl font-semibold items-center">
            500 <GiTwoCoins className="text-white"></GiTwoCoins>
          </p>
        </div>

        <div className="text-end mt-8">
          <Link to="/payment">
            <button value={'5'} onClick={handlePay} className="btn bg-yellow-500 px-8 font-mono font-semibold text-xl">
              Pay $5
            </button>
          </Link>
        </div>
      </div>
      <div className="border-[1px] rounded border-yellow-500 p-8 h-48 w-64 relative">
        <img src={dollar} className="w-16 mx-auto" alt="" />

        <div className="absolute top-4 -left-[7%]  text-sky-950 -rotate-[46deg] w-24 text-center">
          <p className="border-[1px] text-white bg-yellow-500 flex justify-center gap-2 text-xl font-semibold items-center">
            1000 <GiTwoCoins className="text-white"></GiTwoCoins>
          </p>
        </div>

        <div className="text-end mt-8">
          <Link to="/payment">
            <button value={'10'} onClick={handlePay} className="btn bg-yellow-500 px-8 font-mono font-semibold text-xl">
              Pay $10
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoin;
