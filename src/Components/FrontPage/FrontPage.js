import React from "react";
import TopbikeCrop1 from "../../Assets/TopbikeCrop1.jpg";
import Header from "../Header/Header";
import "./FrontPage.scss";

const FrontPage = () => {
  return (
    <div className="frontPage">
      <div className="topBike">
        <img src={TopbikeCrop1} alt="roofTopBike" />
      </div>
      <div className="front-header">
        <Header />
      </div>
      <div className="frontPage-heading">
        <h1>
          we have built a digital society
          <br /> and we can show you how
        </h1>

        <p>
          Named ‘the most advanced digital society in the world’ by Wired,
          Estonia has built an
          <br />
          efficient, secure and transparent ecosystem where 99% of governmental
          services are
          <br />
          online. It is no surprise then that Estonians have designed numerous{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            digital solutions to
            <br />
            help tackle the COVID-19 pandemic crisis.
          </span>
        </p>
        <p>
          e-Estonia Briefing Centre is here to guide you through all the stages
          of digitalisation
          <br />
          and offer services that can be tailored to your needs, both in-person
          and online.
        </p>
        <button>OUR SERVICES</button>
      </div>
    </div>
  );
};

export default FrontPage;
