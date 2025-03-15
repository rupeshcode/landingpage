import React, { useEffect, useRef, useState } from "react";
import "../PaheliWeb/paheli.css";
import { FaSatelliteDish, FaSearch } from "react-icons/fa";
import { FaCirclePlay, FaUsersLine } from "react-icons/fa6";
import { GiTwirlyFlower } from "react-icons/gi";
import { Button } from "react-bootstrap";
import FAQ from "../Faq";
import { FiPlus } from "react-icons/fi";
import CountUp, { useCountUp } from "react-countup";

const images = [
  {
    id: 1,
    src: "/paheliassets/asset 5.jpeg",
    title: "Data Loss Prevention (DLP)",
    description:
      "This includes implementing strategies and tools to prevent sensitive data...",
  },
  {
    id: 2,
    src: "/paheliassets/asset 6.jpeg",
    title: "Cloud Security",
    description:
      "Ensuring security in cloud environments through encryption and access controls...",
  },
  {
    id: 3,
    src: "/paheliassets/asset 7.jpeg",
    title: "Network Security",
    description:
      "Protecting networks from unauthorized access and cyber threats...",
  },
  {
    id: 4,
    src: "/paheliassets/asset 8.jpeg",
    title: "Application Security",
    description:
      "Implementing security measures in application development to mitigate vulnerabilities...",
  },
  {
    id: 5,
    src: "/paheliassets/asset 9.jpeg",
    title: "Endpoint Security",
    description:
      "Securing devices like laptops and mobile phones from potential threats...",
  },
];

const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is a component?",
    answer: "Components are the building blocks of a React application.",
  },
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    question: "What is a component?",
    answer: "Components are the building blocks of a React application.",
  },
];

const PaheliWeb = () => {
  const [activeId, setActiveId] = useState(images[images.length - 1].id);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [openIndex, setOpenIndex] = useState(null);

  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
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

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // useCountUp({
  //   ref: "counter",
  //   end: 1234567,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 1000,
  // });
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
                <div className="users_div">
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
                <div className="users_div">
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
      {/* our services section */}
      <div>
        <div className="container">
          <div className="sevices_heading">
            <p>our services</p>
            <h2>From Your Cyber Security Services.</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6 services_content">
              <div>
                <div>
                  <img src="/paheliassets/asset 25.svg" alt="service" />
                </div>
                <h3>Endpoint Security</h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 services_content">
              <div>
                <div>
                  <img src="/paheliassets/asset 26.svg" alt="service" />
                </div>
                <h3>Endpoint Security</h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-sm-12 col-md-6 services_content">
              <div>
                <div>
                  <img src="/paheliassets/asset 27.svg" alt="service" />
                </div>
                <h3>Endpoint Security</h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6 services_content">
              <div>
                <div>
                  <img src="/paheliassets/asset 28.svg" alt="service" />
                </div>
                <h3>Endpoint Security</h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6 services_content">
              <div>
                <div>
                  <img src="/paheliassets/asset 29.svg" alt="service" />
                </div>
                <h3>Endpoint Security</h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-sm-12 col-md-6 services_content">
              <div>
                <div>
                  <img src="/paheliassets/asset 30.svg" alt="service" />
                </div>
                <h3>Endpoint Security</h3>
                <p>
                  This service focuses on securing end-user devices like
                  laptops, desktops, and mobile devices from cybersecurity
                  threats.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our products section */}
      <div className="gallery-container">
        <div className="container">
          <p>our projects</p>
          <div className="projects-header">
            <h2>
              Feat to Celebrate: Showcasing Some <br /> of Our Proud Projects.
            </h2>
            <a className="project-button" href="#">
              view all projects
            </a>
          </div>
          <ul className="image-projects">
            {images.map((image) => (
              <li
                key={image.id}
                className={`li-images ${
                  isLargeScreen
                    ? activeId === image.id
                      ? "wide"
                      : "normal"
                    : "default"
                }`}
                onMouseEnter={() => isLargeScreen && setActiveId(image.id)}
                // onMouseLeave={() =>
                //   isLargeScreen && setActiveId(images[images.length - 1].id)
                // }
              >
                <span>
                  <img
                    src={image.src}
                    alt="project_images"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </span>
                <div
                  className="contain"
                  style={{
                    opacity:
                      isLargeScreen && activeId === image.id
                        ? 1
                        : isLargeScreen
                        ? 0
                        : 1,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <div className="details">
                    <h3>
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          transition: "color 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "blue")}
                        onMouseLeave={(e) => (e.target.style.color = "white")}
                      >
                        {image.title}
                      </a>
                    </h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Faq section */}
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>Faqs</p>
              <h2>
                A Dedication to Supporting All
                <br /> Aspects of Your Life.
              </h2>
              <p>Can’t find what you are looking for?</p>
              <h3 style={{ color: "white" }}>
                Let's Talk: Engage with Us in a Conversation Tailored Just for
                You.
              </h3>
              <div className="faq_left">
                <div className="faq_emoji">
                  <img src="/paheliassets/asset 31.svg" alt="questionmark" />
                </div>
                <div>
                  <img src="/paheliassets/asset 32.svg" alt="arrow" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                {faqs.map((faq, index) => (
                  <>
                    <div key={index} className="faq_wrapper">
                      <div className="heading_div">
                        <h6
                          onClick={() => toggleAnswer(index)}
                          style={{ cursor: "pointer", color: "white" }}
                        >
                          {faq.question}
                        </h6>
                      </div>
                      <div>
                        <FiPlus
                          onClick={() => toggleAnswer(index)}
                          style={{ cursor: "pointer", color: "white" }}
                        />
                      </div>
                    </div>
                    {openIndex === index && <span>{faq.answer}</span>}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* count section */}
      <div className="content" />
      <CountUp end={100} enableScrollSpy />

      <CountUp end={1050} enableScrollSpy />
      <CountUp end={1060} enableScrollSpy />
      <CountUp end={200} enableScrollSpy />

      {/* <span id="counter" /> */}
    </>
  );
};

export default PaheliWeb;
