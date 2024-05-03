import React from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./Components/header";
// import Footer from "./Components/footer";

const RootLayout = () => {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </HelmetProvider>
  );
};

export default RootLayout;
