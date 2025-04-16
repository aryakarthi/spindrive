import React from "react";
import clsx from "clsx";

export function Card({ className, children }) {
  return (
    <div className={clsx("bg-white rounded-xl shadow-md overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function CardContent({ className, children }) {
  return <div className={clsx("p-4", className)}>{children}</div>;
}
