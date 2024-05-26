import React from "react";
import { useLoaderData } from "react-router-dom";
import v from "../../assets/v.png";
import s from "../../assets/s.gif";
const RecipeDetails = () => {
  const recipes = useLoaderData();
  const {
    name,
    photo,
    country,
    authorEmail,
    purchased_by,
    _id,
    video,
    watchCount,
    details,
    category,
  } = recipes;
  console.log(recipes);
  return (
    <div className="mt-36 font-mono shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[80vw] mx-auto">
        <div>
          <h2 className="text-2xl lg:text-5xl mb-4 font-mono">{name}</h2>
          <p className="font-semibold">{category}</p>

          <div className="rating rating-md my-6">
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <h2 className="text-3xl">Description</h2>
          <hr />
          <p className="my-6">{details}</p>
          <div className=" w-[90%] mx-auto flex justify-between items-center gap-4">
            <div className="flex justify-center gap-4 items-center">
              <img src={v} alt="" srcset="" /> Views:{" "}
              <span className="text-yellow-500 font-semibold">
                {watchCount}
              </span>
            </div>
            <div className="flex justify-center gap-4 items-center">
              <img className="w-8" src={s} alt="" srcset="" />
              Total Purchased By:{" "}
              <span className="text-yellow-500 font-semibold">
                {purchased_by.length}
              </span>{" "}
              people
            </div>
          </div>
          <div className="my-6 grid grid-cols-2 gap-4  ">
            <div className="border-r-[1px] border-yellow-500">
              <h2>This Recipe is Posted By </h2>
              <p className="font-semibold">{authorEmail.split("@gmail.com")}</p>
            </div>
            <div className="border-r-[1px]">
              <h2>Origin Country </h2>
              <p className="font-semibold">{country}</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            width="480"
            height="400"
            src={`https://www.youtube.com/embed/${video}`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
