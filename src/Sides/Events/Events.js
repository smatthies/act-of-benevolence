import React from "react";
import { useIntl } from "react-intl";
import TextOverview from "../../Components/TextOverview/TextOverview";

const Events = () => {
  const intl = useIntl();
  const style = {
    margin: "40px",
  };
  return <TextOverview elements="events" />;
};

export default Events;
