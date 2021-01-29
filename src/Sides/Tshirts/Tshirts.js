import React from "react";
import { useIntl } from "react-intl";
import Overview from "../../Components/Overview/Overview";

const Tshirts = () => {
  const intl = useIntl();
  return (
    <div>
      <h1>{intl.formatMessage({ id: "title" })}</h1>
      <Overview elements="tshirts"></Overview>
    </div>
  );
};

export default Tshirts;
