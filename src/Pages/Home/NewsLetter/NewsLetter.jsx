import React from "react";
import Button from "../../../Components/Button/Button";
import img from '../../../assets/yummly/it.jpg'
const NewsLetter = () => {
  return (
    <div className="lg:flex justify-center items-center p-4 w-[90vw] mx-auto my-16">
      <div className="flex justify-around lg:w-1/2 mx-auto border p-6 bg-orange-100">
        <div className="w-1/2 mr-4">
          <img src={img} className="h-full w-full"  alt="" />
        </div>
        <div>
          <p className="lg:text-xl font-mono font-semibold my-4">WANT MORE DELICIOUSESNESS?</p>
          <p className="my-2 font-semibold">
            Subscribe here and we'll send you an email as new recipes are
            published.
          </p>
          <p>
            As a thank you, we'd also love to send you our fan favorites ebook!
          </p>
          <div className="my-4">
            <input className='my-4 text-xl rounded-none  h-8 border-none  px-[4px] py-[24px] '  type="email" name="" id="" placeholder="Email Address" />
            <Button value={'GET MY EBOOK'}></Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NewsLetter;
