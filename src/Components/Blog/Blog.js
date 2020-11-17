import React from "react";
import blog1 from "../../Assets/blog1.jpg";
import blog2 from "../../Assets/blog2.jpg";
import blog3 from "../../Assets/blog3.jpg";
import blog4 from "../../Assets/blog4.jpg";
import "./Blog.scss";

const Blog = () => {
  return (
    <div className="blog">
      <div className="text-heading">
        <h3>blog</h3>
      </div>

      <div className="content">
        <div className="blogContent">
          <img src={blog1} alt="blogPic" />
          <p className="para1">
            e-Estonia Live: internet freedom in Estonia and around the world
          </p>
          <p className="para2">e-talks</p>
        </div>
        <div className="blogContent">
          <img src={blog2} alt="blogPic" />
          <p className="para1">
            Estonian experience to lead global e-governance cooperation
          </p>
          <p className="para2">e-governance</p>
        </div>
        <div className="blogContent">
          <img src={blog3} alt="blogPic" />
          <p className="para1">How to know your way in a digital forest?</p>
          <p className="para2">e-governance</p>
        </div>
        <div className="blogContent">
          <img src={blog4} alt="blogPic" />
          <p className="para1">
            ‘Good Karma’: Estonian Tech Firms Work to Bring e-Health Solutions
            to the Masses
          </p>
          <p className="para2">e-health</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
