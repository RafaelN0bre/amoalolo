import React from 'react';

const Card = ({ imageSrc, description, price }) => {
  return (
    <div className="product h-[350px] space-y-2 cursor-pointer">
      <img
        className="w-full h-4/5 object-cover"
        loading="lazy"
        src={imageSrc}
        alt={description}
      />
      <p className="font-semibold text-gray-600">{description}</p>
      <h1 className="text-xl font-semibold">{price}</h1>
    </div>
  );
};

export default Card;
