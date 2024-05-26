import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import RecipeCard from "./RecipeCard";
import Loading from "../../Components/Loading/Loading";

const AllRecipe = () => {
  const axiosPublic = useAxiosPublic();
  const { isPending, data } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recipes");
      console.log(res.data);
      return res.data;
    },
    refetchInterval:3000
  });
  if (isPending) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90vw] mx-auto p-4">
        {data?.map((item) => (
          <RecipeCard key={item._id} item={item}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default AllRecipe;
