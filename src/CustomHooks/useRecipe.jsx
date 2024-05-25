import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useRecipe = (id) => {
    const axiosPublic= useAxiosPublic();
    const {isPending,data:recipe=[],refetch}= useQuery({
        queryKey:['recipe'],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/allRecipes/${id}`)
            console.log(res.data)
            return res.data
        }
    })
    return [isPending,recipe,refetch]
};

export default useRecipe;