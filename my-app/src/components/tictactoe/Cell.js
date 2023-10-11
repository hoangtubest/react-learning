import React from "react";

const Cell = (props) => {
  // object destructuring
  // const student = {
  //   name: "hoanglc",
  //   age: 33,
  // };
  // const name = student.name;
  // const age = student.age;
  // const { name, age } = student;
  // console.log(name, age);
  // const { value, onClick } = props;
  // console.log(value, onClick);
  return (
    <div className="game-cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Cell;
