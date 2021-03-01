import React from "react";
import "./DetailsViewComponent.scss";
import content from "../../Content/content.json";
import { useIntl } from "react-intl";
import clsx from "clsx";

function DetailsViewComponent(props) {
  const { elements, id, additionalContent } = props;
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
        <h2>
          {intl.formatMessage({
            id: `${elements}.${id}.title`,
          })}
        </h2>
        <span>{elements}</span>
        <div className="horizontal-line"></div>
        <p>
          {intl.formatMessage({
            id: `${elements}.${id}.text`,
          })}
        </p>
        {additionalContent}
      </div>
    </div>
  );
}

export default DetailsViewComponent;
