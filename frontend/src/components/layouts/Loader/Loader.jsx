import React from "react";
import "./Loader.css";
import "ldrs/bouncy";

// Default values shown


function Loader() {
  return (
    <div className="loading">
      <l-bouncy position="center" size="150" speed="1.75" color="black"></l-bouncy>;
    </div>
  );
}

export default Loader;
