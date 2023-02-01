import React, { useState } from "react";
import { Questions, Header, Options } from "../question";
import Legend from "./components/legendCard";
import OptionCard from "./components/optionCard";

import "./style.css";

const Main = () => {
  const [number, setNumber] = useState(1);
  const [bool, setBool] = useState(true);
  const [feedbackListt, setFeedbackListt] = useState(new Array(20).fill(-1));
  const feedback = (item) => {
    setFeedbackListt((initArr) => {
      initArr[number] = item;
      return initArr;
    });
    number < 20 && setTimeout(() => setNumber(number + 1), 500);
    setBool(!bool);
  };

  const sliderBar = () => {
    setNumber(number + 1);
  };
  const handlePrev = () => {
    number > 1 && setNumber(number - 1);
  };
  const handleNext = () => {
    number < 20 && feedbackListt[number] != -1 && setNumber(number + 1);
  };
  const handleQNo = () => {};
  const no = 2;

  return (
    <div>
      <div className="header">ARE YOU DISILLUSIONED ?</div>
      <div className="head">
        <div className="container">
          <Legend number={number} />
          <div className="number">{number}/20</div>
          <div className="questions">
            {Questions[parseInt((number - 1) / 5)][(number - 1) % 5]}
          </div>

          <div className="header4">
            {feedbackListt[number] != -1 && (
              <div
                style={{
                  height: 20,
                  width: `${feedbackListt[number] * 16.5 + 2}%`,
                  backgroundColor: "skyblue",
                  position: "absolute",
                  left: "16%",
                  bottom: "11.5%",
                  borderRadius: 8,
                }}
              ></div>
            )}

            <>
              {" "}
              {Options.map((item, indx) => (
                <OptionCard
                  Option={item}
                  indx={indx}
                  feedback={feedback}
                  feedbackListt={feedbackListt}
                  number={number}
                />
              ))}
            </>
          </div>
          <div className="last">
            <div onClick={handlePrev}> PREV</div>
            <div onClick={handleNext}> NEXT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
