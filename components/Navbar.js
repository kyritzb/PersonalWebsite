import React from "react";

const LoadingState = (props) => {
  return (
    <div style={{ position: "absolute", top: "10vh" }}>
      <div className="loading-state-frame7">
        <span className="loading-state-text">
          <span>Bryan Kyritz</span>
        </span>
        <div className="loading-state-frame29">
          <div className="loading-state-select">
            <div className="loading-state-frame30">
              <span className="loading-state-text2">
                <span>Resume</span>
              </span>
            </div>
          </div>
          <div className="loading-state-select1">
            <div className="loading-state-frame301">
              <span className="loading-state-text4">
                <span>Portfolio</span>
              </span>
            </div>
          </div>
          <div className="loading-state-select2">
            <div className="loading-state-frame302">
              <span className="loading-state-text6">
                <span>Blog</span>
              </span>
            </div>
          </div>
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
            width: 973.067626953125px;
            height: 547.123779296875px;
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
            border-width: 0;
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
            width: 973px;
            height: 547px;
            margin: auto;
            position: absolute;
            border-color: transparent;
          }
          .loading-state-video {
            width: 695px;
            height: 496px;
            align-self: center;
          }
          .loading-state-frame7 {
            top: 137px;
            left: 0px;
            right: 0px;
            width: auto;
            display: flex;
            position: absolute;
            margin-top: auto;
            align-items: center;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-sixunits);
            border-color: transparent;
            margin-right: var(--dl-space-space-sixunits);
            margin-bottom: auto;
            justify-content: space-between;
          }
          .loading-state-text {
            color: rgba(77, 0, 138, 1);
            height: auto;
            font-size: 32px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Pixeloid Sans;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
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
            margin-right: 68px;
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
            font-size: 32px;
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
            margin-right: 68px;
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
            font-size: 32px;
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
            font-size: 32px;
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
