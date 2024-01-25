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
    price: { month: "$9/mo", year: "$90/yr" },
    offer: "2 months free",
  },
  {
    name: "advanced",
    label: "Advanced",
    price: { month: "$12/mo", year: "$120/yr" },
    offer: "2 months free",
  },
  {
    name: "pro",
    label: "Pro",
    price: { month: "$15/mo", year: "$150/yr" },
    offer: "2 months free",
  },
];

const ADD_ONS = [
  {
    ids: 1,
    title: "Online service",
    description: "Access to multiplayer games",
    price: { month: "$1/mo", year: "$10/yr" },
  },
  {
    ids: 2,
    title: "Large storage",
    description: "Extra 1TB of cloud save",
    price: { month: "$2/mo", year: "$20/yr" },
  },
  {
    ids: 3,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    price: { month: "$2/mo", year: "$20/yr" },
  },
];

function App() {
  const id = React.useId();
  const [step, setStep] = React.useState(1);
  const [period, setPeriod] = React.useState("month");
  const [planChoice, setPlanChoice] = React.useState(PLANS[0].name);
  const [addOns, setAddOns] = React.useState([1, 3]);

  function handleChangeStep(newStep) {
    setStep(newStep);
  }

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
                {PLANS.map(({ name, label, price, offer }) => (
                  <li
                    key={name}
                    className={
                      planChoice === name ? "selected-plan" : undefined
                    }
                    onClick={() => setPlanChoice(name)}
                    style={{
                      backgroundImage: `url(../src/assets/icon-${name}.svg)`,
                    }}
                  >
                    <h4>{label}</h4>
                    <span className="plan-price">{price[period]}</span>
                    {period === "year" && <span>{offer}</span>}
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
                        <div>{price[period]}</div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
          {step === 4 && (
            <section className="section-wrapper">
              <h1>Finishing up</h1>
              <p>Double-check everything looks OK before confirming.</p>
              <dl>
                <dt>
                  <span>Arcade(Monthly)</span>
                  <a type="button">Change</a>
                </dt>
                <dd>$9/mo</dd>
                <dt>Online service</dt>
                <dd>+$1/mo</dd>
                <dt>Larger storage</dt>
                <dd>+$2/mo</dd>
                <dt>Total(per month)</dt>
                <dd>+$12/mo</dd>
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
