import React, { useEffect, useState } from "react";

const ChatBubble = ({ messages, onDone }) => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("");
  const [index, setIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    //select message number
    console.log(messages);
    if (messages.length > 0 && messageIndex == 0) {
      console.log("set");
      setFullText(messages[0]);
    }
    //start counter
    if (index < fullText.length) {
      setTimeout(() => {
        console.log("set text:", text + fullText[index]);
        setText(text + fullText[index]);
        setIndex(index + 1);

        let doneWithWord = index + 1 == fullText.length;

        if (doneWithWord && messages.length > messageIndex) {
          let newIndex = messageIndex++;
          setFullText(messages[newIndex]);
          console.log("set new word");
        }
      }, 150);
    }
  }, [index, messageIndex, fullText.length]);

  return (
    <div
      style={{
        width: "300px",
        height: "126.72943878173828px",
        display: "flex",
        alignItems: "flex-start",
        flexShrink: "0",
        borderColor: "transparent",
        position: "absolute",
        top: "352px",
        left: "304px",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          width: "358px",
          height: "126.72943878173828px",
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
          top: "0px",
          left: "0px",
        }}
      >
        <img
          src="/playground_assets/rectangle21998-ei68-200h.png"
          alt="Rectangle21998"
          style={{
            width: "323px",
            height: "96px",
            borderColor: "transparent",
            position: "absolute",
            top: "19.201416015625px",
            left: "17.06787109375px",
          }}
        />
        <img
          src="/playground_assets/image6006002639pokemondialogboxpokemontextboxpngtr1998-cx8l-200h.png"
          alt="IMAGE6006002639pokemondialogboxpokemontextboxpngtr1998"
          style={{
            width: "358px",
            height: "127px",
            borderColor: "transparent",
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        />
      </div>
      <span
        style={{
          color: "rgba(0, 0, 0, 1)",

          height: "auto",
          textAlign: "left",
          width: "auto",
          lineHeight: "162.02940940856934%",
          marginRight: "0",
          marginBottom: "0",
          alignSelf: "auto",
          position: "absolute",
          top: 39.256256103515625,
          left: 37.123046875,
          fontFamily: "Pixeloid Mono",
          fontSize: 17,
          fontStretch: "normal",
          fontStyle: "Regular",
          fontWeight: 400,
          textDecoration: "none",
        }}
      >
        <span>{text}</span>
      </span>
      <img
        src="/playground_assets/image71998-tbnt-200w.png"
        alt="image71998"
        style={{
          width: "23px",
          height: "26px",
          borderColor: "transparent",
          position: "absolute",
          top: "70.40524291992188px",
          left: "301.2490234375px",
        }}
      />
    </div>
  );
};

export default ChatBubble;
