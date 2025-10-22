import React, { useState, useEffect } from "react";
import styles from "./StickyMobileCTA.module.css";

/**
 * StickyMobileCTA component - sticky button at bottom on mobile devices
 * Shown only when user scrolls down the page
 */
export default function StickyMobileCTA(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling 300px
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.stickyContainer} ${isVisible ? styles.visible : ""}`}>
      <a href="https://play.google.com/store/apps/details?id=app.grammar.ai" className={styles.stickyButton} target="_blank" rel="noopener noreferrer">
        📱 Download on Google Play
      </a>
    </div>
  );
}
