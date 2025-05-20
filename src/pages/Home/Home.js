// src/App.jsx
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Home.css";

const SECTIONS = [
  {
    title: "",
    subtitle: "",
    bg: "/images/bg1.png",
  },
  {
    title: "",
    subtitle: "",
    bg: "/images/bg2.png",
  },
  {
    title: "",
    subtitle: "",
    bg: "/images/bg3.png",
  },
];

function Home() {
  return (
    <ReactFullpage
      // fullpage.js 配置，更多可查文档
      navigation // 右侧小圆点
      scrollingSpeed={700}
      scrollOverflow={false}
      render={() => (
        <ReactFullpage.Wrapper>
          {SECTIONS.map(({ title, subtitle, bg }, idx) => (
            <div
              key={idx}
              className="section custom-section"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default Home;
