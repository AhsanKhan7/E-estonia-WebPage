import React from "react";
import showroom from "../../Assets/showroom.jpg";
import "./BriefingCenter.scss";

const BriefingCenter = () => {
  return (
    <div className="briefingcenter">
      <div className="brief">
        <img src={showroom} alt="briefCenter" />
      </div>

      <div className="briefpage-heading">
        <h1>visit the e-estonia briefing centre</h1>

        <div className="main_div">
          <div className="para1">
            <p>
              The goal of e-Estonia Briefing Centre is to inspire global policy
              makers, political leaders, corporate executives, investors and
              international media with the success story of e-Estonia and build
              links to leading IT service providers.
            </p>
          </div>
          <div className="para2">
            <p>
              The e-Estonia Briefing Centre has become a must-see destination,
              hosting over 10,000 international decision-makers every year. Make
              sure to book your visit in advance.
            </p>
            <button>LEARN MORE</button>
            <button>BOOK A VISIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefingCenter;
