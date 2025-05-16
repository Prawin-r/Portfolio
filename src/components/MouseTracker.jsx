// src/components/CustomCursor.jsx
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-50 w-3 h-3 bg-white rounded-full pointer-events-none"
        style={{
          transform: `translate(${coords.x}px, ${coords.y}px)`,
        }}
      />
      <div
        className="fixed top-0 left-0 z-40 w-10 h-10 border-2 border-white rounded-full pointer-events-none transition-all duration-150"
        style={{
          transform: `translate(${coords.x - 20}px, ${coords.y - 20}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
