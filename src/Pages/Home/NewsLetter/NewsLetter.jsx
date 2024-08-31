import React from "react";
import Button from "../../../Components/Button/Button";
import img from "../../../assets/yummly/it.jpg";
const NewsLetter = () => {
  return (
    <div className="lg:flex  p-4 w-[90vw] mx-auto my-24">
      <div className="flex justify-center items-center lg:w-1/2 mx-auto border p-4 bg-orange-100">
        <div className="w-3/4 mr-4">
          <img src={img} className="h-full " alt="" />
        </div>
        <div className="">
          <p className="lg:text-xl font-mono font-semibold my-4">
            WANT MORE DELICIOUSESNESS?
          </p>
          <p className="my-2 font-semibold">
            Subscribe here and we'll send you an email as new recipes are
            published.
          </p>
          <p>
            As a thank you, we'd also love to send you our fan favorites ebook!
          </p>
          <div className="my-4">
            <input
              className="my-4 text-xl rounded-none  h-8 border-none  px-[4px] py-[24px] "
              type="email"
              name=""
              id=""
              placeholder="Email Address"
            />
            <Button value={"GET MY EBOOK"}></Button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="mt-12 mb-8">
          FIND US ELESEWHERE <span className="font-bold">@YummlyBakes</span>
        </p>
        <div className="lg:flex justify-around items-center">
         <div className="mr-4" >
         <span className=" border-b-4 border-orange-500 p-2 font-semibold">
            INSTAGRAM <span className="text-2xl font-bold"> 2.0M</span>
          </span>
         </div>
         <div className="mr-4">
         <span className=" border-b-4 border-orange-200 p-2 font-semibold">
            PINTEREST <span className="text-2xl font-bold"> 503K</span>
          </span>
         </div>
         <div>
         <span className="border-b-4 border-orange-500 p-2 font-semibold">
            FACEBOOK <span className="text-2xl font-bold"> 420K</span>
          </span>
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
