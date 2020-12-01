import React from "react";
import "../styles/Child.css";

function Selection({ applyColor }) {
  let [selectionStyle, updateSelectionStyle] = React.useState({
    background: ""
  });

  console.log("background in selection= " + selectionStyle.background);
  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

export default Selection;
