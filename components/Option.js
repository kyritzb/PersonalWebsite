import React, { useState } from "react";

const Option = ({ text, callback, black, url, page }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  function onClicked() {
    console.log(url);
    if (url) {
      window.location.href = url;
    } else if (page) {
      console.log("yeah");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: black ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
        fontSize: black ? "23px" : "26px",
        cursor: "pointer",
        fontStyle: "Regular",
        fontFamily: "Pixeloid Mono",
        fontWeight: 400,
        textDecoration: isHovering ? "underline" : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <img
          src={
            black
              ? "/playground_assets/mask_group2.png"
              : "/playground_assets/mask_group.png"
          }
          style={{ height: "28px", opacity: isHovering ? 1 : 0 }}
        />
      </div>

      <div onClick={onClicked}>{text}</div>
    </div>
  );
};

export default Option;
