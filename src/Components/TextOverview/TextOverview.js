import React from "react";
import "./TextOverview.scss";
import content from "../../Content/content.json";
import { useIntl } from "react-intl";
import clsx from "clsx";

function TextOverview(props) {
  const { elements } = props;
  const intl = useIntl();
  let overviewElements = [];
  content[elements].forEach((element) => {
    console.log(element.date);
    console.log(elements);
    overviewElements.push(
      <div className={clsx("info", intl.locale === "ar" && "alignTextRight")}>
        <span>{element.date}</span>
        <h2>{intl.formatMessage({ id: `${elements}.${element.id}.title` })}</h2>
        <span>{elements}</span>
        <div className="horizontal-line"></div>
        <p>{intl.formatMessage({ id: `${elements}.${element.id}.text` })}</p>
      </div>
    );
  });
  console.log(overviewElements);
  return <div className="text-overview">{overviewElements}</div>;
}

export default TextOverview;
