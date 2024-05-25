import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddRecipe from "../Pages/AddRecipe/AddRecipe";
import AllRecipe from "../Pages/AllRecipe/AllRecipe";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import PurchaseCoin from "../Pages/PurchaseCoin/PurchaseCoin";

export const router = createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:'/addRecipe',
            element:<PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
        },
        {
            path:'/allRecipe',
            element:<AllRecipe></AllRecipe>
        },
        {
            path:'/details/:id',
            loader:({params})=>fetch(`http://localhost:5000/allRecipes/${params.id}`),
            element:<PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
        },
        {
            path:'/purchase',
            element:<PurchaseCoin></PurchaseCoin>
        },
    ]
}])