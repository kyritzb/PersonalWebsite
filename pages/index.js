import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
const LoadingState = (props) => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <div className="loading-state-container">
        <Head>
          <title>Bryan Kyritz</title>
        </Head>
        <div className="loading-state-loading-state">
          <div className="loading-state-group25">
            <img
              alt="image31701"
              src="/playground_assets/image31701-rywc-600h.png"
              className="loading-state-image3"
            />
            <video
              src="/videos/start.mp4"
              autoPlay
              muted
              poster="/playground_assets/video%20cover%20ayp1nj9zu3k-500h.png"
              playsInline
              className="loading-state-video"
              onEnded={() => {
                router.push("/story");
              }}
              style={{ borderRadius: "25px" }}
            ></video>
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
            top: 15vh;
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
    </>
  );
};

export default LoadingState;
