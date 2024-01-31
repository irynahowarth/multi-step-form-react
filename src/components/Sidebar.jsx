import React from "react";

export default function Sidebar({ steps, currentStep }) {
  return (
    <ol>
      {steps.map(({ value, label }) => (
        <li
          key={value}
          className={value === currentStep ? "active" : undefined}
        >
          <div className="marker-circle">{value}</div>
          <div>
            <span>{`step ${value}`}</span>
            <div>{label}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}
