import React from "react";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 45, y: 45 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <div className="light-effect"></div>
    </div>
  );
}