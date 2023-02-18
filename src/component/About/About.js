import React from "react";
import dp from '../../img/graph (1).png'

const About = () => {
  return (
    <div>
      <div className="top-banner text-start">
        <h1>About Me</h1>
        <p>
          Home // <span>About Me</span>
        </p>
      </div>

      <div className="m-5 p-5">
        <img className="p-5 img-fluid" src={dp} alt="" />
        <h1>Hope you would like to read about me...!!!</h1>
        <h3>I am a Web Developer</h3>
        <p>As a web developer, it's important to always be learning and growing in order to stay on top of the latest technologies and trends. That's why I'm setting a goal for myself to work hard and continuously improve my skills as a web developer in the future.</p>
        <br />
        <p>One of my main goals is to become proficient in the latest web development technologies and frameworks. This means staying up-to-date with the latest releases and updates, and actively seeking out opportunities to work with new technologies. Some of the technologies and frameworks I'm currently focused on include React, Node.js, and GraphQL.</p>
        <br />
        <p>Another goal I have is to improve my design skills. While I have a solid understanding of HTML, CSS, and JavaScript, I want to continue to hone my design skills to create more visually appealing and user-friendly interfaces. This means studying design principles and best practices, and working on more design-focused projects.</p>
        <br />
        <p>In addition to technical skills, I also want to focus on improving my communication and collaboration skills. As a web developer, it's important to be able to communicate effectively with team members, clients, and stakeholders. This means practicing active listening, asking thoughtful questions, and providing clear and concise updates on project progress.</p>
        <br />
        <p>Finally, I want to continue to challenge myself by taking on new and more complex projects. By pushing myself out of my comfort zone, I'll be able to grow and improve as a developer, while also building a more diverse portfolio.</p>
        <br />
        <p>Overall, my future goal is to work hard and continuously improve my skills as a web developer. By staying up-to-date with the latest technologies and frameworks, improving my design skills, focusing on communication and collaboration, and taking on new and challenging projects, I'm confident that I'll be able to achieve my goals and continue to grow as a developer.</p>
        <br />

      </div>
    </div>
  );
};

export default About;
