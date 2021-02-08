import React, { useEffect, useState } from "react";
import "./Overview.scss";
import content from "../../Content/content.json";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

function Overview(props) {
  const { elements } = props;

  const [overviewElements, setOverviewElements] = useState([]);

  const intl = useIntl();

  useEffect(() => {
    const loadedOverviewElements = [];
    const imgStyles = {
      height: "inherit",
    };
    const images = require.context("../../assets/content", true);
    content[elements].forEach((element) => {
      const mainImage = images(`./${element.mainImage}`);

      loadedOverviewElements.push(
        <Link to={`/${elements}/${element.id}`} key={element.id}>
          <div className="element" key={element.id}>
            <img src={mainImage.default} alt={mainImage} style={imgStyles} />
          </div>
        </Link>
      );
      setOverviewElements(loadedOverviewElements.slice());
    });
  }, [elements, intl]);

  return (
    <div className="overview">
      {overviewElements.map((number) => (
        <li className="list">{number}</li>
      ))}
    </div>
  );
}

export default Overview;
