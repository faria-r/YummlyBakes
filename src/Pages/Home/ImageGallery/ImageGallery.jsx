import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from "../../../assets/yummly/des.jpg";
import img2 from "../../../assets/yummly/ff.jpg";
import img3 from "../../../assets/yummly/ck.jpg";
import img4 from "../../../assets/yummly/mc.jpg";
import img5 from "../../../assets/yummly/burger.jpg";
import img6 from "../../../assets/yummly/salads.jpg";
import img7 from "../../../assets/yummly/soupp.jpg";
import img8 from "../../../assets/yummly/sala.jpg";
import img9 from "../../../assets/yummly/ki.jpg";
import img0 from "../../../assets/yummly/fff.jpeg";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  return (
    <div className="lg:flex justify-evenly items-center w-[90vw] mx-auto my-24">
      <div className="border border-orange-500 p-4 h-[45vh] my-auto  lg:w-[25%] mx-auto text-center">
        <Link to="/allRecipe">
          <h3 className="font-serif lg:text-xl font-bold">Search</h3>
          <h1 className="text-xl lg:text-5xl font-bold font-[Roboto]">
            100'S{" "}
            <span className="inline-block pt-4 ">
              <MdKeyboardDoubleArrowRight />
            </span>
          </h1>
          <h4 className="mt-4 lg:text-xl font-bold">Of Recipes By Category</h4>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:h-[45vh] my-auto mt-8 lg:mt-0 lg:w-[65%] w-[70%] mx-auto text-center">
        <div>
          <img src={img3} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img2} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img1} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img4} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img5} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img6} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img7} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img8} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img9} className="w-[150px] h-[120px]" />
        </div>
        <div>
          <img src={img0} className="w-[150px] h-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
