import React from "react";
import styles from "./FinalCTA.module.css";
import BetaPlayButton from "./BetaPlayButton";

/**
 * FinalCTA component - final call to action
 */
export default function FinalCTA(): JSX.Element {
  return (
    <section className={styles.finalCTA}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Start Writing Better Today</h2>

          <BetaPlayButton showMicroText={false} location="final-cta" />
          <p className={styles.ctaSubtitle}>Free grammar correction and translation tool powered by AI</p>
        </div>
      </div>
    </section>
  );
}
