import React from "react";
import bg from "../../../assets/yummly/bgg.jpg";
import doller from "../../../assets/dollar.gif";
import { TbArrowElbowRight } from "react-icons/tb";
import { PiArrowBendDoubleUpRight } from "react-icons/pi";
import { Link } from "react-router-dom";
const PremiumRecipe = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
      className="lg:h-[100vh] w-[80vw] mx-auto bg-fixed pt-16 pb-8"
    >
      <div className="bg-white shadow-xl text-center  lg:w-1/2 mx-auto lg:h-3/4 mt-8 py-8 px-6">
        <div className="h-[150px] w-[150px] rounded-full  mx-auto -mt-24">
          <img src={doller} alt="" className="rounded-full" />
        </div>
        <p className="font-mono text-orange-500">Get 50 Coins Free On First signup!</p>
        <h2 className="text-3xl font-semibold my-2">Premium Recipes</h2>
        <p> <span className="text-orange-500 font-semibold font-serif">Yummly Bakes</span> Provide You with Premium Quality Recipe's By Spending Your Coins. You Can Purchase Coins Here and Use Coins To Explore Delicious Recipes!</p>
        <Link to='/purchase'>
        <h4 className="text-center text-orange-400 text-5xl w-24 mx-auto my-4"> <PiArrowBendDoubleUpRight /></h4></Link>
       
      </div>
    </div>
  );
};

export default PremiumRecipe;
