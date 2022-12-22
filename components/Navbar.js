import React from "react";
import Option from "./Option";
const LoadingState = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "5vh",
        zIndex: 20,
        width: "100%",
        paddingLeft: "100px",
        paddingRight: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <span className="loading-state-text">
          <span>Bryan Kyritz</span>
        </span>
        <div style={{ display: "flex", gap: "45px", flexDirection: "row" }}>
          <Option text="Resume" />
          <Option text="Portfolio" />
          <Option text="Blog" />
        </div>
      </div>

      <style jsx>
        {`
          .loading-state-container {
            min-height: 100vh;
          }
          .loading-state-loading-state {
            width: 100%;
            height: 100vh;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: transparent;
            background-color: rgba(108, 69, 193, 1);
          }
          .loading-state-group25 {
            top: 238px;
            left: 0px;
            right: 0px;

            margin: auto;
            display: flex;
            padding: 0;
            position: absolute;
            align-self: auto;
            box-sizing: border-box;
            margin-top: auto;
            align-items: flex-start;
            flex-shrink: 1;
            margin-left: auto;
            border-color: transparent;
            border-style: none;

            margin-right: auto;
            border-radius: 0px 0px 0px 0px;
            margin-bottom: auto;
            flex-direction: row;
            justify-content: center;
            background-color: transparent;
          }
          .loading-state-image3 {
            top: 0px;
            left: 0px;
            right: 0px;

            height: 547px;
            margin: auto;
            position: absolute;
            border-color: transparent;
          }
          .loading-state-video {
            height: 496px;
            align-self: center;
          }
          .loading-state-frame7 {
            width: 100vw;
            display: flex;
            position: absolute;
            margin-top: auto;
            align-items: center;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .loading-state-text {
            color: rgba(77, 0, 138, 1);
            height: auto;
            font-size: 26px;
            font-style: Bold;
            text-align: left;
            font-family: Pixeloid Sans;
            font-weight: 700;
          }
          .loading-state-frame29 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .loading-state-select {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;

            flex-direction: column;
          }
          .loading-state-frame30 {
            display: flex;
            padding: 10px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: flex-end;
          }
          .loading-state-text2 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 26px;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Pixeloid Mono;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .loading-state-select1 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;

            flex-direction: column;
          }
          .loading-state-frame301 {
            display: flex;
            padding: 10px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: flex-end;
          }
          .loading-state-text4 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 26px;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Pixeloid Mono;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
          .loading-state-select2 {
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
            flex-direction: column;
          }
          .loading-state-frame302 {
            display: flex;
            padding: 10px;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            justify-content: flex-end;
          }
          .loading-state-text6 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 26px;
            align-self: auto;
            font-style: Regular;
            text-align: right;
            font-family: Pixeloid Mono;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            margin-right: 0;
            margin-bottom: 0;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default LoadingState;
