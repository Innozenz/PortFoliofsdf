import React, { useState, useEffect } from "react";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 45, y: 45 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div
      className="custom-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <div className="light-effect"></div>
    </div>
  );
}
