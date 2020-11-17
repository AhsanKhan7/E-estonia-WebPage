import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import "./MiddleGraphs2.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";

function Middlegraphs2() {
  const state = {
    type: "horizontalBar",
    labels: [
      "2019 -180,855,017",
      "2017 - 48,250,068",
      "2015 - 49,169,623",
      "2013 - 37,324,758",
      "2011 - 19,520,928",
      "2009 - 7,426,344",
      "2007 - 3,551,605",
      "2005 - 1,630,046",
      "2003 - 63,581",
    ],

    datasets: [
      {
        label: "Estonian Parliment",
        backgroundColor: "#94E8ED",
        borderColor: "rgba(0,0,0,1)",
        data: [
          180855017,
          48250068,
          49169623,
          37324758,
          19520928,
          7426344,
          3551605,
          1630046,
          63581,
        ],
      },
    ],
  };

  return (
    <div className="middleGraph">
      <div className="middleGraph-para">
        <h4>digital state services</h4>
        <div className="middleGraph-services">
          <p>70 %</p>
          <p>Estonians who use ID-card regularly</p>
        </div>
        <div className="middleGraph-services">
          <p>99 %</p>
          <p>State services that are online</p>
        </div>
        <div className="middleGraph-services">
          <p>2,600 +</p>
          <p>Services that can be used via X-road</p>
        </div>
      </div>
      <div>
        <div className="middleGraph-tag">
          <p>Number of queries via x-Road in 1 month</p>
        </div>
        <div className="middleGraph-graph">
          <HorizontalBar
            data={state}
            width={800}
            height={390}
            options={{
              plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: { display: false },
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: "white",
                      fontSize: "15",
                    },
                    display: true,
                    barPercentage: 0.3,
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      display: false,
                    },

                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
              title: {
                display: false,
              },
              legend: {
                display: false,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Middlegraphs2;
