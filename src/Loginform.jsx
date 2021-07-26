import React, { useState } from "react";

const Loginform = () => {
  const [formvalue, setFormValue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setFormValue((prevalue) => {
      return {
        ...prevalue,//Spread Operator
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };
  return (
    <>
      <div style={{textAlign:'center'}}>
        <h1>
          Hello {formvalue.fname} {formvalue.lname}
        </h1>
        <p>{formvalue.email}</p>
        <p>{formvalue.mobile}</p>
        <form onSubmit={onSubmit}>
          <div>
            <input
              type="text"
              name="fname"
              placeholder="Enter your first name"
              onChange={InputEvent}
              value={formvalue.fname}
            />
          </div>
          <br />
          <div>
            <input
              type="text"
              name="lname"
              placeholder="Enter your last name"
              onChange={InputEvent}
              value={formvalue.lname}
            />
          </div>
          <br />
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={InputEvent}
              value={formvalue.email}
            />
          </div>
          <br />
          <div>
            <input
              type="number"
              name="mobile"
              placeholder="Enter your mobile no"
              onChange={InputEvent}
              value={formvalue.mobile}
            />
          </div>
          <br />
          <div>
            <button type="submit">Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loginform;
