import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        neque mi, placerat sed magna sit amet, luctus tempor ex. Phasellus id
        sodales dolor, vel sagittis eros. Ut eget sollicitudin ipsum, quis
        finibus leo. Vivamus eros augue, aliquam quis quam a, scelerisque
        faucibus tortor.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
