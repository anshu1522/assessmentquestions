import React from "react";

const OptionCard = ({ Option, indx, feedback, feedbackListt, number }) => {
  return (
    <div
      className="optionncard"
      style={{ width: indx == 0 || indx == 4 ? "12.5%" : "25%", height: 40 }}
      onClick={() => feedback(indx)}
    >
      <div
        className="option"
        style={{
          width: "100%",
          justifyContent:
            indx == 0 ? "flex-start" : indx == 4 ? "flex-end" : "center",
        }}
      >
        <div className="circle"></div>
      </div>
      <div
        style={{
          width: "90%",
          fontSize: 20,
          marginLeft: indx == 0 ? -40 : indx == 4 ? 60 : 0,
        }}
      >
        {Option}
      </div>
    </div>
  );
};

export default OptionCard;
