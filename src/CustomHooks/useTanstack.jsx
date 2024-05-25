import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Context/AuthProvider';

const useTanstack = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)
    const {data: userInfo=[],refetch} = useQuery({
        queryKey:['user'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/user/${user?.email}`)
            return res.data
        }
    })
    return [userInfo,refetch]
};

export default useTanstack;