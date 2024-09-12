import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useTanstack from "../../CustomHooks/useTanstack";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useRecipe from "../../CustomHooks/useRecipe";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { SlLike } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";

const RecipeCard = ({ item }) => {
  const { name, photo, country, authorEmail, purchased_by, _id } = item;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [userInfo] = useTanstack();
  const [recipes, setRecipes] = useState([]);
  //custom toast
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  //fetch recipe data
  useEffect(() => {
    fetch(`https://yummly-bake-server.vercel.app/allRecipes/${_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []);

  const handleShowDetails = (authorEmail, id) => {
    const purchaserList = recipes?.purchased_by;
    const purchased = purchaserList?.find(
      (person) => person === userInfo?.email
    );
    console.log(purchased);
    if (!user) {
      toast.error("Please Login to View Recipe");
    } else if (user?.email === authorEmail || user?.email === purchased) {
      navigate(`/details/${id}`);
    } else if (user && userInfo.coins < 10) {
      Toast.fire({
        icon: "warning",
        title: "Please Purchase Coin to View Recipe",
      });
      navigate("/purchase");
    } else if (user && userInfo.coins >= 10) {
      Swal.fire({
        title: "You have To Spend 10 Coins",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f59e0b",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic
            .post("/updateCoin", {
              userId: userInfo._id,
            })
            .then((res) => {
              axiosPublic
                .post("/increseCoin", {
                  authorEmail: authorEmail,
                })
                .then((res) => {
                  axiosPublic
                    .patch("/updateRecipe", {
                      recipeId: id,
                      purchaser: userInfo.email,
                    })
                    .then((res) => {
                      console.log(res);
                      navigate(`/details/${id}`);
                    });
                });
            });
          Swal.fire({
            title: "See The Recipe Now",
            text: "You Spend 10 Coins",
            icon: "success",
          });
        }
      });
    }
  };
  return (
    <div
      onClick={() => handleShowDetails(authorEmail, _id)}
      className="w-64 mx-auto  p-2 font-mono"
    >
      <div className="relative transition duration-0  hover:duration-150 ease-in-out">
        <img
          className="bg-gradient-to-t from-white via-black to-black w-full  h-64 mx-auto object-cover rounded-md"
          src={photo}
          alt=""
        />

        <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60 hover:opacity-50">
          {" "}
         <div className="flex justify-between p-4 items-center">
         <div>
         <p className=" text-white font-bold">
            <AiOutlineLike className="inline-block items-center text-white " />{" "}
            {Math.floor(Math.random() * 12) + 88}%
          </p>
         </div>
         <div className="tooltip tooltip-left" data-tip='Save'>
         <p><FaRegBookmark  className="text-white " /></p>
         </div>
         </div>
        </div>
      </div>
      <h2 className="font-semibold">{name}</h2>
      <div className="text-[14px] flex justify-between">
        <h2>
          Country: <span className="font-semibold">{country}</span>
        </h2>
        {/* <h2>Posted By: {authorEmail}</h2> */}
        <h2>
          Total Sell: <span className="font-bold">{purchased_by.length}</span>
        </h2>
      </div>
      <div className="hidden my-4 w-[99%] mx-auto text-center">
        <button className="btn text-xl text-white h-8 px-12 py-0 bg-gradient-to-r from-yellow-500 to-amber-600 border-none hover:from-amber-600 hover:to-yellow-500 ">
          View Recipe
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default RecipeCard;
