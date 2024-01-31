import React from "react";
import UserInfo from "./components/UserInfo";
import PlansOptions from "./components/PlansOptions";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Actions from "./components/Actions";
import Sidebar from "./components/Sidebar";
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
          <Sidebar steps={data.STEPS} currentStep={step} />
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
              <Actions step={step} handleChangeStep={handleChangeStep} />
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
