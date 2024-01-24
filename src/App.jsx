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
    price: [{ month: "$9/mo" }, { year: "$90/yr" }],
    offer: "2 months free",
  },
  {
    name: "advanced",
    label: "Advanced",
    price: [{ month: "$12/mo" }, { year: "$120/yr" }],
    offer: "2 months free",
  },
  {
    name: "pro",
    label: "Pro",
    price: [{ month: "$15/mo" }, { year: "$150/yr" }],
    offer: "2 months free",
  },
];

function App() {
  const id = React.useId();
  return (
    <form>
      <ol>
        {STEPS.map(({ value, label }) => (
          <li key={value}>
            <button type="button">
              <span>{value}</span>
              <div>
                <div>step {value}</div>
                <div>{label}</div>
              </div>
            </button>
          </li>
        ))}
      </ol>
      <section>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <label htmlFor={`name-${id}`}>Name</label>
        <input type="text" id={`name-${id}`} required />
        <label htmlFor={`email-${id}`}>Email address</label>
        <input type="email" id={`email-${id}`} required />
        <label htmlFor={`phone-${id}`}>Phone number</label>
        <input type="text" id={`phone-${id}`} required />
      </section>
      <section>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <ul>
          <li>
            <input type="radio" />
            <label htmlFor="">
              <h4>Arcade</h4>
              <span>$90/year</span>
              <span>2 months free</span>
            </label>
          </li>
          <li>
            <input type="radio" />
            <label htmlFor="">
              <h4>Advanced</h4>
              <span>$90/year</span>
              <span>2 months free</span>
            </label>
          </li>
          <li>
            <input type="radio" />
            <label htmlFor="">
              <h4>Pro</h4>
              <span>$90/year</span>
              <span>2 months free</span>
            </label>
          </li>
        </ul>
        <div>
          <span>Monthly</span>
          <button type="button">
            <span></span>
          </button>
          <span>Yearly</span>
        </div>
      </section>
      <section>
        <h1>Pick Add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div>
          <input type="checkbox" />
          <label>
            <div>
              <h4>Online service</h4>
              <p>Access to multiplayer games</p>
            </div>
            <div>+$1/mo</div>
          </label>
        </div>
        <div>
          <input type="checkbox" />
          <label>
            <div>
              <h4>Large storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div>+$2/mo</div>
          </label>
        </div>
        <div>
          <input type="checkbox" />
          <label>
            <div>
              <h4>Customizable Profile</h4>
              <p>Custom theme on your profile</p>
            </div>
            <div>+$2/mo</div>
          </label>
        </div>
      </section>
      <section>
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
      <section>
        <button type="button">Go Back</button>
        <button type="button">Next Step</button>
      </section>
      <section>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </section>
    </form>
  );
}

export default App;
