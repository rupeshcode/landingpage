import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component?",
      answer: "Components are the building blocks of a React application.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  console.log("openIndex", openIndex);

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3 onClick={() => toggleAnswer(index)} style={{ cursor: "pointer" }}>
            {faq.question}
          </h3>
          {openIndex === index && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};
export default FAQ;
