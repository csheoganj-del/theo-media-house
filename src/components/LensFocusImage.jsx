import React, { useState, useEffect } from 'react';

export default function LensFocusImage({ src, alt, className, style, ...props }) {
  const [focused, setFocused] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    if (src !== currentSrc) {
      setFocused(false);
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

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%', borderRadius: 'inherit' }}>
      <img
        src={currentSrc}
        alt={alt}
        className={`lens-focus-img ${focused ? 'focused' : ''} ${className || ''}`}
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
