import React, { useState } from "react";
import "./ToggleStyles.css";

const Toggle = () => {
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state:
  // 4. update state
  // const array = useState(false);
  // console.log(array); // [false, function]
  // console.log(array[0]);
  // console.log(array[1]);
  // const arr = [1, 2];
  // console.log(arr[0], arr[1]);
  // const [a, b] = [1, 2];
  // console.log(a, b);
  // initialize value: boolean(true, false), number(1,2,3,4...), string("hi", "hello"), undefined, null, [1,2,3], {title: "Frontend Developer"}
  const [on, setOn] = useState(false);
  // console.log(on, setOn);
  // [title, setTitle]
  // [isActive, setIsActive]
  // [active, unactive]
  // return <div className="toggle" onclick=toggle></div>;
  // console.log(on);
  const handleToggle = () => {
    // setOn(callback) -> setOn(prevState => !prevState)
    setOn((on) => !on);
  };
  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        // onClick={() => setOn(!on)}
        onClick={handleToggle}
      >
        {/* Toggle {on ? "On" : "Off"} */}
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* {on ? "on" : "off"} */}
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div>
    </div>
  );
};

export default Toggle;
