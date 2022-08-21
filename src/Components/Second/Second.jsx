import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSecond } from "../../Redux/Clock/ClockSlice";
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";

const Second = () => {
  //REDUX
  const clockSecond = useSelector((state) => state.clock.total);
  const dispatch = useDispatch();
  //HOOKS
  //const [hour, setHout] = useState(10);
  return (
    <div className="hominsec-container">
      <h1>{String(clockSecond % 60).length === 1 ? "0" + (clockSecond % 60) : clockSecond % 60}</h1>
      <div className="hominsec-container__buttons">
        <button onClick={() => dispatch(changeSecond(1))}>
          <MdArrowCircleUp size="2em" color="green" />
        </button>
        <button onClick={() => dispatch(changeSecond(-1))}>
          <MdArrowCircleDown size="2em" color="red" />
        </button>
      </div>
    </div>
  );
};

export default Second;
