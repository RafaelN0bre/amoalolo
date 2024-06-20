import React, {useRef} from 'react'
import { AiFillHeart } from "react-icons/ai";

const Nav = ({ onSequenceMatch }) => {
  const clickSequenceRef = useRef([]);

  const handleClick = (index) => {
    clickSequenceRef.current = [...clickSequenceRef.current, index].slice(-3); // Keep only the last 3 clicks
    if (clickSequenceRef.current.join('') === '231') {
      onSequenceMatch();
      clickSequenceRef.current = []; // Reset the sequence after match
    }
  };

  return (
    <nav className="w-11/12 xl:w-4/5 m-auto flex justify-between py-5">
      <h1 className="text-2xl font-semibold text-sky-400 cursor-pointer">Nobrinho 💘 Lolo</h1>
      <div className="flex space-x-8">
        <AiFillHeart size={"1.5rem"} className="cursor-pointer hover:fill-red-500" onClick={() => handleClick(1)} />
        <AiFillHeart size={"1.5rem"} className="cursor-pointer hover:fill-sky-500" onClick={() => handleClick(2)} />
        <AiFillHeart size={"1.5rem"} className="cursor-pointer hover:fill-red-500" onClick={() => handleClick(3)} />
      </div>
    </nav>
  );
};

export default Nav;