import React from "react";

export default function UserInfo({ userInfo, handleInputChange }) {
  const id = React.useId();
  return (
    <>
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className="input-wrapper invalid">
        <label htmlFor={`name-${id}`}>Name</label>
        <input
          type="text"
          id={`name-${id}`}
          name="name"
          required
          value={userInfo.name}
          onChange={handleInputChange}
          placeholder="e.g. Stephen King"
        />
        <span className="msg-required">This field is required</span>
      </div>
      <div className="input-wrapper">
        <label htmlFor={`email-${id}`}>Email address</label>
        <input
          type="email"
          id={`email-${id}`}
          name="email"
          required
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="e.g. stephenking@lorem.com"
        />
        <span className="msg-required">This field is required</span>
      </div>
      <div className="input-wrapper">
        <label htmlFor={`phone-${id}`}>Phone number</label>
        <input
          type="text"
          id={`phone-${id}`}
          name="phone"
          required
          value={userInfo.phone}
          onChange={handleInputChange}
          placeholder="e.g. +1 234 567 890"
        />
        <span className="msg-required">This field is required</span>
      </div>
    </>
  );
}
