import React from "react";
import CountUp from "react-countup";

import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Counter = () => {
  const axiosPublic = useAxiosPublic();
  //fetching total recipe data
  const { isPending, data } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recipes");
      console.log(res.data);
      return res.data;
    },
    refetchInterval: 3000,
  });
  //fetching user data
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="relative flex justify-center gap-x-8 items-center text-center p-2">
      <CountUp start={0} end={users?.length} duration={6.75} delay={0}>
        {({ countUpRef, start }) => (
          <div className="animate-bounce w-28 shadow-xl text-white h-28 p-4 bg-orange-400 text-xl  font-mono font-semibold text-center border-[1px] border-orange-500">
            <span ref={countUpRef} /> <br />
            <button onClick={start} className="text-xs">
              {" "}
              Total User
            </button>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={data?.length} duration={6.75} delay={0}>
        {({ countUpRef, start }) => (
          <div className="animate-bounce w-28 shadow-xl text-white h-28 p-4 bg-orange-400 text-xl  font-mono font-semibold text-center border-[1px] border-orange-500">
            <span ref={countUpRef} />
            <button onClick={start} className="text-xs">
              {" "}
              Total Recipe
            </button>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Counter;
