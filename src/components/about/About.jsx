import "./about.css";
import Award from "../../img/award.png";
import Mern from "../../img/mern.png"
import { skills } from "../../data";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Mern}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a Student. And done my Bsc.Cs from Bhaskaracharya College Of Applied Science also 
          a passionate programmer and ready for any new technology to learn
        </p>
        <div className="skills">
          {
            skills.map((skill) => (
              <div className="skill">
                <img src={skill.img} alt="" className="a-award-img" />
                <p className="skillname">{skill.skillname}</p>
              </div>          
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;
