import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="camille.rampillon@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Adresse mail copiée !");
                  }}
                >
                  {" "}
                  camille.rampillon@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
              <a
                href="https://www.linkedin.com/in/camille-rampillon-b6054760"
                target="_blank"
                rel="noopenner noreferrer"
              >
                  <h4>LinkedIn</h4>
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/CamilleRampillon"
                target="_blank"
                rel="noopenner noreferrer"
              >
                  <h4>Github</h4>
                <i className="fab fa-github"></i>
              </a>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
