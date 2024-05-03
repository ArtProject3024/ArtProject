import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  ind: number;
  title: string;
  copy: string;
  button: string;
  imageId: string;
  link: string; // Add onClick prop
}

const Card: React.FC<CardProps> = ({
  ind,
  title,
  copy,
  button,
  imageId,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(ind, "ingas");
  return (
    <div
      className={`card relative p-2  ${
        ind % 2 !== 0 ? `flex flex-row-reverse bg-gray-200` : `flex flex-row `
      } group items-center rounded-lg flex-wrap p-2 w-full m-auto mt-10 h-full  text-whitesmoke   transition-all duration-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-3/4 m-auto h-full flex items-center ${
          ind % 2 !== 0
            ? `flex-col md:flex-row-reverse bg-gray-200`
            : `flex-col md:flex-row `
        }`}
      >
        <Link
          to={link}
          className="md:w-1/2 w-full md:overflow-hidden h-full md:h-96 rounded-md shadow-md"
        >
          <img
            src={imageId}
            alt="Background"
            className="w-[300px] md:w-full bg-black h-[300px] md:h-full md:overflow-hidden object-cover group-hover:scale-105 duration-700 "
          />
        </Link>

        <div
          className={`content p-5 md:w-1/2 w-full  transition-transform duration-700 transform
        }`}
          style={{ zIndex: isHovered ? "1" : "0" }} // Adjust z-index for text content
        >
          <h2 className="title text-2xl font-bold text-black  mb-2">{title}</h2>
          <p className="copy italic  font-semibold text-base mb-4">{copy}</p>
          <Link
            to={link}
            className="btn cursor-pointer text-xs hover:py-3 hover:duration-300 hover:px-5 font-bold uppercase bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
