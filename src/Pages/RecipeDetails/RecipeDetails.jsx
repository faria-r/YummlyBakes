import React from "react";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
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
    <div className="mt-36 font-mono">
      <div className="grid grid-cols-2 gap-4 w-[80vw] mx-auto">
        <div>
          <h2 className="text-5xl font-mono">{name}</h2>
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
