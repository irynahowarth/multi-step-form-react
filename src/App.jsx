import React from "react";
import UserInfo from "./components/UserInfo";
import PlansOptions from "./components/PlansOptions";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";

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
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [period, setPeriod] = React.useState("month");
  const [planChoice, setPlanChoice] = React.useState(PLANS[0]);
  const [addOns, setAddOns] = React.useState([1, 3]);

  function handleChangeStep(newStep) {
    setStep(newStep);
  }
  function handleInputChange(e) {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

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
              <UserInfo
                handleInputChange={handleInputChange}
                userInfo={userInfo}
              />
            </section>
          )}
          {step === 2 && (
            <section className="section-wrapper">
              <PlansOptions
                PLANS={PLANS}
                planChoice={planChoice}
                setPlanChoice={setPlanChoice}
                period={period}
                setPeriod={setPeriod}
              />
            </section>
          )}
          {step === 3 && (
            <section className="section-wrapper">
              <AddOns
                ADD_ONS={ADD_ONS}
                addOns={addOns}
                setAddOns={setAddOns}
                period={period}
              />
            </section>
          )}
          {step === 4 && (
            <section className="section-wrapper">
              <Summary
                planChoice={planChoice}
                period={period}
                addOns={addOns}
                ADD_ONS={ADD_ONS}
              />
            </section>
          )}
          {step !== 5 && (
            <section className="section-actions">
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
            </section>
          )}
          {step === 5 && (
            <section className="section-wrapper section-final">
              <img src={"../src/assets/icon-thank-you.svg"} />
              <h1>Thank you!</h1>
              <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at{" "}
                <a href="mailto:support@loremgaming.com">
                  support@loremgaming.com
                </a>
              </p>
            </section>
          )}
        </main>
      </div>
    </form>
  );
}

export default App;
