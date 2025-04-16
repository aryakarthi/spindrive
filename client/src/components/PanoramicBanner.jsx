import React from "react";
import PropTypes from "prop-types";

const PanoramicBanner = ({ bgImg, title, description }) => {
  return (
    <section className="w-full h-[20rem]">
      <div
        className={
          "h-full bg-cover bg-no-repeat bg-right lg:bg-center overflow-hidden"
        }
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container h-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-30">
          <div className="h-full flex items-center justify-center md:justify-start">
            <div className="flex flex-col gap-4 font-bold text-white">
              <h3 className="w-full text-2xl">{title}</h3>
              <p className="w-full text-md">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PanoramicBanner.propTypes = {
  bgImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PanoramicBanner;
