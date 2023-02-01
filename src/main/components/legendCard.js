import React from "react";
import { Header } from "../../question";

const Legend = ({ number }) => {
  return (
    <div className="word">
      {Header.map((item, idx) => (
        <div className="header2">
          <div className="barr">
            {idx < parseInt(number / 5) ? (
              <div
                className="barr"
                style={{ backgroundColor: "skyblue" }}
              ></div>
            ) : idx == parseInt(number / 5) ? (
              <div
                className="barr"
                style={{
                  backgroundColor: "skyblue",
                  width: `${(number % 5) * 20}%`,
                }}
              ></div>
            ) : null}
          </div>

          <div className="word">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default Legend;
