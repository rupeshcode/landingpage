import React, { useState } from "react";

const Concepts = () => {
  const [step, setStep] = useState(1);
  const [formDetails, setFromDetails] = useState({ name: "", email: "" });

  const handleNext = () => {
    setStep((previous) => previous + 1);
  };

  const handlePrevious = () => {
    setStep((previous) => previous - 1);
  };

  const handleChange = (e) => {
    setFromDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      {step == 1 && (
        <>
          <input
            type="text"
            name="name"
            value={formDetails.name}
            onChange={handleChange}
          />
          <button onClick={handleNext}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <input
            type="email"
            name="email"
            value={formDetails.email}
            onChange={handleChange}
          />
          <button onClick={handlePrevious}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </>
      )}
      {step === 3 && (
        <div>
          <h2>Review</h2>
          <p>Name: {formDetails.name}</p>
          <p>Email: {formDetails.email}</p>
          <button onClick={handlePrevious}>Back</button>
          <button onClick={() => alert("Form submitted!")}>Submit</button>
        </div>
      )}
    </>
  );
};

export default Concepts;
