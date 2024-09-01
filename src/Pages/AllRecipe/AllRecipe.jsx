import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import RecipeCard from "./RecipeCard";
import Loading from "../../Components/Loading/Loading";
import filterP from "../../assets/filter.gif";

const AllRecipe = () => {
  //for filtering recipe
  const [categoryFilter, setCategoryFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const axiosPublic = useAxiosPublic();
  const { isPending, data } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recipes");
      console.log(res.data);
      return res.data;
    },
    refetchInterval: 1000,
  });

  //function for filtering recipe
  const filteredRecipes = data?.filter(
    (recipe) =>
      recipe?.name?.toLowerCase().includes(nameFilter.toLocaleLowerCase()) &&
      recipe?.category
        ?.toLowerCase()
        .includes(categoryFilter.toLocaleLowerCase()) &&
      recipe?.country?.toLowerCase().includes(countryFilter.toLocaleLowerCase())
  );

  //if data loading
  if (isPending) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-36 mb-32">
      {/* //filter Components */}
      <div className="flex justify-between items-center gap-4 w-[90vw] mx-auto">
        <div className="lg:w-[25vw] mx-auto">
          <div className=" mx-auto">
            <input
              type="text"
              className="w-full border-[1px] border-orange-500 mx-auto mr-6 rounded p-2 "
              placeholder="Search By Title"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
            />
          </div>
        </div>
        <div className="lg:w-[45vw]  mx-auto  lg:flex justify-center items-center gap-4 p-2  ">
          <div className="lg:w-[25vw] mx-auto">
            <select
              type="text"
              className="select select-bordered w-full border-[1px] border-orange-500 mx-auto mr-6 rounded p-2 "
              // placeholder=" Category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option disabled selected>
                Category
              </option>

              <option>Snacks</option>
              <option>Dessert</option>
              <option>Salads</option>
              <option>Appetizer</option>
            </select>
          </div>
          <div className="hidden lg:flex">
            <img src={filterP} className="w-12" alt="" srcset="" />
          </div>
          <div className="mx-auto mt-4 lg:mt-0">
            <input
              type="text"
              className=" border-[1px] border-orange-500 rounded p-2"
              placeholder="country"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 w-[90vw] my-6 mx-auto p-4">
        {filteredRecipes?.map((item) => (
          <RecipeCard key={item._id} item={item}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;
