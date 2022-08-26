import React from "react";
import "./loader.css";

function Loader({ loading }) {
  if (!loading) return null;
  return (
    <div className="full-screen blocked">
      <div className="loader"></div>
      {/* <div className="flex-center">
        <div className="loader-container">
        </div>
      </div> */}
    </div>
  );
}

export default Loader;
