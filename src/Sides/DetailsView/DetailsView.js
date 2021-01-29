import React from "react";
import "./DetailsView.scss";
import { useParams } from "react-router-dom";

function DetailsView() {
  let { elements, id } = useParams();
  return (
    <div>
      {elements} <br></br>
      {id}
    </div>
  );
}

export default DetailsView;
