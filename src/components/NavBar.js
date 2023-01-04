import React from "react";
import { useNavigate } from "react-router-dom";
import { SENSOR_DATA_UI_ALL } from "../Constants/SensorDataLinks";
import { SENSOR_PLOT_UI_ALL } from "../Constants/SensorPlotLinks";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 m-0 shadow-md flex">
      <div className="h-16 px-12 flex items-center grow">
        <p
          className="text-lime-500 font-bold cursor-pointer"
          onClick={() => navigate("")}
        >
          Air Quality Management System
        </p>
      </div>
      <div className="flex items-center">
        <button
          className="px-10 text-lime-500 font-bold"
          onClick={() => navigate(SENSOR_DATA_UI_ALL)}
        >
          Sensor Data
        </button>
        <button
          className="px-10 text-lime-500 font-bold"
          onClick={() => navigate(SENSOR_PLOT_UI_ALL)}
        >
          Sensor Plot
        </button>
      </div>
    </div>
  );
};

export default NavBar;
