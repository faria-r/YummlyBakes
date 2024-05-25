import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AddRecipe from "../Pages/AddRecipe/AddRecipe";
import AllRecipe from "../Pages/AllRecipe/AllRecipe";

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
            element:<AddRecipe></AddRecipe>
        },
        {
            path:'/allRecipe',
            element:<AllRecipe></AllRecipe>
        }
    ]
}])