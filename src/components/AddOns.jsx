import React from "react";

export default function AddOns({ ADD_ONS, addOns, setAddOns, period }) {
  const id = React.useId();

  const preffix = period === "month" ? "mo" : "yr";
  return (
    <>
      <div>
        <h1>Pick Add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="add-ons-wrapper">
        {ADD_ONS.map(({ ids, title, description, price }) => {
          const addonsId = `${title}-${id}`;

          return (
            <div key={addonsId}>
              <label
                htmlFor={addonsId}
                className={addOns.includes(ids) ? "checked" : undefined}
              >
                <input
                  type="checkbox"
                  id={addonsId}
                  checked={addOns.includes(ids)}
                  onChange={(e) => {
                    const newAddOns = e.target.checked
                      ? [...addOns, ids]
                      : addOns.filter((el) => el != ids);
                    setAddOns(newAddOns);
                  }}
                />
                <div>
                  <h4>{title}</h4>
                  <span>{description}</span>
                </div>
                <div>{`$${price[period]}/${preffix}`}</div>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
