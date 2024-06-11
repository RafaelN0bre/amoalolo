import React from 'react';

const MapCard = ({ googlemapslink, title, date }) => {
  return (
    <div className="product h-[350px] space-y-2 cursor-pointer">
          <iframe
            className="w-full h-4/5"
            title={title}
            src={googlemapslink}
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="font-semibold text-gray-600">{title}</p>
          <h1 className="text-xl font-semibold">{date}</h1>
        </div>
  );
};

export default MapCard;