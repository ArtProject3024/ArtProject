"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  }[];
}) => {
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(6, 12);
  const thirdRow = products.slice(12, 18);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <h2 className="text-5xl font-bold py-10 text-center">
          Logo Creation AI
        </h2>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <h2 className="text-5xl font-bold py-10 text-center">
          Image Generation AI
        </h2>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <h2 className="text-5xl font-bold py-10 text-center">
          Image Editing AI
        </h2>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-20">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Elevate Your Design with AI-Driven Capabilities
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Navigate groundbreaking possibilities and redefine your journey in the
        world of artificial intelligence.{" "}
        {/* <button className=" mt-2 cursor-pointer px-5 py-3 bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center">
          Benchmark Criteria
        </button> */}
        <Link to="/BenchmarkCriteriaTable">
          <button className="px-2 mt-3 py-2 flex group duration-700 ease-in-out item-center justify-center group overflow-hidden gap-3 text-end   border-2 border-gray-400 shadow-slate-500 text-white hover:bg-gray-100/50 rounded-md">
            <p className="group-hover:translate-x-4 duration-700">
              Benchmark criteria
            </p>
            <GoArrowRight className="m-auto text-lg duration-700 font-semibold group-hover:translate-x-10" />
          </button>
        </Link>
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link to={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <div className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p>{product.description}</p>
        <button
          className=" mt-2 cursor-pointer px-5 py-3 bg-white rounded-xl border border-neutral-100 dark:bg-black dark:border-white/[0.2] hover:border-neutral-200 group/btn overflow-hidden relative flex items-center justify-center"
          onClick={() => {
            window.location.href = product.link;
          }}
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};
