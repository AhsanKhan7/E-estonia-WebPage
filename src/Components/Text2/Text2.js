import React from "react";
import "./Text2.scss";

function Text2() {
  return (
    <div className="text2">
      <div className="text2-heading">
        <h3>our highest rankings</h3>
      </div>
      <div className="text2-svg">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "95%",
            margin: "auto",
            marginTop: "70px",
          }}
        >
          <div className="text2-svg1">
            <div className="round">
              <span>#</span>
              <h4>1</h4>
            </div>

            <div className="text2-svg1-para1">
              <h5>start-up friendliness</h5>
            </div>

            <div className="text2-svg1-para2">
              <h5>
                Index Venture <br /> 2018
              </h5>
            </div>
          </div>

          <div className="text2-svg2">
            <div className="round">
              <span>#</span>
              <h4>2</h4>
            </div>

            <div className="text2-svg1-para1">
              <h5>internet freedom</h5>
            </div>

            <div className="text2-svg1-para2">
              <h5>
                Freedom House <br /> 2019
              </h5>
            </div>
          </div>

          <div className="text2-svg3">
            <div className="round">
              <span>#</span>
              <h4>1</h4>
            </div>

            <div className="text2-svg1-para1">
              <h5>entrepreneurial activity</h5>
            </div>

            <div className="text2-svg1-para2">
              <h5>
                World Economic Forum <br /> 2017
              </h5>
            </div>
          </div>

          <div className="text2-svg4">
            <div className="round">
              <span>#</span>
              <h4>1</h4>
            </div>

            <div className="text2-svg1-para1">
              <h5>digital health index</h5>
            </div>

            <div className="text2-svg1-para2">
              <h5>
                Bertelsmann Foundation <br /> 2019
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text2;
