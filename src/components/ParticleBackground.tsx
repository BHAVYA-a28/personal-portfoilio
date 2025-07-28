import React from 'react';

export function ParticleBackground() {
  const particles = Array.from({ length: 9 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        width: `${Math.random() * 4 + 2}px`,
        height: `${Math.random() * 4 + 2}px`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 4}s`,
      }}
    />
  ));

  return <div className="particles">{particles}</div>;
}