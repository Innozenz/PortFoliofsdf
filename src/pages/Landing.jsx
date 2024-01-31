import React from "react";

/* Components imported */
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Rod from "../components/Rod/Rod"
import SplineImg from "../components/SplineImg/SplineImg"
import Stars from "../components/Stars/Stars"
import TextStyled from "../components/TextStyled/TextStyled"
import PageChange from "../components/PageChange/PageChange";
/* Components imported */

export default function Landing() {

  return (
    <div className="landingPlacement">
        <CustomCursor />
        <Stars />
        <main className="flexbox">
          <SplineImg />
          <Rod />
          <TextStyled />
        </main>
        <footer>
          <PageChange />
        </footer>
    </div>
  );
}