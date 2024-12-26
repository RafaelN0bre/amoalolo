import React from "react";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-4/5 m-auto p-10">
      <div className="md:flex grid grid-cols-2 gap justify-between items-start my-10">
        <div className="space-y-5 py-5 border-b">
          <h1 className="text-3xl font-bold">🩵Lolo🩵</h1>
          <div className="flex space-x-5 cursor-pointer">
            <a
              href="https://open.spotify.com/playlist/6vSYLDjb6YGiF1bWYlOMXF?si=9e5480d869484191"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify
                size={"1.5rem"}
                className="cursor-pointer hover:fill-green-500"
              />
            </a>
            <a
              href="https://www.instagram.com/nobre.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={"1.5rem"}
                className="cursor-pointer hover:fill-pink-500"
              />
            </a>
            <a
              href="https://www.instagram.com/eloscherry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={"1.5rem"}
                className="cursor-pointer hover:fill-pink-500"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">🩵 Obrigado por</h1>
          <p className="text-sm text-gray-400">me namorar</p>
          <p className="text-sm text-gray-400">ser bonita e gostosa</p>
          <p className="text-sm text-gray-400">ter o cabelo bonito e azul</p>
          <p className="text-sm text-gray-400">me apaixonar cada vez mais</p>
        </div>
        <div className="flex flex-col space-y-3">
          <h1 className="font-bold">🩵 Eu amo</h1>
          <p className="text-sm text-gray-400">o seu cheiro de morango</p>
          <p className="text-sm text-gray-400">
            o jeito como você verifica a temperatura da comida com a língua
          </p>
          <p className="text-sm text-gray-400">
            o jeito como você dá beijinhos na toalha de rosto
          </p>
          <p className="text-sm text-gray-400">a dança do cookie</p>
        </div>
      </div>
      <div className="border-t py-2">
        <p className="">
          &copy; 2023 <span className="font-bold pr-1">Nobrinho 💘 Lolo</span>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
