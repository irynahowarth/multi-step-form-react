import React from "react";

export default function PlansOptions({
  PLANS,
  planChoice,
  setPlanChoice,
  period,
  setPeriod,
}) {
  const preffix = period === "month" ? "mo" : "yr";
  return (
    <>
      <div>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <ul className="plans-selection">
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className={
              planChoice.name === plan.name ? "selected-plan" : undefined
            }
            onClick={() => setPlanChoice(plan)}
            style={{
              backgroundImage: `url(../src/assets/icon-${plan.name}.svg)`,
            }}
          >
            <h4>{plan.label}</h4>
            <span className="plan-price">{`$${plan.price[period]}/${preffix}`}</span>
            {period === "year" && <span>{plan.offer}</span>}
          </li>
        ))}
      </ul>
      <div className="plan-period">
        <span className={period === "month" ? "selected" : undefined}>
          Monthly
        </span>
        <button
          type="button"
          className="switch"
          onClick={() => setPeriod(period === "month" ? "year" : "month")}
        >
          <span
            className="switch-ball"
            style={{
              transition: "transform 300ms",
              transform: `translateX(${period === "year" ? "140%" : "0%"})`,
            }}
          />
        </button>
        <span className={period === "year" ? "selected" : undefined}>
          Yearly
        </span>
      </div>
    </>
  );
}
