import React from "react";

const THSensorPlot = ({ value, location, border }) => {
  return (
    <th
      className={`text-${location} font-medium border-${border} text-gray-500 tracking-wider py-3 px-6`}
    >
      {value}
    </th>
  );
};

export default THSensorPlot;
