import * as React from "react";

export function Badge({ children }) {
  return (
    <span className="px-2 py-1 text-sm font-semibold text-white bg-purple-600 rounded-full">
      {children}
    </span>
  );
}
