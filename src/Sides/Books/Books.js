import React from "react";
import { useIntl } from "react-intl";
import Overview from "../../Components/Overview/Overview";

const Books = () => {
  const intl = useIntl();
  return (
    <div>
      <h1>{intl.formatMessage({ id: "title" })}</h1>
      <Overview elements="books"></Overview>
    </div>
  );
};

export default Books;
