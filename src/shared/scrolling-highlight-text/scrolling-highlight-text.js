import React, { useEffect, useRef } from "react";
import "./scrolling-highlight-text.css";

const ScrollingHighlightText = ({
  children,
  startPointRatio = 1,
  endPointRatio = 0.5,
  highlightColor = "yellow",
  borderRadius = "0.5rem",
  transitionDuration = "0.5s",
  textPadding = "0.25rem 0.75rem",
}) => {
  const highlightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (highlightRef.current) {
        const rect = highlightRef.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const startPoint = windowHeight * startPointRatio;
        const endPoint = windowHeight * endPointRatio;

        const progress = (startPoint - rect.top) / (startPoint - endPoint);
        const clampedProgress = Math.max(0, Math.min(progress, 1));

        const highlightBg = highlightRef.current.querySelector(".highlight-bg");
        if (highlightBg) {
          // Set width relative to the container width instead of just content
          highlightBg.style.width = `calc(${clampedProgress * 100}% + 0.5rem)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [startPointRatio, endPointRatio]);

  useEffect(() => {
    if (highlightRef.current) {
      highlightRef.current.style.padding = textPadding;
      const highlightBg = highlightRef.current.querySelector(".highlight-bg");
      if (highlightBg) {
        highlightBg.style.backgroundColor = highlightColor;
        highlightBg.parentElement.style.borderRadius = borderRadius;
        highlightBg.style.transitionDuration = transitionDuration;
      }
    }
  }, [highlightColor, borderRadius, transitionDuration]);

  return (
    <span className="scrolling-highlight-text" ref={highlightRef}>
      <span className="highlight-bg"></span>
      {children}
    </span>
  );
};

export default ScrollingHighlightText;
