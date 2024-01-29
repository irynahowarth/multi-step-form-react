import React from "react";
import UserInfo from "./components/UserInfo";
import PlansOptions from "./components/PlansOptions";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import data from "../src/data";

function App() {
  const [step, setStep] = React.useState(1);
  const [userInfo, setUserInfo] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [period, setPeriod] = React.useState("month");
  const [planChoice, setPlanChoice] = React.useState(data.PLANS[0]);
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

  return (
    <form>
      <div className="form-wrapper">
        <header className="form-header">
          <ol>
            {data.STEPS.map(({ value, label }) => (
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
                PLANS={data.PLANS}
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
                ADD_ONS={data.ADD_ONS}
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
                ADD_ONS={data.ADD_ONS}
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
