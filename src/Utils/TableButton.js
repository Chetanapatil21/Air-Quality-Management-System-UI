import React from "react";

const TableButton = ({ click, value }) => {
  return (
    <button
      className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
      onClick={click}
    >
      {value}
    </button>
  );
};

export default TableButton;
