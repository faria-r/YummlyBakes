import React from "react";

const Customer = ({photo,name,review}) => {
  return (
    <div className=" my-4 border-y-[1px] border-gray-400 w-[40vw] px-6 py-4">
      <div className="text-start flex mb-6 gap-4 items-center">
        <div>
          <img
            src={photo}
            className="border-b-[1px] border-orange-500 w-12 h-12 rounded-full"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <h2 className="font-mono font-semibold border-b-[1px] border-orange-500">
           {name}
          </h2>
        </div>
      </div>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
<div>
    <h2 className="my-4">{review}</h2>
</div>
    </div>
  );
};

export default Customer;
