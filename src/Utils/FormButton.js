import React from "react";

const FormButton = ({ value, click, color }) => {
  color = Number(color);
  if (color === 1) {
    return (
      <div className="pl-8 py-4">
        <button
          onClick={click}
          className={`bg-lime-500 px-8 py-2 rounded font-medium italic text-white hover:bg-lime-600`}
        >
          {value}
        </button>
      </div>
    );
  } else if (color === 2) {
    return (
      <div className="pl-8 py-4">
        <button
          onClick={click}
          className={`bg-red-500 px-8 py-2 rounded font-medium italic text-white hover:bg-red-600`}
        >
          {value}
        </button>
      </div>
    );
  } else {
    return (
      <div className="pl-8 py-4">
        <button
          onClick={click}
          className={`bg-gray-700 px-8 py-2 rounded font-medium italic text-white hover:bg-gray-900`}
        >
          {value}
        </button>
      </div>
    );
  }
};

export default FormButton;
