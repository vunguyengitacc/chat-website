import React from "react";
import "feature/not-found/style.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const NotFoundFeature = () => {
  return (
    <Box height="100vh">
      <p className="zoom-area">The page you're looking isn't here</p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        <Link className="more-link" to="home">
          Visit home page
        </Link>
      </div>
    </Box>
  );
};

export default NotFoundFeature;
