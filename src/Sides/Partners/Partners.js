import React from "react";
import { useIntl } from "react-intl";
import "./Partners.scss";
import clsx from "clsx";

const Partners = () => {
  const intl = useIntl();

  return (
    <div className={clsx("partners", intl.locale === "ar" && "alignTextRight")}>
      <p>{intl.formatMessage({ id: "partners.text" })}</p>
    </div>
  );
};

export default Partners;
