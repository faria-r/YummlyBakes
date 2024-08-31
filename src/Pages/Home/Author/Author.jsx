import React from "react";
import img from "../../../assets/yummly/about.jpg";
import chef from '../../../assets/yummly/chef.gif'
const Author = () => {
  return (
    <div className="lg:relative">
      <p className="lg:absolute top-10 left-[20%] text-6xl font-thin -ml-6 font-serif italic py-2 text-center mb-6">
        hey ! i'm faria
      </p>
      <div className="lg:flex justify-center items-center w-[90vw] mx-auto p-6">
        <div className="lg:w-[35vw] mx-auto z-10">
          <p className="lg:w-[20vw] lg:ml-40 mx-auto lg:mt-16 ">
            I'm the proud owner of this recipe-sharing website, where my passion
            for cooking meets my love for community. This is a space
            where food lovers can explore,create, and share their favorite recipes.
          </p>
          <img src={chef} className='w-20 mx-auto my-2' />
        </div>
        <div className="lg:w-1/2 mx-auto">
          <img src={img}  alt="" className='lg:-ml-12'srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Author;
