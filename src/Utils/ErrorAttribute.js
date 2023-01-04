import React from "react";

const ErrorAttribute = ({ field, value }) => {
  return (
    <div
      id="toast-default"
      className="flex items-center p-4 w-full max-w-xs text-white bg-red-500 rounded-lg shadow my-2"
    >
      <div className="text-sm font-normal">
        {field.toUpperCase()} {value}
      </div>
    </div>
  );
};

export default ErrorAttribute;
