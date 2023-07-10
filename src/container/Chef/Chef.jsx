import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we Believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          </p>
        </div>
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Mollis
          Eleifend Rutrum. Sed Ut Leo Lorem. Etiam Vel Justo At Eros Congue
          Gravida Ut Nec Nulla. Phasellus Vel Ante Tristique, Consequat Orci Ac,
          Ultricies Sapien. Praesent Vitae Erat Dolor.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
