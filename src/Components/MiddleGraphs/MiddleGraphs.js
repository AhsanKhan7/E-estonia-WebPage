import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "./MiddleGraphs.scss";
import ChartDataLabels from "chartjs-plugin-datalabels";

const state = {
  labels: ["2007", "2009", "2011", "2014", "2019", "2019"],
  datasets: [
    {
      label: "Estonian Parliment",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      data: [5.5, 14.7, 24.3, 31.3, 43.8, 46.7],
    },
  ],
};

const state2 = {
  labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
  datasets: [
    {
      backgroundColor: "transparent",
      borderColor: "rgba(75,192,192,1)",
      data: [7348, 14748, 28203, 48700, 62000, 70000],
    },
  ],
};

const MiddleGraphs = () => {
  return (
    <div className="graph-sec-1">
      <div className="graph-1">
        <p>Estonians using internet voting</p>
        <p>% number of people participating</p>
        <Bar
          data={state}
          options={{
            plugins: {
              // Change options for ALL labels of THIS CHART
              datalabels: { display: false },
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
              display: true,
              labels: {
                fontSize: 22,
                fontColor: "#C4BEC5",
              },
              position: "top",
            },
          }}
        />
      </div>
      <div className="para-sec-1">
        <h1>13,000 +</h1>
        <h4>e-Resident companies</h4>
      </div>
      <div className="graph-2">
        <p>number of e-Residents</p>
        <Line
          data={state2}
          options={{
            plugins: {
              // Change options for ALL labels of THIS CHART
              datalabels: { display: false },
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
  );
};

export default MiddleGraphs;
