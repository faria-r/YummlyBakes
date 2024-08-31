import React from "react";
import Banner from "../../Components/Banner/Banner";
import DevInfo from "./DevInfo/DevInfo";
import HappyCustomer from "../../Components/HappyCustomer/HappyCustomer";
import ImageGallery from "./ImageGallery/ImageGallery";
import HomeIntro from "./HomeIntro/HomeIntro";
import Trending from "./Trendings/Trending";
import PickWeek from "./PickWeek/PickWeek";
import HowTo from "./HowTo/HowTo";
import PremiumRecipe from "./PremiumRecipe/PremiumRecipe";
import NewsLetter from "./NewsLetter/NewsLetter";
import Author from "./Author/Author";
import Awards from "./Awards/Awards";


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
      <PickWeek></PickWeek>
      </div>    
      <div>
     <HowTo></HowTo>
      </div>
      <div>
        <PremiumRecipe></PremiumRecipe>
      </div>
      <div>
        <NewsLetter></NewsLetter>
      </div>
      <div>
        <Author></Author>
        {/* <DevInfo></DevInfo> */}
      </div>
      <div>
        <Awards></Awards>
      
      </div>
    </div>
  );
};

export default Home;
