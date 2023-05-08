import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>this is movie Info</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/JAmspaaSNzE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back home
      </button>
    </div>
  );
};

export default Info;
