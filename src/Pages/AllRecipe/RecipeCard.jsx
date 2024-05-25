import React, { useContext } from "react";
import Button from "../../Components/Button/Button";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useTanstack from "../../CustomHooks/useTanstack";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ item }) => {
  const { name, photo, country, authorEmail, purchased_by, _id } = item;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [userInfo] = useTanstack();

  const handleShowDetails = (authorEmail) => {
    console.log("inside func");
    if (user?.email === authorEmail) {
      navigate("/details");
    }
    else if(user && userInfo.coins < 10){
        toast.error('Please Purchase Coin to View Recipe')
       navigate('/purchase')

    }
     else {
      toast.error("Please Login to View Recipe");
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
        <h2>{purchased_by}</h2>
      </div>
      <div className="my-4 w-[99%] mx-auto text-center">
        <button
          onClick={() => handleShowDetails(authorEmail)}
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
