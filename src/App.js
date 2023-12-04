import React from "react";
import Hero from "./img/Hero.jpg";
import Location from "./img/location.png";
import Icon from "./img/icon.ico"
import Chucar from "./img/chucar-logoN1.png"
import Iphone from "./img/iphonex3365689640.png"
import ReactImg from "./img/react.png"
import EtcImg from "./img/ETC.png"
import XcodeImg from "./img/xcode.jpeg"
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="top-bar">
        <img className="rectangle" alt="icon" src={Icon}/>
        <div className="title">PortMe</div>
        <div className="navbar">
          {/* <div className="tab">Home</div>
          <div className="tab">About</div>
          <div className="tab">Projects</div>
          <div className="tab">Contact</div> */}
        </div>
      </div>
      <div className="div">
        <img className="avatar" alt="Profile" src={Hero}/>
        <div className="container-2">
          <div className="title-2">김영웅</div>
          <div className="selection">
            <div className="label-normal">
              <div className="label-text">Intro</div>
            </div>
          </div>
          <p className="text-wrapper-2">개발자 준비중인 25세 김영웅입니다.</p>
          <p className="text-wrapper-2">• 좋은 커뮤니케이션 능력 - 팀원들과의 협업을 중요시 여기며 명확하고 효과적으로 의사를 전달할 수 있습니다.</p>
          <p className="text-wrapper-2">• 빠른 성장에 목말라 있고, 훌륭한 동료들과 임팩트 큰 결과물을 만들어보고 싶은 마음을 가지고 있습니다.</p>
          <p className="text-wrapper-2">• 어떤 환경에서도 적응하고 본인을 성장시킬 수 있는 용기와 열정을 가졌습니다.</p>
          <p className="text-wrapper-2">• 누구도 설득할 수 있는 커뮤니케이션 능력과 끈질긴 집념을 가졌습니다.</p>
          <p className="text-wrapper-2">• iOS와 더불어 ReactNative 개발 경험도 있습니다.</p>
          <p className="text-wrapper-2">• 자료구조, 알고리즘, 디자인패턴에 대한 높은 이해도를 가진 분</p>
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
                  <div className="subtitle">PortMe</div>
                  <div className="description">현재 표시되고 있는 사이트</div>
                  <div className="description">1인개발 / 2개월 / React,Yarn,Figma / AWS Amplify / AWS Route 53</div>
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
                  <div className="subtitle">츄카</div>
                  <div className="description">중고차 견적비교 플랫폼</div>
                  <div className="description">2인개발 / 6개월 / ReactNative / NPM / AWS S3 / AWS EC2</div>
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
                <img className="image" src={ReactImg}/>
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
                <img className="image" src={XcodeImg}/>
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
          <div className="row">
            <div className="article">
              <div className="image-wrapper">
                <img className="image" src={EtcImg}/>
              </div>
              <div className="frame">
                <div className="title-6">ETC.</div>
                <div className="subtitle-2">Development</div>
                <div className="text-wrapper-2">C,C++ / CS / Data Structure / Algorithm</div>
                <div className="subtitle-2">Communication</div>
                <div className="text-wrapper-2">Slack, Github, Figma, Gather</div>
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
                <div className="icon">🖥️</div>
              </div>
              <div className="frame-2">
                <div className="title-8">와이에스지</div>
                <div className="subtitle-3">대리(비개발직)</div>
              </div>
              <div className="subtitle-4">2018 - Present</div>
            </div>
            <div className="item">
              <div className="div-wrapper">
                <div className="icon">📱</div>
              </div>
              <div className="frame-2">
                <div className="title-8">앨런 Swift 마스터 스쿨 28기</div>
                <div className="subtitle-3">IOS 온라인 부트캠프</div>
              </div>
              <div className="subtitle-4">2023 - Present</div>
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
          <div className="title-12">
          </div>
        </div>
      </div>
    </div>
  );
};
export default App