import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "./MiddleGraphs3.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";

const state3 = {
  labels: ["2011", "2013", "2015", "2017", "2019"],
  datasets: [
    {
      backgroundColor: "#8be9ee",
      borderColor: "rgba(0,0,0,1)",
      data: [1, 3, 7, 12, 17],
    },
  ],
};

const state4 = {
  labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
  datasets: [
    {
      backgroundColor: "transparent",
      borderColor: "#8be9ee",
      data: [7348, 14748, 28203, 48700, 62000, 70000],
    },
  ],
};

const MiddleGraphs3 = () => {
  return (
    <div className="graph-sec-3">
      <div className="para-sec">
        <h3>electronic ID</h3>
        <div className="para-sec-3">
          <h1>99 %</h1>
          <h4>Estonian residents have ID card</h4>
        </div>
      </div>

      <div className="middleGraph-sec-3">
        <p>Estonian residents using mobile-ID</p>
        <div className="middle1">
          <Bar
            data={state3}
            width={400}
            height={150}
            options={{
              plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {
                  display: true,
                  color: "white",
                  anchor: "end",
                  padding_Bottom: "10",
                },
              },

              scales: {
                yAxes: [
                  {
                    display: true,
                    ticks: {
                      display: false,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "white",
                    },
                    barPercentage: 0.3,
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
              title: {
                display: false,
                text: "",
                fontSize: 20,
              },
              legend: {
                display: false,
              },
            }}
          />
        </div>
      </div>
      <div className="middleGraph-sec-4">
        <p>Estonian residents using smart-ID</p>
        <div className="middle2">
          <Line
            data={state4}
            width={400}
            height={150}
            options={{
              plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {
                  display: true,
                  color: "white",
                  anchor: "end",
                  padding_Bottom: "10",
                },
              },
              scales: {
                yAxes: [
                  {
                    display: true,
                    ticks: {
                      display: false,
                    },
                    gridLines: {
                      display: false,
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "white",
                    },
                    barPercentage: 0.3,
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
};

export default MiddleGraphs3;
