import React from "react";
import "./DetailsView.scss";
import { useParams } from "react-router-dom";
import content from "../../Content/content.json";
import { useIntl } from "react-intl";
import clsx from "clsx";

function DetailsView() {
  let { elements, id } = useParams();
  const intl = useIntl();
  const images = require.context("../../assets/content", true);
  const contentElements = content[elements];
  const element = contentElements.find((element) => element.id === id);
  const mainImage = images(`./${element.mainImage}`);
  return (
    <div className="details-view">
      <div className="carousel">
        <img src={mainImage.default} alt={mainImage} />
      </div>
      <div className={clsx("info", intl.locale === "ar" && "alignTextRight")}>
        <span>{element.date}</span>
        <h2>{intl.formatMessage({ id: `${elements}.${id}.title` })}</h2>
        <span>{elements}</span>
        <div className="horizontal-line"></div>
        <p>{intl.formatMessage({ id: `${elements}.${id}.text` })}</p>
      </div>
    </div>
  );
}

export default DetailsView;
