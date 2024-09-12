import React from "react";
import VedioGallery from "./VedioGallery";
import videojs from "video.js";
import vd from "../../../assets/r.png";

const Video = () => {
    const poster = vd;
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster:poster,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      }
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <>
      <div className=" h-[450px] overflow-y-scroll border p-4 grid lg:grid-cols-3 grid- w-[90vw] mx-auto gap-6 my-24">
  
    <div className="h-[450px] auto-rows-min col-span-2 row-span-3 border">
    <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  <div className="w-[25vw]  flex flex-col gap-2">
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  <VedioGallery  options={videoJsOptions} onReady={handlePlayerReady} />
  </div>
      
      
     
      </div>
    </>
  );
};

export default Video;
