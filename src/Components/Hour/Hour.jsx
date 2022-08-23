import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeHour } from "../../Redux/Clock/ClockSlice";
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";

const Hour = () => {
  //REDUX
  const clockHour = useSelector((state) => state.clock.total);
  const dispatch = useDispatch();
  //HOOKS
  return (
    <div className="hominsec-container">
      <h1>{String(Math.floor(clockHour / (60 * 60))).length === 1 ? "0" + Math.floor(clockHour / (60 * 60)) : Math.floor(clockHour / (60 * 60))}</h1>
      <div className="hominsec-container__buttons">
        <button onClick={() => dispatch(changeHour(1))}>
          <MdArrowCircleUp className="arrows" size="3em" color="green" />
        </button>
        <button onClick={() => dispatch(changeHour(-1))}>
          <MdArrowCircleDown className="arrows" size="3em" color="red" />
        </button>
      </div>
    </div>
  );
};

export default Hour;
