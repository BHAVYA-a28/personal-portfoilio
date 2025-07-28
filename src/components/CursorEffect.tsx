import React, { useEffect, useState } from 'react';

export function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateFollowerPosition = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
    };

    window.addEventListener('mousemove', updateMousePosition);
    const interval = setInterval(updateFollowerPosition, 16);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearInterval(interval);
    };
  }, [mousePosition]);

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${mousePosition.x - 10}px`,
          top: `${mousePosition.y - 10}px`,
        }}
      />
      <div
        className="cursor-follower"
        style={{
          left: `${followerPosition.x - 20}px`,
          top: `${followerPosition.y - 20}px`,
        }}
      />
    </>
  );
}