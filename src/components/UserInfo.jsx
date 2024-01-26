import React from "react";

export default function UserInfo({ userInfo, handleInputChange }) {
  const id = React.useId();
  return (
    <>
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <div>
        <label htmlFor={`name-${id}`}>Name</label>
        <input
          type="text"
          id={`name-${id}`}
          name="name"
          required
          value={userInfo.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor={`email-${id}`}>Email address</label>
        <input
          type="email"
          id={`email-${id}`}
          name="email"
          required
          value={userInfo.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor={`phone-${id}`}>Phone number</label>
        <input
          type="text"
          id={`phone-${id}`}
          name="phone"
          required
          value={userInfo.phone}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}
