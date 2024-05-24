import React from "react";
import Banner from "../../Components/Banner/Banner";
import DevInfo from "./DevInfo/DevInfo";

const Home = () => {
  return (
    <div>
      <div className=" relative top-0 h-[100vh]">
        <Banner></Banner>
      </div>
      <div>
        <DevInfo></DevInfo>
      </div>
    </div>
  );
};

export default Home;
