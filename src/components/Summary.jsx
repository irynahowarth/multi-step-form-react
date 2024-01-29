import React from "react";

export default function Summary({ planChoice, period, addOns, ADD_ONS }) {
  const preffix = period === "month" ? "mo" : "yr";
  let sumAddOns = 0;
  return (
    <>
      <div>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="summary-wrapper">
        <div className="summary-plan">
          <div>
            <h4>{`${planChoice.label}${
              period === "month" ? " (Monthly)" : " (Yearly)"
            }`}</h4>
            <button type="button" className="btn" onClick={() => setStep(2)}>
              Change
            </button>
          </div>
          <span>{`$${planChoice.price[period]}/${preffix}`}</span>
        </div>

        {addOns.length > 0 &&
          addOns.map((add) => {
            const { title, price } = ADD_ONS.find((el) => el.ids === add);
            sumAddOns += price[period];

            return (
              <div key={add} className="summary-addon">
                <div>{title}</div>
                <span>{`+$${price[period]}/${preffix}`}</span>
              </div>
            );
          })}
      </div>
      <div className="summary-total">
        <div>{`Total (per ${period})`}</div>
        <span>{`$${sumAddOns + planChoice.price[period]}/${preffix}`}</span>
      </div>
    </>
  );
}
