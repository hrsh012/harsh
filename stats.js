import React from "react";

const Stats = ({ toDoList }) => {
  let countList = toDoList.length;
  return (
    <div className="stats">
      <p className="notify">
        {countList === 0
          ? "You Got Everything! Ready To go"
          : `You have ${countList} items on Your list.`}
      </p>
    </div>
  );
};

export default Stats;
