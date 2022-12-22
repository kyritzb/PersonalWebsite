import React from "react";

import Navbar from "../components/Navbar";
import Option from "../components/Option";
const LoadingState = (props) => {
  function nextScreen() {
    console.log("Yeah yeah sung");
  }
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "rgba(108, 69, 193, 1)",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "flex-start",
          flexShrink: "0",
          borderColor: "transparent",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "transparent",
            width: "973.067626953125px",
            height: "547.123779296875px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "0",
            marginRight: "0",
            marginBottom: "0",
            flexShrink: 1,
            alignSelf: "auto",
            boxSizing: "border-box",
            borderRadius: "0px 0px 0px 0px",
            borderWidth: "0",
            borderColor: "transparent",
            borderStyle: "none",
            position: "absolute",
            top: "15vh",
            left: "0px",
            margin: "auto",
            right: "0px",
          }}
        >
          <div
            style={{
              backgroundColor: "transparent",
              width: "1200px",
              height: "547.123779296875px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: "0",
              flexShrink: 1,
              alignSelf: "auto",
              boxSizing: "border-box",
              borderRadius: "0px 0px 0px 0px",
              borderWidth: "0",
              borderColor: "transparent",
              borderStyle: "none",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}
          >
            <img
              src="/playground_assets/image31701-rvh-600h.png"
              alt="image31701"
              style={{
                width: "973px",
                height: "547px",
                borderColor: "transparent",
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
            />
          </div>
          <div
            style={{
              width: "666px",
              height: "451px",
              borderColor: "transparent",
              position: "absolute",
              top: "49px",
              left: "154px",
              backgroundColor: "#F8F8F8",
            }}
          />

          <div
            style={{
              width: "437px",
              height: "437px",
              borderColor: "transparent",
              position: "absolute",
              top: "100px",
              left: "180px",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Option text="Companies" black={true} />
              <Option text="Portfolio" black={true} />
              <Option text="Work Experience" black={true} />
              <Option text="Skills" black={true} />
              <Option
                text="Blog"
                black={true}
                url="https://medium.com/@bryan-kyritz"
              />
              <Option
                text="Github"
                black={true}
                url="https://github.com/kyritzb"
              />
              <Option
                text="Twitter"
                black={true}
                url="https://twitter.com/kyritzb"
              />
              <Option
                text="Linkedin"
                black={true}
                url="https://www.linkedin.com/in/bryan-kyritz-500b40179/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
