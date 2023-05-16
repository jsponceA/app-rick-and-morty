import React from "react";
import img from "../assets/img/loader.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={img} alt="loader.svg" />
    </div>
  );
};

export default Loader;
