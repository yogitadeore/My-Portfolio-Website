import './SkillsStyles.css';
import React from 'react'

const Skills = () => {
  return (
    <div><section className="skills" id="skills" data-aos="fade-left">
    <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
            <div className="column right">
                <div className="bars">
                    <div className="info">
                        <span>C/C++</span>
                        <span>70%</span>
                    </div>
                    <div className="line html"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Java</span>
                        <span>70%</span>
                    </div>
                    <div className="line css"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Python</span>
                        <span>50%</span>
                    </div>
                    <div className="line js"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>React</span>
                        <span>80%</span>
                    </div>
                    <div className="line php"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>Node.js</span>
                        <span>70%</span>
                    </div>
                    <div className="line mysql"></div>
                </div>
            </div>
            <div className="column right">
                <div className="bars">
                    <div className="info">
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <div className="line html"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>CSS</span>
                        <span>80%</span>
                    </div>
                    <div className="line css"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>JavaScript</span>
                        <span>80%</span>
                    </div>
                    <div className="line js"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>PHP</span>
                        <span>50%</span>
                    </div>
                    <div className="line php"></div>
                </div>
                <div className="bars">
                    <div className="info">
                        <span>MySQL</span>
                        <span>70%</span>
                    </div>
                    <div className="line mysql"></div>
                </div>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Skills
