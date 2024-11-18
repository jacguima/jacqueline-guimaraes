import React, { useEffect, useRef } from "react";
import "./scrolling-highlight-text.css";

const ScrollingHighlightText = ({
  children,
  startPointRatio = 1,
  endPointRatio = 0.5,
  highlightColor = "yellow",
  borderRadius = "0.5rem",
  textPadding = "0.25rem 0.75rem",
}) => {
  const highlightRef = useRef(null);
  const highlightBgRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (highlightRef.current) {
            // Your scroll handling logic
            const rect = highlightRef.current.getBoundingClientRect();
            const windowHeight =
              window.innerHeight || document.documentElement.clientHeight;

            const startPoint = windowHeight * startPointRatio;
            const endPoint = windowHeight * endPointRatio;

            const progress = (startPoint - rect.top) / (startPoint - endPoint);
            const clampedProgress = Math.max(0, Math.min(progress, 1));

            if (highlightBgRef.current) {
              highlightBgRef.current.style.width = `calc(${clampedProgress * 100}% + 0.5rem)`;
            }
          }
          ticking = false;
        });
        ticking = true;
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
      if (highlightBgRef.current) {
        highlightBgRef.current.style.backgroundColor = highlightColor;
        highlightBgRef.current.parentElement.style.borderRadius = borderRadius;
      }
    }
  }, [highlightColor, borderRadius, textPadding]);

  return (
    <span className="scrolling-highlight-text" ref={highlightRef}>
      <span className="highlight-bg" ref={highlightBgRef}></span>
      {children}
    </span>
  );
};

export default ScrollingHighlightText;
