import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Hero.module.css";
import BetaPlayButton from "./BetaPlayButton";

/**
 * Hero section - main landing block
 * Contains title, description and main CTA
 */
export default function Hero(): JSX.Element {
  return (
    <section className={styles.hero} id="about">
      <div className="container">
        <div className={styles.heroContent}>
          {/* Left column with text */}
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Grammar AI: Fix Your Text Instantly</h1>
            <h2 className={styles.heroSubtitle}>AI-powered grammar correction and translation. Simple, fast, and accurate.</h2>
            {/* Trust line */} <BetaPlayButton location="hero" showMicroText={false} />
            <p className={styles.trustLine}>Free • No ads • Privacy-focused</p>
          </div>

          {/* Right column with app mockup */}
          <div className={styles.heroImage}>
            <img src={useBaseUrl("/img/gramar.jpg")} alt="Grammar AI application interface" className={styles.phoneMockup} />
          </div>
        </div>
      </div>
    </section>
  );
}
