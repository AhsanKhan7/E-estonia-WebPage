import React from "react";
import "./AmbitiosFuture.scss";

const AmbitiosFuture = () => {
  return (
    <div className="ambitiosfuture">
      <div className="text-heading">
        <h3>ambitios future</h3>
      </div>

      <div className="content">
        <div className="frame">
          <iframe
            width="536"
            height="302"
            src="https://www.youtube.com/embed/5JoFDjmb9P4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>e-Estonia future part 1</h4>
        </div>
        <div className="frame">
          <iframe
            width="536"
            height="302"
            src="https://www.youtube.com/embed/h41bBQbPxts"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h4>e-Estonia future part 2</h4>
        </div>
      </div>
    </div>
  );
};

export default AmbitiosFuture;
