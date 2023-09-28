import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="top-bar">
        <div className="rectangle" />
        <div className="title">Developer Portfolio</div>
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Welcome to My Portfolio</div>
          <p className="description">I&#39;m a passionate IT developer showcasing my skills and projects.</p>
        </div>
        <img className="vector" alt="Vector" src="vector-200.svg" />
      </div>
      <img className="img" alt="Section" src="section.png" />
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Skills and Expertise</div>
          <p className="description">Here are some areas where I excel.</p>
          <div className="list">
            <div className="row">
              <div className="article">
                <div className="image-container">
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="div">Web Development</div>
                  <div className="subtitle">Front-end and Back-end</div>
                  <p className="p">Proficient in HTML, CSS, JavaScript, and major frameworks.</p>
                </div>
              </div>
              <div className="article-2">
                <div className="image-container">
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="div">Mobile App Development</div>
                  <p className="p">Experience developing native iOS and Android applications.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="article">
                <div className="image-container">
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="div">Database Management</div>
                  <p className="p">Skilled in SQL and NoSQL databases like MySQL and MongoDB.</p>
                  <div className="selection">
                    <div className="label-normal">
                      <div className="label-text">Certified</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article">
                <div className="image-container">
                  <div className="image" />
                </div>
                <div className="frame">
                  <div className="div">UI/UX Design</div>
                  <p className="p">In-depth knowledge of user-centered design principles.</p>
                  <div className="user">
                    <div className="avatar">
                      <div className="avatar-2" />
                      <div className="title-wrapper">
                        <div className="title-2">Designed by John Doe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="image.svg" />
      </div>
      <div className="section">
        <div className="div-wrapper">
          <div className="title-3">Client Testimonials</div>
        </div>
        <div className="list-2">
          <div className="card">
            <div className="avatar-wrapper">
              <div className="avatar">
                <div className="avatar-3" />
                <div className="title-wrapper">
                  <div className="title-2">Jane Smith</div>
                </div>
              </div>
            </div>
            <p className="title-4">Working with me was a pleasure. They exceeded my expectations.</p>
          </div>
          <div className="card">
            <div className="avatar-wrapper">
              <div className="avatar">
                <div className="avatar-3" />
                <div className="title-wrapper">
                  <div className="title-2">John Doe</div>
                </div>
              </div>
            </div>
            <p className="title-4">Their attention to detail and problem-solving abilities are remarkable.</p>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="vector-200-2.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Technologies Used</div>
          <div className="list-3">
            <div className="item">
              <div className="icon-wrapper">
                <div className="icon">💻</div>
              </div>
              <div className="frame-2">
                <div className="title-5">JavaScript</div>
                <p className="subtitle-2">ES6 and libraries like React</p>
              </div>
            </div>
            <div className="item">
              <div className="icon-wrapper">
                <div className="icon">📱</div>
              </div>
              <div className="frame-2">
                <div className="title-5">Swift</div>
                <div className="subtitle-2">Native iOS development</div>
              </div>
            </div>
            <div className="item">
              <div className="icon-wrapper">
                <div className="icon">🗄️</div>
              </div>
              <div className="frame-2">
                <div className="title-5">MySQL</div>
              </div>
              <div className="subtitle-3">Relational database management system</div>
            </div>
          </div>
        </div>
        <img className="vector-4" alt="Vector" src="vector-200-3.svg" />
      </div>
      <div className="section-2">
        <div className="avatar-4" />
        <div className="container-2">
          <div className="title-6">John Doe</div>
          <div className="selection-2">
            <div className="label-normal">
              <div className="label-text">Full Stack Developer</div>
            </div>
          </div>
          <p className="p">Passionate about creating innovative and scalable solutions.</p>
        </div>
        <img className="vector-5" alt="Vector" src="vector-200-4.svg" />
      </div>
      <div className="section">
        <div className="div-wrapper">
          <div className="title-3">Latest Updates</div>
        </div>
        <div className="list-2">
          <div className="post">
            <div className="image-wrapper">
              <div className="image">
                <div className="title-7">Photo from an event</div>
                <div className="pagination">
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                  <div className="rectangle-3" />
                  <div className="rectangle-3" />
                </div>
              </div>
            </div>
            <div className="text-content">
              <p className="title-8">Had a great time at the tech conference!</p>
              <div className="selection-2">
                <div className="label-normal">
                  <div className="label-text">#TechConference</div>
                </div>
                <div className="label-normal">
                  <div className="label-text">#Networking</div>
                </div>
              </div>
              <div className="avatar-5">
                <div className="avatar-2" />
                <div className="title-wrapper">
                  <div className="title-2">JohnDoeDev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-6" alt="Vector" src="vector-200-5.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Contact Me</div>
          <p className="description">Feel free to reach out. I&#39;d love to hear from you.</p>
          <div className="input">
            <div className="title-9">Name</div>
            <div className="textfield">
              <div className="text">Your Name</div>
            </div>
            <p className="info">Please enter your full name.</p>
          </div>
          <div className="input">
            <div className="title-9">Email</div>
            <div className="textfield">
              <div className="text">Your Email</div>
            </div>
            <p className="info">We&#39;ll never share your email with anyone else.</p>
          </div>
          <div className="input">
            <div className="title-9">Message</div>
            <div className="textfield">
              <div className="text">Your Message</div>
            </div>
          </div>
          <button className="button">
            <div className="primary">
              <div className="title-10">Submit</div>
            </div>
          </button>
        </div>
        <img className="vector-7" alt="Vector" src="vector-200-6.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Project Metrics</div>
          <p className="description">Key performance indicators for recent projects.</p>
          <div className="list-4">
            <div className="metric">
              <div className="title-11">Website Traffic</div>
              <div className="data">4,500</div>
              <div className="change">+10%</div>
            </div>
            <div className="metric">
              <div className="title-11">User Engagement</div>
              <div className="data">6,200</div>
              <div className="change">+15%</div>
            </div>
          </div>
          <div className="container-wrapper">
            <div className="container-3">
              <div className="div">Website Traffic</div>
              <div className="graph">
                <img className="vector-8" alt="Vector" src="vector-2.svg" />
                <div className="overlap-group">
                  <img className="vector-9" alt="Vector" src="vector-2-1.svg" />
                  <img className="vector-10" alt="Vector" src="vector-2-4.svg" />
                  <img className="vector-11" alt="Vector" src="vector-2-5.svg" />
                  <img className="vector-12" alt="Vector" src="vector-2-3.svg" />
                  <div className="group">
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                    <div className="rectangle-6" />
                    <div className="rectangle-7" />
                    <div className="rectangle-8" />
                    <div className="rectangle-9" />
                    <div className="rectangle-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-wrapper">
            <div className="container-3">
              <div className="div">User Engagement</div>
              <img className="graph-2" alt="Graph" src="graph.svg" />
            </div>
          </div>
        </div>
        <img className="vector-13" alt="Vector" src="vector-200-7.svg" />
      </div>
      <div className="section">
        <div className="image-container-2">
          <div className="image-2">
            <p className="title-12">I&#39;m available for freelance projects. Let&#39;s collaborate!</p>
            <div className="pagination-2">
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="rectangle-3" />
              <div className="rectangle-3" />
            </div>
          </div>
        </div>
        <img className="vector-14" alt="Vector" src="vector-200-8.svg" />
      </div>
      <div className="section-3">
        <div className="container-4">
          <div className="title-13">© 2023 John Doe</div>
          <div className="title-14">Privacy Policy</div>
          <div className="title-15">Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
};
export default App;