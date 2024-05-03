import React, { ReactNode } from "react";
import Categories from "../Pages/categories";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="relative h-[100vh] flex justify-center items-start">
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <img
            src="/ai2.jpg" // Replace with the path to your background image
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="z-10 text-white w-full">
          <div className="flex justify-center items-center text-center text-3xl pt-8 font-bold ">
            Explore AI-assisted Tools for Graphic Designers & Artists
          </div>
          <div className="m-auto w-1/2">
            <Categories />
          </div>
          <Link to="/BenchmarkCriteriaTable">
            <button className="px-2 py-2 flex group duration-700 ease-in-out item-center justify-center group overflow-hidden gap-3 text-end backdrop-blur-lg shadow-lg border-2 border-gray-400 shadow-slate-500 text-white hover:bg-gray-100/50 rounded-md ml-auto mr-80">
              <p className="group-hover:translate-x-4 duration-700">
                Benchmark criteria
              </p>
              <GoArrowRight className="m-auto text-lg duration-700 font-semibold group-hover:translate-x-10" />
            </button>
          </Link>
          <div className="w-full md:mt-10 px-10 text-center ">
            <h1 className="text-xl md:text-5xl mb-4 ">
              {" "}
              Choose specific
              <span className="font-bold leading-relaxed">
                {" "}
                Design Capability{" "}
              </span>
              to learn more about{" "}
              <span className="font-bold ">AI tools </span> available
            </h1>

            <p className="text-base md:text-xl">
              Navigate groundbreaking possibilities and redefine your journey
              in the world of artificial intelligence{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="">{children}</div>
      <div className="flex justify-end items-baseline w-full absolute bottom-16 p-10">
        <div className="flex justify-center w-1/2">
          {/* Empty div to center the dropdown */}
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
