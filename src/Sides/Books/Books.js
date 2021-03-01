import React from "react";
import DetailsViewComponent from "../../Components/DetailsViewComponent/DetailsViewComponent";

const Books = () => {
  const downloadPDF = (
    <a
      href={process.env.PUBLIC_URL + "/Onanightout_FullBook.pdf"}
      target="blank"
    >
      Download PDF
    </a>
  );
  return (
    <div>
      <DetailsViewComponent
        elements="toRead"
        id="onANightOut"
        additionalContent={downloadPDF}
      ></DetailsViewComponent>
    </div>
  );
};

export default Books;
