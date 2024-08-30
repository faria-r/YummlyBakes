import React from "react";
import Banner from "../../Components/Banner/Banner";
import DevInfo from "./DevInfo/DevInfo";
import HappyCustomer from "../../Components/HappyCustomer/HappyCustomer";
import ImageGallery from "./ImageGallery/ImageGallery";
import HomeIntro from "./HomeIntro/HomeIntro";
import Trending from "./Trendings/Trending";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className=" relative top-0 h-[100vh]">
        <Banner></Banner>
      </div>
      <div>
        <ImageGallery></ImageGallery>
      </div>
      <div>
       <HomeIntro></HomeIntro>
      </div>
      <div>
       <Trending></Trending>
      </div>
      <div>
        <DevInfo></DevInfo>
      </div>
    </div>
  );
};

export default Home;
