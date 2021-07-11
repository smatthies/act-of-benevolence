import React from "react";
import { useIntl } from "react-intl";
import "./Partners.scss";
import clsx from "clsx";
import Carousel from "../../Components/Carousel";
import test1 from "../../assets/stories.jpg";
import test2 from "../../assets/tshirts.jpg";

const Partners = () => {
  const intl = useIntl();
  const imgs = [test1, test2];
  return (
    <div className={clsx("partners", intl.locale === "ar" && "alignTextRight")}>
      <div className="carousel">
        <Carousel images={imgs} />
      </div>
      <p>{intl.formatMessage({ id: "partners.text" })}</p>
    </div>
  );
};

export default Partners;
