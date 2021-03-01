import React from "react";
import { useIntl } from "react-intl";
import "./Partners.scss";
const Partners = () => {
  const intl = useIntl();
  return (
    <div className="partners">
      <p>{intl.formatMessage({ id: "partners.text" })}</p>
    </div>
  );
};

export default Partners;
