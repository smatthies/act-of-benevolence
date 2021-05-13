import React from "react";
import { useIntl } from "react-intl";
import "./Videos.scss";

const Videos = () => {
  const intl = useIntl();

  return (
    <div className="videos-grid">
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/EuvKdgXZTRQ?controls=0"
      ></iframe>
    </div>
  );
};

export default Videos;
