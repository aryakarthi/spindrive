import React from "react";
import { Footer, Header, ScrollToTop } from "../components";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
