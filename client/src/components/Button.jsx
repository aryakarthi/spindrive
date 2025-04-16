import React from "react";
import clsx from "clsx";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={clsx(
        "bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm transition",
        className
      )}
      style={{ backgroundColor: "#0092b8" }}
      {...props}
    >
      {children}
    </button>
  );
}
