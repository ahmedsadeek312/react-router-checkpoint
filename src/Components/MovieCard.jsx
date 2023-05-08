import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Info from "./Info";

const MovieCard = ({ film_title, film_image, film_desc }) => {
  const navigate = useNavigate();
  return (
    <div className="card_div">
      <Card className="myCard" style={{ width: "18rem" }}>
        <Card.Img className="card_img" variant="top" src={film_image} />
        <Card.Body>
          <Card.Title>{film_title}</Card.Title>
          <Card.Text>{film_desc}</Card.Text>
          <button
            onClick={() => {
              navigate("/info");
            }}
          >
            click to navigate
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
