import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import coding from "../../img/coding.png"
import linkedin from "../../img/linkedin.png"
import github from "../../img/GitHub-logo.png"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              8570906112
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              akdon9811@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Haryana, India
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/akash-gupta-bbb73b1b4/">
                <i class="fonticon fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/akdon1198">
                <i class="fonticon fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <img src={coding}></img>
            <p>I am a <b>Web Developer, Programmer</b> and have enough knowledge to make any type of projects related to Websites
              Get in touch. Always available for <b>freelancing</b> if the project is related to my knowledge.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
