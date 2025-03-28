

import "./ExperienceStyles.css";
import React from 'react';

const Experience = () => {
  return (
    <div>
      <section className="ftco-section ftco-no-pb" id="resume-section" data-aos="fade-right">
        <div className="container">
          <div className="row">
            <h1 className="big-4">Experience</h1>
            <div className="underline"></div>
          </div>

          <div className="experience-cards">
            <div className="resume-wrap">
              <span className="date">2025-Present</span>
              <h2>Web Developer Intern</h2>
              <span className="position">CodeSoft</span>
              <p className="mt-4">
                Codesoft is a non-profit organization working to impart education among the financially challenged sections. The organization has provisions of student internships, student mentorship, and the scope to volunteer.
                <ul>
                  <li>I'm immersed in a project that involves leveraging MongoDB, Express.js, React.js, and Node.js to build a dynamic web application.</li>
                  <li>My tasks include API development, front-end design, and debugging, contributing to a seamless user experience.</li>
                  <li>This hands-on experience allows me to deepen my understanding of full-stack development and refine my skills in JavaScript and web application architecture.</li>
                </ul>
              </p>
            </div>

            <div className="resume-wrap">
              <span className="date">2023</span>
              <h2>Full Stack Developer Intern</h2>
              <span className="position">Infotrixs</span>
              <p className="mt-4">
                INFOTRIXS is a Software Development Company that specializes in providing software solutions. With a team of highly skilled professionals, we strive to deliver projects to our clients.
                <ul>
                  <li>As a full-stack intern working on a real estate app project, I'm tasked with developing features that streamline property listings, user profiles, and search functionalities.</li>
                  <li>Utilizing technologies like React.js for frontend and Node.js for backend, I contribute to creating an intuitive UI and robust server-side logic, ensuring an immersive experience for both buyers and sellers.</li>
                  <li>I'm gaining invaluable experience in database management, API integration.</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
