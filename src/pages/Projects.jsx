import React from "react";

/* Components imported */
import CustomCursor from "../components/CustomCursor/CustomCursor";
import Stars from "../components/Stars/Stars"
import PageChange from "../components/PageChange/PageChange";
/* Components imported */

export default function Projects() {

  return (
    <div>
        <CustomCursor />
        <Stars />
        <footer>
          <PageChange />
        </footer>
    </div>
  );
}