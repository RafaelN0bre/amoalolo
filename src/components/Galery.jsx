import React from "react";

import Spotify from "./Spotify";
import VideoContainer from "./VideoContainer";
import MapCard from "./Card";

const maps = [
  {
    googlemapslink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.89534986580392!2d-47.97845603254091!3d-15.839475499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31df708130bb%3A0x325be4fc33905e68!2s27%20-%20Guar%C3%A1%20II%20QI%2029%20Cl%20-%20Guar%C3%A1%2C%20Bras%C3%ADlia%20-%20DF%2C%2071060-280!5e0!3m2!1spt-BR!2sbr!4v1718126164803!5m2!1spt-BR!2sbr",
    title: "Onde te conheci",
    date: "22/03/2023",
  },
  {
    googlemapslink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.5631414967343!2d-47.95612022524769!3d-15.826972684817868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31622d4b2799%3A0x14d689a503da8732!2sACERVO%20CAF%C3%89%20-%20Casa%20Park!5e0!3m2!1spt-BR!2sbr!4v1718131484373!5m2!1spt-BR!2sbr",
    title: "Onde me apaixonei",
    date: "24/03/2023",
  },
  // {
  //   googlemapslink:
  //     "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d239.9099769262395!2d-47.97623933093806!3d-15.827157535010034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDQ5JzM3LjciUyA0N8KwNTgnMzQuNSJX!5e0!3m2!1spt-BR!2sbr!4v1718127177843!5m2!1spt-BR!2sbr",
  //   title: "🤓",
  //   date: "22/03/2023",
  // },
  {
    googlemapslink:
      "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d570.5965436120296!2d-47.97936321608061!3d-15.830259903742567!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1718127379623!5m2!1spt-BR!2sbr",
    title: "Onde te fiz minha namorada",
    date: "24/07/2023",
  },
  {
    googlemapslink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.30640310620396!2d-58.3708291310866!3d-34.60330905517251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a335b2d6e98b2f%3A0xdc1b9d06664297da!2sTrade%20Sky%20Bar!5e0!3m2!1spt-BR!2sbr!4v1718127522683!5m2!1spt-BR!2sbr",
    title: "Onde te dei o anel ",
    date: "17/10/2023",
  }
];

const Galery = () => {
  return (
    <div className="w-4/5 m-auto space-y-10">
      <VideoContainer />
      <h2 className="text-3xl font-semibold p-2">
        O maior romance já estrelado 🩵
      </h2>
      <div className="products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center">
        {maps.map((item, i) => (
          <MapCard key={i} {...item} />
        ))}
      </div>
      <Spotify />
    </div>
  );
};

export default Galery;
