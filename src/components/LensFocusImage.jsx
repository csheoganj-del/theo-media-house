import React, { useState, useEffect } from 'react';

export default function LensFocusImage({ src, alt, className, style, ...props }) {
  const [focused, setFocused] = useState(false);
  const [breathing, setBreathing] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (src !== currentSrc) {
      setFocused(false);
      setBreathing(false);
      setCurrentSrc(src);
    }
  }, [src, currentSrc]);

  useEffect(() => {
    if (!focused) {
      const timer = setTimeout(() => {
        setFocused(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [focused]);

  useEffect(() => {
    if (focused) {
      const timer = setTimeout(() => {
        setBreathing(true);
      }, 1200); // Activate breathing after focus transition completes (1.2s)
      return () => clearTimeout(timer);
    } else {
      setBreathing(false);
    }
  }, [focused]);

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%', borderRadius: 'inherit' }}>
      <img
        src={currentSrc}
        alt={alt}
        className={`lens-focus-img ${focused ? 'focused' : ''} ${breathing ? 'breathing' : ''} ${className || ''}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...style
        }}
        {...props}
      />
    </div>
  );
}
