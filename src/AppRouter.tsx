import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home";
import RootLayout from "./RootLayout";
import Categories from "./Pages/categories";
import Comparison from "./Pages/comparison";
import Features from "./Pages/features";

import LogoAi from "./Pages/looka";
import BenchmarkCriteriaTable from "./Pages/table";
import BrandMarker from "./Pages/hillLogo";
import LogoMarker from "./Pages/Hatchful";
import Adobe from "./Pages/adobe";
import Gemini from "./Pages/gemini";
import CopioletDesigner from "./Pages/copioletDesigner";
import { SetStateAction } from "react";
import Fotor from "./Pages/fotor";
import PhotAI from "./Pages/photAI";
import LightXEditor from "./Pages/lightXEditor";
import { HeroParallaxDemo } from "./Components/product";
import AlterHome from "./Pages/alterHome";
import LogoCreation from "./Pages/LogoCreation";
import ImageEditing from "./Pages/ImageEditing";
import ImageGeneration from "./Pages/ImageGeneration";

export const router = createBrowserRouter([
  {
    path: "/",
    handle: { title: "Home page" },
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <HeroParallaxDemo />,
        handle: { title: "Home" },
      },
      {
        path: "/alernativeHome",
        element: <AlterHome />,
        handle: { title: "Home" },
      },
      {
        path: "/",
        element: <Home />,
        handle: { title: "Home" },
      },
      {
        path: "/LogoCreation",
        element: <LogoCreation />,
        handle: { title: "LogoCreation" },
      },
      {
        path: "/ImageEditing",
        element: <ImageEditing />,
        handle: { title: "ImageEditing" },
      },
      {
        path: "/ImageGeneration",
        element: <ImageGeneration />,
        handle: { title: "ImageGeneration" },
      },
      // {
      //   path: "/categories",
      //   element: (
      //     <Categories
      //       setFunction={function (value: SetStateAction<string | null>): void {
      //         throw new Error("Function not implemented.");
      //       }}
      //     />
      //   ),
      //   handle: { title: "Categories" },
      // },
      {
        path: "/features",
        element: <Features />,
        handle: { title: "features" },
      },
      {
        path: "/BenchmarkCriteriaTable",
        element: <BenchmarkCriteriaTable />,
        handle: { title: "table" },
      },
      {
        path: "/comparison",
        element: <Comparison />,
        handle: { title: "comparison" },
      },
      {
        path: "/logomarker",
        element: <LogoMarker />,
        handle: { title: "logomarker" },
      },
      {
        path: "/brandmarker",
        element: <BrandMarker />,
        handle: { title: "brandmarker" },
      },
      {
        path: "/adobe",
        element: <Adobe />,
        handle: { title: "adobe" },
      },
      {
        path: "/gemini",
        element: <Gemini />,
        handle: { title: "gemini" },
      },
      {
        path: "/fotor",
        element: <Fotor />,
        handle: { title: "fotor" },
      },
      {
        path: "/photAI",
        element: <PhotAI />,
        handle: { title: "photAI" },
      },
      {
        path: "/lightXeditor",
        element: <LightXEditor />,
        handle: { title: "lightXeditor" },
      },
      {
        path: "/copiolet-designer",
        element: <CopioletDesigner />,
        handle: { title: "copiolet-designer" },
      },
      // {
      //   path: "/colorPallet",
      //   element: <ColorPallet />,
      //   handle: { title: "colorPallet" },
      // },

      {
        path: "/logoai",
        element: <LogoAi />,
        handle: { title: "logoCreation" },
      },
    ],
  },
]);
