import React from "react";
import "./Text1.scss";

function Text1() {
  return (
    <div className="text1">
      <div className="text1-heading">
        <p>Estonian ICT sector</p>
      </div>

      <div className="text1-svgs">
        <div className="text1-svg1">
          <div className="svg1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g data-name="Layer 2">
                <g
                  data-name="Layer 1"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M48 32v12H12V20h36v8l-16 3.556V35h-4v-3.444l-12.936-2.875M15.064 28.681L28 31.556M35 17v-2a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2M35 58.562A28.979 28.979 0 1 0 30 59"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="svg1-text">
            <h2>5.9 %</h2>
            <p>Employees in ICT sector</p>
          </div>
        </div>

        <div className="text1-svg2">
          <div className="svg2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g data-name="Layer 2">
                <g
                  data-name="Layer 1"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M35 58.562A28.979 28.979 0 1 0 30 59M18 26c0-6.627 5.373-17 12-17s12 10.373 12 17"></path>
                  <path d="M38 50v-1l-6-1v-1.772a3.004 3.004 0 0 1 2.133-2.866A13.987 13.987 0 0 0 44 30H16a13.987 13.987 0 0 0 9.867 13.362A3.004 3.004 0 0 1 28 46.228V48l-6 1v1"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="svg2-text">
            <h2>1000 +</h2>
            <p>Number of startups</p>
          </div>
        </div>

        <div className="text1-svg3">
          <div className="svg3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g data-name="Layer 2">
                <g
                  data-name="Layer 1"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="M35 58.562A28.979 28.979 0 1 0 30 59M33.524 40.185L30 37.624l-9.889 7.185 3.778-11.625L14 26h12.223L30 14.375 33.777 26H46l-9.889 7.184 3.778 11.625"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="svg3-text">
            <h2>4</h2>
            <p>Number of unicorns</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text1;
