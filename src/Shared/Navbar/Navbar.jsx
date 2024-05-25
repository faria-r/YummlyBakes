import React, { useContext, useState } from "react";
import logo from "../../assets/r.png";
import { AuthContext } from "../../Context/AuthProvider";
import { GiTwoCoins } from "react-icons/gi";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { Link } from "react-router-dom";
import useTanstack from "../../CustomHooks/useTanstack";
import Loading from "../../Components/Loading/Loading";

const Navbar = () => {
  const { user, loginWithGoogle, updateUserProfile, logOut } =
    useContext(AuthContext);
const [userInfo,refetch] = useTanstack();


  // const coinV = 70;
  // setCoins(coinV)
  const axiosPublic = useAxiosPublic();

  //login a user with google
  const handleLogin = () => {
    loginWithGoogle().then((result) => {
      const user = result.user;
      updateUserProfile(user.displayName, user.photoURL);
      const userInformation = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        coins: 50,
      };
      axiosPublic.post("/users", userInformation).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          console.log("inserted");
        } else {
          console.log("not inserted");
        }
      });
    });
  };
  //logout a user
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className="absolute top-0 bg-transparent z-10 w-full pt-8">
      <div className="navbar text-yellow-500 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black opacity-[0.5] rounded-box w-52"
            >
              <li>
                <Link to='/'>Home</Link>
              </li>

              {
              user && <li>
              <Link to='/allRecipe'>All Recipe</Link>
            </li>
            }
            {user && (
              <li>
               <Link to='/addRecipe'>Add Recipe</Link>
              </li>
            )}
            </ul>
          </div>
          <img src={logo} className="w-16" alt="" srcset="" />
          <p className="lg:ml-16 text-xl lg:text-2xl font-mono font-bold bg-gradient-to-r from-yellow-500 via-green-600 to-yellow-400 inline-block text-transparent bg-clip-text">
            Yummly Bakes
          </p>
        </div>
        <div className="navbar-center lg:-ml-36 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
            <Link to='/'>Home</Link>
            </li>

            {
              user && <li>
              <Link to='/allRecipe'>All Recipe</Link>
            </li>
            }
            {user && (
              <li>
               <Link to='/addRecipe'>Add Recipe</Link>
              </li>
            )}
            {user && (
              <li>
                <p className="relative">
                  {" "}
                  <GiTwoCoins className="text-yellow-500 text-4xl" />
                  <p className="absolute text-yellow-500 text-center top-0 right-2 text-xs border rounded-full p-[1px] w-6 h-6 border-yellow-500">
                    {userInfo?.coins}
                  </p>
                </p>
              </li>
            )}
            {user && (
              <div className="avatar online ml-6">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
            )}
          </ul>
        </div>
        {user ? (
          <div className="ml-16">
            <button
              onClick={handleLogOut}
              className="btn text-xl text-white h-8 px-12 py-0 bg-gradient-to-r from-yellow-500 to-amber-600 border-none hover:from-amber-600 hover:to-yellow-500 "
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="ml-16">
            <button
              onClick={handleLogin}
              className="btn text-xl text-white h-8 px-12 py-0 bg-gradient-to-r from-orange-600 to-amber-600 border-none hover:from-amber-600 hover:to-yellow-500 "
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
