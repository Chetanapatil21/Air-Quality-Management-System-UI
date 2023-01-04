import React from "react";

const TableData = ({ value }) => {
  return (
    <td className="text-left border-r border-b px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">{value}</div>
    </td>
  );
};

export default TableData;
