import React from "react";

const VideoContainer = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[600px] gap-4">
      <div className="w-full md:w-3/5 h-[300px] md:h-full relative">
        <video
          className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videos/parque.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-11/12 xl:w-1/2 m-auto h-full flex flex-col justify-center space-y-3 text-white p-5 absolute">
          <h1 className="text-4xl font-semibold">Linda do Nobrinho</h1>
          <p>
            Você me faz viver os momentos mais especiais que são possíveis de
            viver 🩵
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/5 h-[300px] md:h-full relative">
        <img
          className="w-full absolute top-0 rounded-xl h-full object-contain"
          loading="lazy"
          src="images/colagem.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default VideoContainer;
