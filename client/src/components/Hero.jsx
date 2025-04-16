import { heroBanner, heroBanner2 } from "@/assets/images";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-5rem)] bg-slate-100">
      <div
        className={
          "w-full h-full bg-cover bg-no-repeat bg-right lg:bg-center overflow-hidden flex items-center justify-center"
        }
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      >
        <div className="container">
          <div className="w-full lg:w-1/2 relative z-30">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Quality Cars, Easy Rentals.
            </h2>
            <p className="text-md lg:text-lg text-white mb-8">
              Choose from our range of sanitized vehicles and personalized
              packages - all at wallet-friendly prices.
            </p>
            <Link to={"/cars"} className="uppercase text-lg font-semibold px-6 py-3 border border-white text-white hover:bg-white hover:text-cyan-600 transition-colors">See All Cars</Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-20 bg-black/50"></div>
    </section>
  );
};

export default Hero;
