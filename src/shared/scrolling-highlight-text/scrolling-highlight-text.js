import React, { useEffect, useRef, useState } from "react";
import "./scrolling-highlight-text.css";

const ScrollingHighlightText = ({
  children,
  threshold = 1, // Trigger when 10% of the component is visible
  highlightColor = "yellow",
  borderRadius = "0.5rem",
  transitionDuration = "1s",
  textPadding = "0.25rem 0.75rem",
}) => {
  const highlightRef = useRef(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const previousY = useRef(0);

  useEffect(() => {
    const observerOptions = {
      threshold: threshold,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const currentY = entry.boundingClientRect.y;
        const isScrollingDown = currentY > previousY.current;
        previousY.current = currentY;

        if (entry.isIntersecting) {
          setIsHighlighted(true);
        } else if (!entry.isIntersecting && isScrollingDown) {
          // Reset the highlight if scrolled down out of view
          setIsHighlighted(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

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
