import React from "react";
import { images } from "../../constants";
const SubHeading = (
  { title } // title is taken from the props here directly instead of using props and then getting title.
) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
