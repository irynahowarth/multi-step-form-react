import React from "react";

const STEPS = [
  { value: 1, label: "your info" },
  { value: 2, label: "select plan" },
  { value: 3, label: "add-ons" },
  { value: 4, label: "summary" },
];
const PLANS = [
  {
    name: "arcade",
    label: "Arcade",
    price: { month: 9, year: 90 },
    offer: "2 months free",
  },
  {
    name: "advanced",
    label: "Advanced",
    price: { month: 12, year: 120 },
    offer: "2 months free",
  },
  {
    name: "pro",
    label: "Pro",
    price: { month: 15, year: 150 },
    offer: "2 months free",
  },
];

const ADD_ONS = [
  {
    ids: 1,
    title: "Online service",
    description: "Access to multiplayer games",
    price: { month: 1, year: 10 },
  },
  {
    ids: 2,
    title: "Large storage",
    description: "Extra 1TB of cloud save",
    price: { month: 2, year: 20 },
  },
  {
    ids: 3,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: { month: 2, year: 20 },
  },
];

function App() {
  const id = React.useId();
  const [step, setStep] = React.useState(1);
  const [period, setPeriod] = React.useState("month");
  const [planChoice, setPlanChoice] = React.useState(PLANS[0]);
  const [addOns, setAddOns] = React.useState([1, 3]);

  function handleChangeStep(newStep) {
    setStep(newStep);
  }

  let sumAddOns = 0;
  const preffix = period === "month" ? "mo" : "yr";

  return (
    <form>
      <div className="form-wrapper">
        <header className="form-header">
          <ol>
            {STEPS.map(({ value, label }) => (
              <li key={value} className={value === step ? "active" : undefined}>
                <div className="marker-circle">{value}</div>
                <div>
                  <span>{`step ${value}`}</span>
                  <div>{label}</div>
                </div>
              </li>
            ))}
          </ol>
        </header>
        <main>
          {step === 1 && (
            <section className="section-wrapper">
              <div>
                <h1>Personal info</h1>
                <p>
                  Please provide your name, email address, and phone number.
                </p>
              </div>
              <div>
                <label htmlFor={`name-${id}`}>Name</label>
                <input type="text" id={`name-${id}`} required />
              </div>
              <div>
                <label htmlFor={`email-${id}`}>Email address</label>
                <input type="email" id={`email-${id}`} required />
              </div>
              <div>
                <label htmlFor={`phone-${id}`}>Phone number</label>
                <input type="text" id={`phone-${id}`} required />
              </div>
            </section>
          )}
          {step === 2 && (
            <section className="section-wrapper">
              <div>
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
              </div>
              <ul className="plans-selection">
                {PLANS.map((plan) => (
                  <li
                    key={plan.name}
                    className={
                      planChoice.name === plan.name
                        ? "selected-plan"
                        : undefined
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
                  onClick={() =>
                    setPeriod(period === "month" ? "year" : "month")
                  }
                >
                  <span
                    className="switch-ball"
                    style={{
                      transition: "transform 300ms",
                      transform: `translateX(${
                        period === "year" ? "140%" : "0%"
                      })`,
                    }}
                  />
                </button>
                <span className={period === "year" ? "selected" : undefined}>
                  Yearly
                </span>
              </div>
            </section>
          )}
          {step === 3 && (
            <section className="section-wrapper">
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
            </section>
          )}
          {step === 4 && (
            <section className="section-wrapper">
              <div>
                <h1>Finishing up</h1>
                <p>Double-check everything looks OK before confirming.</p>
              </div>
              <dl>
                <dt>
                  <span>
                    {planChoice.label}
                    {period === "month" ? " (Monthly)" : " (Yearly)"}
                  </span>
                  <button type="button" onClick={() => setStep(2)}>
                    Change
                  </button>
                </dt>
                <dd>{`$${planChoice.price[period]}/${preffix}`}</dd>

                {addOns.length > 0 &&
                  addOns.map((add) => {
                    const { title, price } = ADD_ONS.find(
                      (el) => el.ids === add
                    );
                    sumAddOns += price[period];

                    return (
                      <div key={add}>
                        <dt>{title}</dt>
                        <dd>{`$${price[period]}/${preffix}`}</dd>
                      </div>
                    );
                  })}

                <dt>Total(per month)</dt>
                <dd>{`$${sumAddOns + planChoice.price[period]}/${preffix}`}</dd>
              </dl>
            </section>
          )}
          {step !== 5 && (
            <section className="section-wrapper actions">
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
                className="btn primary"
                onClick={() => handleChangeStep(step + 1)}
              >
                Next Step
              </button>
            </section>
          )}
          {step === 5 && (
            <section className="section-wrapper">
              <h1>Thank you!</h1>
              <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com
              </p>
            </section>
          )}
        </main>
      </div>
    </form>
  );
}

export default App;
