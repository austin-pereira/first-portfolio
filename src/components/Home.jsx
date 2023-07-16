import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
<div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl ">
                Data Science<br />Student at UC Berkeley
            </h2>
            <p className="text-gray-500 py-4 max-w-xl text-base sm:text-lg md:text-xl h-16 mb-8">
                Fullstack Developer + Machine Learning Enthusiast.
                Aspiring Venture Capitalist.
                Working on Projects ....
            </p>
            <div className="mt-20 ">
                <Link
                    to="portfolio"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio
                    <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                    </span>
                </Link>
            </div>
        </div>
        <div className="ml-8">
            <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
        </div>
    </div>
</div>

  );
};

export default Home;
