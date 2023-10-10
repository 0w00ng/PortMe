import React from "react";
import Hero from "./img/Hero.jpg";
import Location from "./img/location.png";
import Icon from "./img/icon.ico"
import Chucar from "./img/chucar-logoN1.png"
import Iphone from "./img/iphonex3365689640.png"
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="top-bar">
        <img className="rectangle" alt="icon" src={Icon}/>
        <div className="title">PortMe</div>
        <div className="navbar">
          <div className="tab">Home</div>
          <div className="tab">About</div>
          <div className="tab">Projects</div>
          <div className="tab">Contact</div>
        </div>
      </div>
      <div className="div">
        <img className="avatar" alt="Profile" src={Hero}/>
        <div className="container-2">
          <div className="title-2">김영웅</div>
          <div className="selection">
            <div className="label-normal">
              <div className="label-text">IOS Developer</div>
            </div>
          </div>
          <p className="text-wrapper-2">IOS 개발자 준비중인 25세 김영웅입니다.</p>
        </div>
        <img className="img" alt="Vector" src="vector-200-2.svg" />
      </div>
      <div className="section-2">
        <div className="container-3">
          <div className="text-wrapper">My Projects</div>
          <p className="description">Check out some of my work.</p>
          <div className="list">
            <div className="card-1">
              <a className="card" href="https://www.KHero.me">
                <div className="image-container">
                  <img className="image" alt="Portme" src={Icon}/>
                    <div className="tag">
                      <div className="text">Web Development</div>
                    </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Project 1</div>
                  <div className="subtitle">PortMe (React)</div>
                  <div className="description">개인 이력서</div>
                </div>
              </a>
              <a className="card" href="https://github.com/0w00ng/Chucar">
                <div className="image-container">
                <img className="image" alt="Chucar" src={Chucar}/>
                    <div className="tag">
                      <div className="text">App Development</div>
                    </div>
                </div>
                <div className="text-content">
                  <div className="title-4">Project 2</div>
                  <div className="subtitle">츄카 (ReactNative)</div>
                  <div className="description">중고차 견적플랫폼</div>
                </div>
              </a>
            </div>
            <div className="card">
              <div className="image-container">
              <img className="image" alt="Chucar" src={Iphone}/>
                  <div className="tag">
                    <div className="text">App Development</div>
                  </div>
              </div>
              <div className="text-content">
                <div className="title-4">Project 3</div>
                <div className="subtitle">미정 (IOS)</div>
                <div className="description">진행중..</div>
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
                <div className="title-6">Web Development</div>
                <div className="subtitle-2">Front-End</div>
                <p className="text-wrapper-2">HTML, CSS, JavaScript, React</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-6">App Development</div>
                <div className="subtitle-2">Cross</div>
                <div className="text-wrapper-2">ReactNative</div>
                <div className="subtitle-2">IOS</div>
                <div className="text-wrapper-2">Swift</div>
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
          <a>Email : gmrfy9906@naver.com</a>
          <a href="http://herokim.tistory.com">blog : herokim.tistory.com</a>
        </div>
      </div>
      <div className="section">
            <img className="overlap-group" alt="location" src={Location}/>
        <img className="vector-6" alt="Vector" src="vector-200-5.svg" />
      </div>
      <div className="container-wrapper">
        <div className="container-5">
          <div className="title-12">Hero Kim</div>
        </div>
      </div>
    </div>
  );
};
export default App