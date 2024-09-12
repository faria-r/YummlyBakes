import React from "react";
import Banner from "../../Components/Banner/Banner";
import ImageGallery from "./ImageGallery/ImageGallery";
import HomeIntro from "./HomeIntro/HomeIntro";
import Trending from "./Trendings/Trending";
import PickWeek from "./PickWeek/PickWeek";
import HowTo from "./HowTo/HowTo";
import PremiumRecipe from "./PremiumRecipe/PremiumRecipe";
import NewsLetter from "./NewsLetter/NewsLetter";
import Author from "./Author/Author";
import Awards from "./Awards/Awards";
import WA from '../../assets/social.png'


const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
       <div className="fixed bottom-12 right-12 z-10 tooltip " data-tip='Chat With Us?' >
<a href="https://api.whatsapp.com/send?phone=1970477973" target='_blank'><img src={WA} className="w-12 animate-bounce " alt="" /></a>
      </div>
      <div className="relative top-0 h-[100vh]">
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
      {/* <div>
       <Video></Video>
      </div> */}
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
