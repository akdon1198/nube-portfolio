import "./intro.css";
import Me from "../../img/email.png";

const intro = () => {
  return (
    <>
 
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">AKASH GUPTA</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">MERN Stack Developer</div>
              <div className="i-title-item">FULL Stack Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I am a MERN Stack Developer and develop projects for customers of all sizes,
            having logic building Skills, modern websites, web services and
            online stores.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
    </>
  );
};

export default intro;
