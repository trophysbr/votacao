import * as React from "react";

export function Progress({ value }) {
  return (
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div
        className="bg-purple-500 h-2 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
