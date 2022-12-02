import React from "react";

import Navbar from "../components/Navbar";
import ChatBubble from "../components/ChatBubble";
const LoadingState = (props) => {
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
              width: "973.067626953125px",
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
          <img
            src="/playground_assets/rectangle91997-cwu-500h.png"
            alt="Rectangle91997"
            style={{
              width: "666px",
              height: "451px",
              borderColor: "transparent",
              position: "absolute",
              top: "49px",
              left: "154px",
            }}
          />
          <img
            src="/playground_assets/giffycanvas11997-9wmm-200w.png"
            alt="giffycanvas11997"
            style={{
              width: "82px",
              height: "82px",
              borderColor: "transparent",
              position: "absolute",
              top: "159px",
              left: "504px",
            }}
          />
          <img
            src="/playground_assets/frame11227-6es-500h.png"
            alt="Frame11227"
            style={{
              width: "437px",
              height: "437px",
              borderColor: "transparent",
              position: "absolute",
              top: "54px",
              left: "267px",
            }}
          />
          <ChatBubble
            messages={[
              "Hello world! My name is Bryan Kyritz.",
              "I just graduated! With a masters in computer eng.",
              "From Stevens Institute of technology.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
