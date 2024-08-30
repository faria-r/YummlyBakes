import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import v from "../../assets/v.png";
import s from "../../assets/s.gif";
import { GiSelfLove } from "react-icons/gi";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const RecipeDetails = () => {
  const [active, setActive] = useState(true);
  //height define for scroll

  const handleChangeStyle = () => {
    setActive(!active);
  };
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
  //fetch same category data from recipes
  const axiosPublic = useAxiosPublic();
  const { isPending, data } = useQuery({
    queryKey: ["recipe"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/recipes/${category}`);
      return res.data;
    },
  });
  return (
    <div className="overflow-x-hidden">
      <div className="mt-36 font-mono shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-[85vw] mx-auto">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl lg:text-5xl mb-4 font-mono">{name}</h2>
              <div className=" tooltip" data-tip="Like This Recipe?">
                {" "}
                <button
                  style={{
                    backgroundColor: active ? "white" : "white",
                    color: active ? "black" : "red",
                  }}
                  onClick={() => handleChangeStyle()}
                  className="text-4xl text-black"
                >
                  <GiSelfLove />
                </button>
              </div>
            </div>
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
            <div className=" w-[90%] mx-auto lg:flex justify-between items-center gap-4">
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
                <p className="font-semibold">
                  {authorEmail.split("@gmail.com")}
                </p>
              </div>
              <div className="border-r-[1px]">
                <h2>Origin Country </h2>
                <p className="font-semibold">{country}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mx-auto h-5/6 my-auto" >
            <iframe
              width="480"
              height="400"
              src={`https://www.youtube.com/embed/${video}`}
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <h2 className="w-max mx-auto border-x-[1px] px-4 border-orange-500 text-center font-mono font-bold text-2xl lg:text-5xl my-16">
          You'll Also Love
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90vw] mx-auto">
          {data?.map((recipe) => (
           <Link to={`/details/${recipe?._id}`}>
            <div className="shadow-xl w-80 mx-auto gap-6 py-2 px-4 font-mono">
              <div>
                <img
                  className="w-full h-48 object-cover"
                  src={recipe?.photo}
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-semibold">{recipe?.name}</h2>

                <h2>Country: {recipe?.country}</h2>
                <h2>Category: {recipe?.category}</h2>
                <h2>
                  Total Purchase:{" "}
                  <span className="font-bold">
                    {recipe.purchased_by?.length}
                  </span>
                </h2>
              </div>
            </div>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
