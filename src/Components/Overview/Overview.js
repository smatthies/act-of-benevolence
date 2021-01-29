import React from "react";
import "./Overview.scss";
import content from "../../Content/content.json";
import { useIntl } from "react-intl";
import { Link } from "react-router-dom";

const Overview = (props) => {
  const intl = useIntl();
  const elements = props.elements;
  const overviewElements = content[elements].map((element) => {
    return (
      <Link to={`/${elements}/${element.id}`}>
        <div className="element" key={element.id}>
          {intl.formatMessage({ id: `${elements}.${element.id}.text` })}
        </div>
      </Link>
    );
  });
  return <div className="overview">{overviewElements}</div>;
};

export default Overview;
