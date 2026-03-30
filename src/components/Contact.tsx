import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/faisal-uddin-95083633b/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — faisal-uddin
              </a>
            </p>
            <p>
              <a
                href="mailto:uddinfaisal155@gmail.com"
                data-cursor="disable"
              >
                uddinfaisal155@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              HSC (Humanities), Laur Fatehpur Barrister Zakir Ahammad College,
              Cumilla Board — 2022–2024 · GPA 5.00
            </p>
            <p>
              SSC (Science), Nabinagar Government Pilot High School,
              Cumilla Board — 2020–2022 · GPA 5.00
            </p>
            <p>
              Responsive Web Design Certification, freeCodeCamp — 2022
            </p>
            <p>
              JavaScript Algorithms &amp; Data Structures, freeCodeCamp — 2023
            </p>
            <p>
              Shopify Partner &amp; Theme Development, Shopify Learn — 2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mdfaisaloffice1-lgtm"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/faisal-uddin-95083633b/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/faisal_uddin10"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.fiverr.com/fai_sal_uddin"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Fiverr <MdArrowOutward />
            </a>
            <a
              href="mailto:uddinfaisal155@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Faisal Uddin</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
