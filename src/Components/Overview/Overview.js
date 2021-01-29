import React from "react";
import "./Overview.scss";
import content from "../../Content/content.json";
import { useIntl } from "react-intl";

const Overview = (props) => {
  const intl = useIntl();
  const elements = props.elements;
  const overviewElements = content[elements].map((element) => {
    return (
      <div className="element" key={element.id}>
        {element.id} <br />
        {intl.formatMessage({ id: `${elements}.${element.id}.text` })}
      </div>
    );
  });
  return <div className="overview">{overviewElements}</div>;
};

export default Overview;
