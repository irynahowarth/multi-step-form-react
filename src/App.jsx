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
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);

  function handleChangeStep(newStep) {
    setStep(newStep);
  }
  function handleInputChange(e) {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleFormValidation() {
    let errorObj = {};

    //Name validation
    const newName = userInfo.name.replace(/\s/g, "");
    if (userInfo.name === "") {
      errorObj.name = "This field is required";
    } else if (newName.length < 3) {
      errorObj.name = "Should be at least 3 characters";
    }

    // Email validation
    const emailRegex = new RegExp("[^@s]+@[^@s]+.[^@s]+");
    if (userInfo.email === "") {
      errorObj.email = "This field is required";
    } else if (!emailRegex.test(userInfo.email)) {
      errorObj.email = "Please enter valid email";
    }
    // Phone validation
    const phoneRegex = new RegExp(`^[+]*[0-9]{10}$`);
    const phoneTest = userInfo.phone.replace(/\s/g, "");

    if (userInfo.phone === "") {
      errorObj.phone = "This field is required";
    } else if (!phoneRegex.test(phoneTest)) {
      if (phoneTest.replace(/\+/g, "").length !== 10) {
        errorObj.phone = "Phone should be 10 numbers";
      } else {
        errorObj.phone = "Please enter valid phone";
      }
    }
    setErrors(errorObj);
    setSubmitting(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFormValidation();
    setSubmitting(true);
  }

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      handleChangeStep(step + 1);
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit}>
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
                errors={errors}
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
                setStep={setStep}
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
