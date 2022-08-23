import React, { useEffect } from "react";
import Hour from "../../Components/Hour/Hour";
import Minute from "../../Components/Minute/Minute";
import Second from "../../Components/Second/Second";
import { useSelector, useDispatch } from "react-redux";
import { downCount } from "../../Redux/Clock/ClockSlice";
import BGIMG from "../../assets/images/bg.png";

const Clock = () => {
  const dispatch = useDispatch();
  const clockTotal = useSelector((state) => state.clock.total);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(downCount({ value: 1, timer }));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock_main">
      <div className="clock-container">
        <div className="clock-container__hour">
          <Hour />
        </div>
        <div>:</div>
        <div className="clock-container__minute">
          <Minute />
        </div>
        <div>:</div>

        <div className="clock-container__second">
          <Second />
        </div>
      </div>
      <img src={BGIMG} />
      <div className="bg"></div>

    </div>
  );
};

export default Clock;
