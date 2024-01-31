import React from "react";

export default function UserInfo({ userInfo, handleInputChange, errors }) {
  const id = React.useId();
  return (
    <>
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div className={`input-wrapper ${errors.name ? "invalid" : undefined}`}>
        <label htmlFor={`name-${id}`}>Name</label>
        <input
          type="text"
          id={`name-${id}`}
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
          placeholder="e.g. Stephen King"
        />
        <span className="msg-required">{errors.name}</span>
      </div>
      <div className={`input-wrapper ${errors.email ? "invalid" : undefined}`}>
        <label htmlFor={`email-${id}`}>Email address</label>
        <input
          type="text"
          id={`email-${id}`}
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
          placeholder="e.g. stephenking@lorem.com"
        />
        <span className="msg-required">{errors.email}</span>
      </div>
      <div className={`input-wrapper ${errors.phone ? "invalid" : undefined}`}>
        <label htmlFor={`phone-${id}`}>Phone number</label>
        <input
          type="text"
          id={`phone-${id}`}
          name="phone"
          value={userInfo.phone}
          onChange={handleInputChange}
          placeholder="e.g. +1 234 567 890"
        />
        <span className="msg-required">{errors.phone}</span>
      </div>
    </>
  );
}
