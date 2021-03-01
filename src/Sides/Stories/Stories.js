import React from "react";
import { useIntl } from "react-intl";

const Stories = () => {
  const intl = useIntl();
  const style = {
    margin: "40px",
  };
  return <div style={style}>{intl.formatMessage({ id: "comingSoon" })}</div>;
};

export default Stories;