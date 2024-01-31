import React from "react";

export default function Actions({ step, handleChangeStep }) {
  return (
    <>
      {step !== 1 && (
        <button
          type="button"
          className="btn"
          onClick={() => handleChangeStep(step - 1)}
        >
          Go Back
        </button>
      )}
      <button
        type="button"
        className={step !== 4 ? "btn primary" : "btn primary confirm"}
        onClick={() => handleChangeStep(step + 1)}
      >
        {step !== 4 ? "Next Step" : "Confirm"}
      </button>
    </>
  );
}
