import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="top-bar">
        <div className="rectangle" />
        <div className="title">PortMe</div>
        <div className="navbar">
          <div className="tab">Home</div>
          <div className="tab">About</div>
          <div className="tab">Projects</div>
          <div className="tab">Contact</div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Port Me</div>
        </div>
        <img className="vector" alt="Vector" src="vector-200-4.svg" />
      </div>
      <div className="div">
        <div className="avatar" />
        <div className="container-2">
          <div className="title-2">김영웅</div>
          <div className="selection">
            <div className="label-normal">
              <div className="label-text">Front-End Developer</div>
            </div>
          </div>
          <p className="text-wrapper-2">Passionate about coding and creating innovative solutions.</p>
        </div>
        <img className="img" alt="Vector" src="vector-200-2.svg" />
      </div>
      <div className="section-2">
        <div className="container-3">
          <div className="text-wrapper">My Projects</div>
          <p className="description">Check out some of my work.</p>
          <div className="list">
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">Project image</div>
                  <div className="tag">
                    <div className="text">Web Development</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-4">Project 1</div>
                <div className="subtitle">PortMe</div>
              </div>
            </div>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <div className="title-3">Project image</div>
                  <div className="tag">
                    <div className="text">App Development</div>
                  </div>
                </div>
              </div>
              <div className="text-content">
                <div className="title-4">Project 2</div>
                <div className="subtitle">츄카</div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-2" alt="Vector" src="vector-200-6.svg" />
      </div>
      <div className="section">
        <div className="container-4">
          <div className="title-5">Skills</div>
          <p className="text-wrapper-2">Here are my areas of expertise.</p>
        </div>
        <div className="list-2">
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-6">Front-End Development</div>
                <div className="subtitle-2">Web &amp; App</div>
                <p className="text-wrapper-2">HTML, CSS, JavaScript, React, React Native</p>
                <div className="label-normal-wrapper">
                  <div className="label-normal">
                    <div className="label-text">Professional</div>
                  </div>
                </div>
                <div className="user">
                  <div className="avatar-2">
                    <div className="avatar-3" />
                    <div className="title-wrapper">
                      <div className="title-7">John Doe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-6">UI/UX Design</div>
                <div className="text-wrapper-2">Sketch, Adobe XD, InVision</div>
                <div className="label-normal-wrapper">
                  <div className="label-normal">
                    <div className="label-text">Professional</div>
                  </div>
                </div>
                <div className="user">
                  <div className="avatar-2">
                    <div className="avatar-3" />
                    <div className="title-wrapper">
                      <div className="title-7">Jane Smith</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector-3" alt="Vector" src="vector-200.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">History</div>
          <div className="list-3">
            <div className="item">
              <div className="div-wrapper">
                <div className="icon">🎓</div>
              </div>
              <div className="frame-2">
                <div className="title-8">인하공업전문대학</div>
                <div className="subtitle-3">컴퓨터시스템과</div>
              </div>
              <div className="subtitle-4">2018 - 2024.02 (졸업예정)</div>
            </div>
            <div className="item">
              <div className="div-wrapper">
                <div className="icon">🇰🇷</div>
              </div>
              <div className="frame-2">
                <div className="title-8">청해부대 30진</div>
                <div className="subtitle-3">대한민국 해군</div>
              </div>
              <div className="subtitle-4">2018 - 2020</div>
            </div>
            <div className="item">
              <div className="div-wrapper">
                <div className="icon">🖥️</div>
              </div>
              <div className="frame-2">
                <div className="title-8">와이에스지</div>
                <div className="subtitle-3">대리(비개발직)</div>
              </div>
              <div className="subtitle-4">2018 - Present</div>
            </div>
          </div>
        </div>
        <img className="vector-4" alt="Vector" src="image.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Contact Me</div>
          <div className="input">
            <div className="title-9">Name</div>
            <div className="textfield">
              <div className="text-2">Enter your name</div>
            </div>
            <div className="info">Required</div>
          </div>
          <div className="input">
            <div className="title-9">Email</div>
            <div className="textfield">
              <div className="text-2">Enter your email</div>
            </div>
            <div className="info">Required</div>
          </div>
          <div className="input">
            <div className="title-9">Message</div>
            <div className="textfield">
              <div className="text-2">Enter your message</div>
            </div>
            <div className="info">Required</div>
          </div>
          <button className="button">
            <div className="primary">
              <div className="title-10">Send Message</div>
            </div>
          </button>
        </div>
        <img className="vector-5" alt="Vector" src="vector-200-3.svg" />
      </div>
      <div className="section">
        <div className="map-container">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="title-11">인천시 부평구</div>
              <img className="ic-location" alt="Ic location" src="ic-location.svg" />
            </div>
          </div>
        </div>
        <img className="vector-6" alt="Vector" src="vector-200-5.svg" />
      </div>
      <div className="container-wrapper">
        <div className="container-5">
          <div className="title-12">© 2023 HeroSoft</div>
        </div>
      </div>
    </div>
  );
};
export default App