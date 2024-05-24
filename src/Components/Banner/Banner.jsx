import React from 'react';
import bgVideo from '../../assets/bannerV.mp4';
import black from '../../assets/black.jpg'
const Banner = () => {
    return (
        <div className="bg-black mx-auto">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          poster={black}
          className="h-[100vh] w-[100%] object-cover opacity-[0.7]"
        ></video>
        <div className="w-[90%]  text-white  text-center absolute top-[32%] left-0 right-0 mx-auto">
          <h2 data-aos="fade-left" data-aos-duration="2000"  className="  my-4 text-[30px] lg:text-[70px] bg-gradient-to-r from-amber-400 via-white to-amber-600 inline-block text-transparent bg-clip-text  font-semibold font-mono">
            Yummly Bakes
          </h2>
          <div className="border-b-2 border-b-gray-400 w-[25vw] mx-auto"></div>
          <p className="my-4">Unleash Your Taste Buds</p>
          <div className="lg:flex justify-evenly items-center gap-4 mt-12 mb-4  font-serif text-xl w-[50vw] mx-auto">
            <div className="sm:mb-8 lg:mb-0">
              <button className="border-b-2   hover:border-b-black">
               See Recipe
              </button>
            </div>
            <div>
              <button className="border-b-2 hover:border-b-black">
               Add Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;