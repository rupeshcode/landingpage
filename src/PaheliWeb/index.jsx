import React, { useEffect, useRef } from "react";
import "../PaheliWeb/paheli.css";
import { FaSatelliteDish, FaSearch } from "react-icons/fa";
import { FaCirclePlay, FaUsersLine } from "react-icons/fa6";
import { GiTwirlyFlower } from "react-icons/gi";
import { Button } from "react-bootstrap";

const PaheliWeb = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        console.log("Scroll position:", window.scrollY); // Debugging log
        if (window.scrollY > 100) {
          elementRef.current.classList.add("sticky");
        } else {
          elementRef.current.classList.remove("sticky");
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="top_header">
        <div className="row">
          <div className="col-md-4 mt-2">
            <p>
              Welcome to Paheli. Need Help?<a href="#">Get in Touch</a>
            </p>
          </div>
          <div className="col-md-8 mt-2">
            <ul className="right_end_content_top_header">
              <li>521684 Majadra Street, New York.</li>
              <li>
                <a href="#">support.paheli@admin.com</a>
              </li>
              <li>+91 9666638882</li>
            </ul>
          </div>
        </div>
      </div>

      {/* main header */}
      <div className="main_header" ref={elementRef}>
        <div className="left_main_header_logo">
          <a href="#">
            <img src="/paheliassets/asset 0.png" alt="logo" />
          </a>
        </div>
        <div>
          <ul className="right_end_content_main_header_middle_content">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Pages</li>
            <li>Blogs</li>
            <li>Content</li>
          </ul>
        </div>
        <div>
          <ul className="right_end_content_top_header">
            <li>
              <FaSearch />
            </li>
            <li className="quote_button">
              <a href="#">Get a Quote</a>
            </li>
          </ul>
        </div>
      </div>

      {/* content with image content */}
      <div className="wrap_content">
        <div className="row">
          <div className="col-6">
            <div className="left_content">
              <h1>
                Essential Policy <br />
                for Cyber
                <br /> security <br />
                Protection.
              </h1>
              <p>
                In today's increasingly digital world, cybersecurity has become
                paramount.
                <br /> With the rapid expansion of online activities,
              </p>
            </div>
            <div className="buttons_wrapper">
              <a className="request_button" href="#">
                Request A Demo
              </a>
              <div>
                <FaCirclePlay size={50} style={{ color: "GrayText" }} />
                <a className="anchor_content_button" href="#">
                  Watch Intro Video
                </a>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src="/paheliassets/asset 1.png" alt="rightimage" />
          </div>
        </div>
      </div>

      {/* what we do section */}
      <section>
        <div className="container mb-5">
          <div className="whatwedo_section_content">
            <span>What We Do</span>
            <h2>Our Extensive Network Security Services.</h2>
          </div>
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-6 col-lg-4">
              <div className="whatwedo_content">
                <div>
                  <GiTwirlyFlower size={50} style={{ color: "red" }} />
                </div>
                <div>
                  <a className="whatwedo_anchor" href="#">
                    Unleashing Ability through <br />
                    Network Management.
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="whatwedo_content">
                <div>
                  <GiTwirlyFlower size={50} style={{ color: "red" }} />
                </div>
                <div>
                  <a className="whatwedo_anchor" href="#">
                    Unleashing Ability through <br />
                    Network Management.
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="whatwedo_content">
                <div>
                  <GiTwirlyFlower size={50} style={{ color: "red" }} />
                </div>
                <div>
                  <a className="whatwedo_anchor" href="#">
                    Unleashing Ability through <br />
                    Network Management.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* aboutsection */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_image_wrapper">
                <div className="about_img1">
                  <img src="/paheliassets/asset 3.jpeg" alt="aboutlady" />
                </div>
                <div className="about_img2">
                  <img src="/paheliassets/asset 4.jpeg" alt="aboutwork" />
                </div>
              </div>
            </div>
            <div className="col-lg-6" style={{ color: "white" }}>
              <p>About Paheli</p>
              <h2>The Comprehensive Solution for Your Needs.</h2>
              <p>
                Organizations are now compelled to complete comprehensive
                cybersecurity strategies to safeguard their systems, networks,
                and data from the relentless onslaught of cyber threats,
                ensuring the protection of privacy...
              </p>
              <div className="right_content">
                <div>
                  <FaUsersLine size={50} />
                </div>
                <div>
                  <h3>Highly Professional Members</h3>
                  <p>
                    Organizations are now forced to implement comprehensive
                    cyber security strategies to protect their systems,
                  </p>
                </div>
              </div>
              <div className="right_content">
                <div>
                  <FaSatelliteDish size={50} />
                </div>
                <div>
                  <h3>Highly Professional Members</h3>
                  <p>
                    Organizations are now forced to implement comprehensive
                    cyber security strategies to protect their systems,
                  </p>
                </div>
              </div>
              <div>
                <Button className="w-50 mb-5">Know more</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaheliWeb;
