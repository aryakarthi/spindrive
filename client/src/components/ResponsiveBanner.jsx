import React from "react";
import PropTypes from "prop-types";
const ResponsiveBanner = ({ imgUrl }) => {
  return (
    <section className="w-full overflow-hidden">
      <img
        src={imgUrl}
        alt="Banner"
        className="w-full h-auto block object-cover "
      />
    </section>
  );
};

ResponsiveBanner.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default ResponsiveBanner;
