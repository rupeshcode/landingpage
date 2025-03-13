import React from "react";
import "../responsivePage/responsive.css";
const ResponsivePage = () => {
  return (
    <>
      <div className="top_header">
        <div className="container">
          <div className="header_text">
            📢Figma prototype testing just got a whole lot better! Readmore
          </div>
        </div>
      </div>
      <div className="main_header">
        <div className="image_div">
          <img src="/assets/asset 0.png" alt="utility" />
        </div>
        <div className="container ul_div">
          <ul className="ul_class">
            <li href="#" className="li_class">
              Product
            </li>
            <li href="#" className="li_class">
              Customers
            </li>
            <li href="#" className="li_class">
              Pricing
            </li>
            <li href="#" className="li_class">
              Sign in
            </li>
            <li href="#" className="li_class">
              Sign up
            </li>
          </ul>
        </div>
      </div>
      <div className="first_section">
        <div className="left_section">
          <h1>
            Design <br />
            Confidently
          </h1>
          <p className="wrap_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tenetur
            dolore adipisci, modi ut iusto ipsum itaque quam, nesciunt sapiente
            recusandae autem. Ad, labore. Debitis, asperiores. Accusamus
            necessitatibus voluptatibus quibusdam.
          </p>
          <div className="button_div">
            <button className="button_wrapper">submit</button>
          </div>
        </div>
        <div className="image_section">
          <img src="/assets/asset 1.jpeg" alt="right_image" />
        </div>
      </div>

      <div className="company_wrapper">
        <img src="/assets/asset 2.png" alt="img" />
        <img src="/assets/asset 3.png" alt="img" />
        <img src="/assets/asset 4.png" alt="img" />
        <img src="/assets/asset 5.png" alt="img" />
        <img src="/assets/asset 6.png" alt="img" />
        <img src="/assets/asset 7.svg" alt="img" />
      </div>
      <div className="features_section">
        <div className="features_heading">
          <h1>Your user research Swiss Army knife</h1>
        </div>
        <div className="feature_button_div">
          <button className="features_button">All Features</button>
        </div>

        <div>
          <div>
            <img src="/assets/asset 2.svg" alt="rei" />
            <h2>Card </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsivePage;
