import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMinute } from "../../Redux/Clock/ClockSlice";
import { MdArrowCircleUp, MdArrowCircleDown } from "react-icons/md";


const Minute = () => {
  //REDUX
  const clockMinute = useSelector((state) => state.clock.total);
  const dispatch = useDispatch();
  //HOOKS
  //const [hour, setHout] = useState(10);
  return (
    <div className="hominsec-container">
      <h1>
        {String(Math.floor((clockMinute / 60) % 60)).length === 1 ? "0" + Math.floor((clockMinute / 60) % 60) : Math.floor((clockMinute / 60) % 60)}
      </h1>
      <div className="hominsec-container__buttons">
        <button onClick={() => dispatch(changeMinute(1))}>
          <MdArrowCircleUp size="2em" color="green" />
        </button>
        <button onClick={() => dispatch(changeMinute(-1))}>
          <MdArrowCircleDown size="2em" color="red" />
        </button>
      </div>
    </div>
  );
};

export default Minute;
