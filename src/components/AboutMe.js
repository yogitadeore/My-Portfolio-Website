import './AboutMeStyles.css';
import img1 from "../assets/imag1.avif"

import React from 'react'
import TypingEffect from './TypingEffect';

const AboutMe = () => {
  return (
    <div><section className="about" id="about"data-aos="fade-up">
    <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
            <div className="column left">
                <img className="selfi" src={img1} alt=""/>
            </div>
            <div className="column right">
                <div className="text">I'm Yogita and I'm a <span><TypingEffect/></span></div>
                <p>I have completed my Bachelor's (BCA) and Master’s (MCA) degrees in Computer Applications, with my MCA recently completed in 2024. Throughout my academic journey, I’ve developed a strong foundation in programming, web technologies, and software development practices. Currently, I’m actively seeking opportunities as a Web Developer where I can contribute in both front-end and back-end development. I’m passionate about building clean, responsive, and user-friendly web applications, and I’m excited to grow in a dynamic team where I can continuously learn and apply my skills.</p>


            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default AboutMe;
