import React from "react";
import { TfiMouse } from "react-icons/tfi";
import './Home.css'
function Home() {
  return (
    <>
      <div className="banner">
        <p>WelCome to Kharidlo</p>
        <h1>FIND AMAZING PRODUCTS BELOW </h1>
        <a href="#container">
            <button>
                Scroll <TfiMouse />
            </button>
        </a>
      </div>
    </>
  );
}

export default Home;
