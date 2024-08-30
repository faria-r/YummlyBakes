import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/yummly/ck.jpg";
import img2 from "../../../assets/yummly/ck1.jpeg";
import img3 from "../../../assets/yummly/ck2.jpg";
import img4 from "../../../assets/yummly/ck4.jpg";
import img5 from "../../../assets/yummly/ck6.jpg";
import img6 from "../../../assets/yummly/ck8.jpg";
import img7 from "../../../assets/yummly/ck9.jpg";
import img8 from "../../../assets/yummly/ckk.jpg";
import img9 from "../../../assets/yummly/cr1.jpg";
import img0 from "../../../assets/yummly/cr2.jpg";
import img from "../../../assets/yummly/cr3.jpg";
const Trending = () => {
  return (
    <div className="bg-white p-6 mt-2 my-8 shadow-xl w-[90vw] mx-auto ">
      <h1 className="mt-2 text-4xl font-mono mb-6">Trending Topic</h1>
    <div>
    <Marquee pauseOnHover={true} speed={150}>
        <div>
          <img src={img1} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Dessert</h3>
        </div>
        <div>
          <img src={img4} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Cake</h3>
        </div>
        <div>
          <img src={img3} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Cookie</h3>
        </div>
        <div>
          <img src={img8} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Lemonade</h3>
        </div>
        <div>
          <img src={img2} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Toast</h3>
        </div>
        <div>
          <img src={img5} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Brownies</h3>
        </div>
        <div>
          <img src={img6} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Frosting</h3>
        </div>
        <div>
          <img src={img7} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Shakes</h3>
        </div>
        <div>
          <img src={img} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Fruiti</h3>
        </div>
        <div>
          <img src={img0} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Fries</h3>
        </div>
        <div>
          <img src={img9} className="w-24 h-24 rounded-full mr-2" alt="" />
          <h3 className="text-center">Crunchy Rolls</h3>
        </div>
      </Marquee>
      {/* <Marquee>
        <div>
          <img src={img1} className="w-24 h-24 rounded-full mr-2" alt="" />
        </div>
      </Marquee> */}
    </div>
    </div>
  );
};

export default Trending;
