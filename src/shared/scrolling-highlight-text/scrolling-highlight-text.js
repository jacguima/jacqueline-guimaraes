import React, { useEffect, useRef, useState } from "react";
import "./scrolling-highlight-text.css";

const ScrollingHighlightText = ({
  children,
  threshold = 0.1, // Trigger when 10% of the component is visible
  highlightColor = "yellow",
  borderRadius = "0.5rem",
  transitionDuration = "1s",
  textPadding = "0.25rem 0.75rem",
}) => {
  const highlightRef = useRef(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: threshold,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsHighlighted(true);
          observer.unobserve(entry.target); // Stop observing after highlighting
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
    }

    return () => {
      if (highlightRef.current) {
        observer.unobserve(highlightRef.current);
      }
    };
  }, [threshold]);

  return (
    <span
      className={`scrolling-highlight-text ${isHighlighted ? "highlighted" : ""}`}
      ref={highlightRef}
      style={{
        padding: textPadding,
      }}
    >
      <span
        className="highlight-bg"
        style={{
          backgroundColor: highlightColor,
          borderRadius: borderRadius,
          transitionDuration: transitionDuration,
        }}
      ></span>
      {children}
    </span>
  );
};

export default ScrollingHighlightText;
