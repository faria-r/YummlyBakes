import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useTanstack from "../../CustomHooks/useTanstack";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useRecipe from "../../CustomHooks/useRecipe";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";

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
    const purchaserList = recipes.purchased_by;
    const purchased = purchaserList.find(
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
    <div className="shadow-xl w-80 px-4 font-mono">
      <div>
        <img className="w-full h-48 object-cover" src={photo} alt="" />
      </div>
      <div>
        <h2 className="font-semibold">{name}</h2>
      
        <h2>Country: {country}</h2>
        <h2>Posted By: {authorEmail}</h2>
        <h2>Total Purchase: <span className="font-bold">{purchased_by.length}</span></h2>
      </div>
      <div className="my-4 w-[99%] mx-auto text-center">
        <button
          onClick={() => handleShowDetails(authorEmail, _id)}
          className="btn text-xl text-white h-8 px-12 py-0 bg-gradient-to-r from-yellow-500 to-amber-600 border-none hover:from-amber-600 hover:to-yellow-500 "
        >
          View Recipe
        </button>
        <Toaster />
      </div>
    </div>
  );
};

export default RecipeCard;
